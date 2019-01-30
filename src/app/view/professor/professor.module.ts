import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TabViewModule, MenuModule, PanelModule, AutoCompleteModule, InputTextModule, DialogModule, CalendarModule, ButtonModule, CheckboxModule, GrowlModule, InputTextareaModule, CardModule, InputMaskModule } from "primeng/primeng";
import { TableModule } from 'primeng/table';
import { FormularioAdicionaProfessorComponent } from "./formulario-adiciona-professor/formulario-adiciona-professor.component";
import { MenuProfessorComponent } from "./menu-professor.component";
import { TabelaProfessorComponent } from './tabela-professor/tabela-professor.component';
import { TableXModule } from "src/app/components/table-x/table-x.module";


@NgModule({
    declarations: [
        FormularioAdicionaProfessorComponent,
        MenuProfessorComponent,
        TabelaProfessorComponent
    ],
    exports: [
        FormularioAdicionaProfessorComponent,
        MenuProfessorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        PanelModule,
        MenuModule,
        DialogModule,
        TabViewModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        ButtonModule,
        CheckboxModule,
        GrowlModule,
        TableModule,
        CardModule,
        AutoCompleteModule,
        TableXModule,
        InputMaskModule
    ],
    providers: [],
})
export class ProfessorModule { }