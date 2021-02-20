import { BaseConverter } from '../app/custom-components/base-converter';
import { RegistroAluno } from './registro-aluno.model';
import { TurmaAluno } from './turma-aluno.model';

export class Aluno {
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    orgaoEmissor: string;
    nomePai: string;
    nomeMae: string;
    sexo: string;

    endereco: string;
    bairro: string;
    complemento: string;
    cidade: string;
    cep: string;

    telefone: string;
    celular: string;
    email: string;

    cursoAnterior: string;

    registros: RegistroAluno[];
    turmasAluno: TurmaAluno[] = [];

    dataNascimento: Date;
    tipoStatusAluno: string;

    get dataNascimentoStr(): string {
        return BaseConverter.DateToStringOnlyDate(this.dataNascimento);
    }

    dataMatricula: Date;
    get dataMatriculaStr(): string {
        return BaseConverter.DateToStringOnlyDate(this.dataMatricula);
    }

    dataValidade: Date;
    get dataValidadeStr(): string {
        return BaseConverter.DateToStringOnlyDate(this.dataValidade);
    }

    get turmas(): string {
        return this.turmasAluno.map(x => x.turma.codigo).join(', ');
    }

    corrigirInformacoes() {
        if (this.dataMatricula != null) {
            this.dataMatricula = BaseConverter.StringToDate(this.dataMatricula.toString());
        }
        if (this.dataNascimento != null) {
            this.dataNascimento = BaseConverter.StringToDate(this.dataNascimento.toString());
        }
        if (this.dataValidade != null) {
            this.dataValidade = BaseConverter.StringToDate(this.dataValidade.toString());
        }
        if(this.registros != null) {
            this.registros = this.registros.map(reg => {
                reg = Object.assign(new RegistroAluno(), reg);
                reg.data = BaseConverter.StringToDate(reg.data.toString());
                return reg;
            });
        }
    }
}