import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../model/usuario.model';
import { version } from '../../../../package.json';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public version: string = version;
    @ViewChild('sidenav', {static: false}) sidenav: MatDrawer;

    get usuarioLogado(): Usuario {
        return this.usuarioService.buscarUsuarioLogado();
    }
    constructor(private usuarioService: UsuarioService, private router: Router) { }

    ngOnInit(): void {
    }

    desenhar(move: string) {
        switch (move) {
            case 'in': {
                if (!this.sidenav.opened) {
                    this.sidenav.toggle();
                }
                break;
            }
            case 'out': {
                if (this.sidenav.opened) {
                    this.sidenav.toggle();
                }
                break;
            }
        }
    }

    redirecionar(rota: string) {
        this.router.navigate([{ outlets: { secondRouter: null } }])
           .then(() => this.router.navigate([rota]));
    }

    logout() {
        this.usuarioService.deslogar();
    }
}
