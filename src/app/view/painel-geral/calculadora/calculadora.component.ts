import { Component, OnInit } from '@angular/core';
import { MaskPatterns } from '../../../../model/enums/mask.enum';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { NotificationService } from '../../../custom-components/notification/notification.service';
import { NotificationType } from '../../../custom-components/notification/toaster/toaster';

@Component({
    selector: 'calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
    moneyMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        requireDecimal: true
    });
    percentMask = createNumberMask({
        prefix: '',
        suffix: '%',
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        requireDecimal: true
    });

    valor: string;
    juros: string;
    multa: string;
    vencimento: Date;
    dataPagamento: Date;

    valorJuros: number;
    valorMulta: number;
    valorTotal: number;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.limpar();
    }

    calcular() {
        if (this.vencimento == null) {
            this.notificationService.addNotification('Erro ao calcular.', 'Insira uma data de vencimento.', NotificationType.Error);
            return;
        }
        const dias = this.dateDiffInDays(new Date(this.vencimento), new Date(this.dataPagamento));
        if (dias <= 0) {
            return this.valor;
        } else {
            const valorNumber = this.lerValor(this.valor);
            if (this.multa != null) {
                const multaNumber = this.lerValor(this.multa);
                this.valorMulta = (multaNumber / 100) * valorNumber;
            }
            if (this.juros != null) {
                const jurosNumber = this.lerValor(this.juros);
                this.valorJuros = jurosNumber * dias;
            }
            this.valorTotal = valorNumber + this.valorJuros + this.valorMulta;
            console.log(this.valorTotal);
            return this.valorTotal;
        }
    }

    lerValor(valor: string): number {
        return Number.parseFloat(valor.replace('R$ ', '').replace('%', '').replace(',', '.'));
    }

    valorComoString(valor: number) {
        if (valor == null) {
            return 'R$ 0,00';
        }
        const casas = valor.toString().split('.');
        if (casas.length == 1) {
            return `R$ ${casas[0]},00`;
        } else {
            const decimal = casas [1].substring(0, 2);
            return `R$ ${casas[0]},${decimal}`;
        }
    }

    limpar() {
        this.valor = 'R$0,00';
        this.juros = null;
        this.multa = null;
        this.valorTotal = null;
        this.valorJuros = 0;
        this.valorMulta = 0;
        this.vencimento = null;
        this.dataPagamento = new Date();
    }


    dateDiffInDays(a: Date, b: Date): number {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

}
