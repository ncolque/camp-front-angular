import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-company',
  templateUrl: './create-edit-company.component.html',
  styleUrls: ['./create-edit-company.component.css'],
})
export class CreateEditCompanyComponent implements OnInit {
  formCompany: FormGroup;
  titulo = 'Agregar Empresa';
  id = 0;
  company: Company | undefined;

  constructor(
    private fb: FormBuilder,
    private companySvc: CompanyService,
    private router: Router
  ) {
    this.formCompany = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  createCompany() {
    const company: Company = {
      name: this.formCompany.get('name')?.value,
      description: this.formCompany.get('description')?.value,
      phone: this.formCompany.get('phone')?.value,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.companySvc.createCompanySvc(company).subscribe((data) => {
      this.router.navigate(['/company']);
    });
  }
}
