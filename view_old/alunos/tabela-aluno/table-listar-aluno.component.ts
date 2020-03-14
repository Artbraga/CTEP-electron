import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from "@angular/core";
import { BaseTable } from "../../../base/base-table";
import { AlunoService } from "../../../service/aluno.service";
import { Coluna } from "../../../components/table-x/table-x.component";
import { Aluno } from "../../../entities/aluno";
import { MenuItem } from "primeng/primeng";

@Component({
    selector: 'table-listar-aluno',
    templateUrl: './table-listar-aluno.component.html',
})
export class TableListarAlunoComponent extends BaseTable<Aluno> implements OnInit {
    
    @Output() carregaAluno = new EventEmitter<any>();
    @Output() visualizarPerfil = new EventEmitter<string>();
    itensLinha: MenuItem[] = [];

    alunoDelete: Aluno;

    constructor(private alunoService: AlunoService, ref: ChangeDetectorRef){
        super(ref);
    }

    ngOnInit(): void {
        this.colunas = <Coluna[]>[
            { header: "Matricula", field: "matricula", style: { 'width': '120px' } },
            { header: "Nome", field: "nome" },
            { header: "Telefone", field: "telefone", style:{'width':'150px'} },
            { header: "Celular", field: "celular", style:{'width':'150px'} },
            { header: "Turma", field: "turma.codigo", style:{'width':'100px'} },
            { bodyTemplateName: "editarAluno", style:{'width':'50px'} },
            { bodyTemplateName: "excluirAluno", style:{'width':'50px'} },
            { bodyTemplateName: "menuAlunoTemplate", style:{'width':'50px'} }
        ];
    }

    edita(matricula: string){
        this.carregaAluno.emit(matricula);
    }
    
    showConfirmationDelete(item){
        this.alunoDelete = item;
        this.displayDelete = true;
        this.updateView();
    }

    deleteAluno(){
        this.displayDelete = false;
        this.alunoService.deletar(this.alunoDelete.matricula).subscribe()
    }

    onClickLinha(item: any, index: number) {
        this.itensLinha = [];

        this.itensLinha.push({
            label: 'Visualizar perfil', icon: 'fas fa-user-circle', command: (event) => {
                this.visualizarPerfil.emit(item.matricula);
            }
        });
    }
}