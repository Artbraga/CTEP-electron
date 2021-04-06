import { BaseConverter } from '../app/custom-components/base-converter';
import { Turma } from './turma.model';

export class TurmaAluno {
    public id: number;
    public matricula: string;
    public dataConclusao: Date;
    public codigoConlusaoSistec: string;
    public turma: Turma;
    public alunoId: number;
    public tipoStatusAluno: string;

    get dataConclusaoStr(): string {
        return BaseConverter.DateToStringOnlyDate(this.dataConclusao);
    }
}
