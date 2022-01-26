import { SharedMaterialModule } from './../shared-material/shared-material.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: TableListComponent },
  { path: 'add-contact', component: ContactFormComponent },
];

@NgModule({
  declarations: [
    TableListComponent,
    ConfirmationComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    FormsModule,
  ],
})
export class PagesModule {}
