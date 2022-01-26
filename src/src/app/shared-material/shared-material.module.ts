import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const component = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
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
