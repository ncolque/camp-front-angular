import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'company',
    pathMatch: 'full',
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./modules/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
