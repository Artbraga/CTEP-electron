import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Turma } from '../model/turma.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { FiltroTurma } from 'src/model/filters/turma.filter';
import { RegistroTurma } from 'src/model/registro-turma.model';

@Injectable({ providedIn: 'root', })
export class TurmaService extends BaseService<Turma> {


    constructor(http: HttpClient) {
        super(http, 'Turma');
    }

    public buscarTurmasDeUmCurso(cursoId: number) {
        const url = this.baseURL + `/ListarTurmasDeUmCurso/${cursoId}`;

        return this.http.get<Turma[]>(url);
    }

    public listarTurmasAtivas(): Observable<Turma[]> {
        const url = this.baseURL + `/ListarTurmasAtivas`;

        return this.http.get<Turma[]>(url);
    }

    public pesquisarTurmas(filtro: FiltroTurma) {
        const url = this.baseURL + `/FiltrarTurmas`;

        return this.http.post<Turma[]>(url, filtro);
    }

    public buscarTurmasPorCodigoECurso(codigo: string, cursoId: number): Observable<Turma[]> {
        const url = this.baseURL + `/buscarTurmasPorCodigoECurso/${codigo}${cursoId != null ? `/${cursoId}` : ''}`;

        return this.http.get<Turma[]>(url);
    }

    public gerarCodigoDaTurma(cursoId: number, anoTurma: number): Observable<string> {
        const url = this.baseURL + `/GerarCodigoDaTurma/${cursoId}/${anoTurma}`;

        return this.http.get(url, { responseType: 'text' });
    }

    // registro
    public adicionarRegistro(registro: RegistroTurma): Observable<boolean> {
        const url = this.baseURL + `/AdicionarRegistro`;

        return this.http.post<boolean>(url, registro);
    }

    public excluirRegistro(id: number): Observable<boolean> {
        const url = this.baseURL + '/ExcluirRegistro/' + id;

        return this.http.delete<boolean>(url);
    }
}
