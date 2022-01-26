import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const component = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule,
  MatDialogModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, component],
  exports: [component],
  providers: [],
})
export class SharedMaterialModule {}
