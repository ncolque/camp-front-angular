import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { CreateEditCompanyComponent } from './components/create-edit-company/create-edit-company.component';

const routes: Routes = [
  {
    path: '',
    component: ListCompaniesComponent,
  },
  {
    path: 'agregar-company',
    component: CreateEditCompanyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
