import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/model/aluno.model';
import { AlunoService } from 'src/services/aluno.service';
import { FiltroAluno } from 'src/model/filters/aluno.filter';
import { RoutingService } from '../../../../services/routing.service';
import { FiltroAlunoParameter } from '../../../../model/enums/constants';
import { BaixarArquivoService } from '../../../../services/application-services/baixarArquivo.service';
import { Arquivo } from '../../../../model/application-model/arquivo';
import { NotificationService } from '../../../custom-components/notification/notification.service';
import { NotificationType } from '../../../custom-components/notification/toaster/toaster';

@Component({
    selector: 'pesquisar-aluno',
    templateUrl: './pesquisar-aluno.component.html',
    styleUrls: ['./pesquisar-aluno.component.scss'],
})
export class PesquisarAlunoComponent implements OnInit {
    filtro: FiltroAluno;
    list: Aluno[];
    constructor(private alunoService: AlunoService,
                private baixarArquivoService: BaixarArquivoService,
                private notificationService: NotificationService,
                private routingService: RoutingService) {}

    ngOnInit(): void {
        if (this.routingService.possuiValor(FiltroAlunoParameter)) {
            this.filtro = this.routingService.buscarValor(FiltroAlunoParameter);
            this.pesquisar();
        } else {
            this.filtro = new FiltroAluno();
        }
    }

    pesquisar(filtro: FiltroAluno = null) {
        if (filtro != null) {
            this.filtro = filtro;
            this.routingService.salvarValor(FiltroAlunoParameter, this.filtro);
        }
        this.alunoService.pesquisarAlunos(this.filtro).subscribe(data => {
            this.list = data.map(x => Object.assign(new Aluno(), x));
        });
    }

    exportarPesquisa() {
        if (this.list == null || this.list.length == 0) {
            this.notificationService.addNotification('Atenção', 'A pesquisa não possui resultados a serem exportados.', NotificationType.Warnning);
            return;
        }

        this.alunoService.baixarPesquisa(this.filtro).subscribe(data => {
            if (data) {
                this.baixarArquivoService.downloadFile(data, 'exportação.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            }
        },
        err => {
            this.notificationService.addNotification('Erro', 'Erro ao baixar a pesquisa!', NotificationType.Error);
        });
    }

}
