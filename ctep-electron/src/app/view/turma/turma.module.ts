import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaMenuComponent } from './turma-menu.component';
import { FormularioTurmaComponent } from './formulario-turma/formulario-turma.component';
import { TabelaTurmaComponent } from './tabela-turma/tabela-turma.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../custom-components/shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomTableModule } from '../../custom-components/custom-table/custom-table.module';
import { CustomDatetimepickerModule } from '../../custom-components/custom-datetimepicker/custom-datetimepicker.module';
import { CustomSelectModule } from '../../custom-components/custom-select/custom-select.module';
import { CustomAutocompleteModule } from '../../custom-components/custom-autocomplete/custom-autocomplete.module';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    declarations: [
        TurmaMenuComponent,
        FormularioTurmaComponent,
        TabelaTurmaComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatExpansionModule,
        CustomTableModule,
        CustomDatetimepickerModule,
        CustomSelectModule,
        CustomAutocompleteModule,
        TextMaskModule,
    ]
})
export class TurmaModule { }