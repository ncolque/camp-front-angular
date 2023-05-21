import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company, CompanyResponse } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.formCompany = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if (this.id != 0) {
      this.titulo = 'Editar Empresa';
      this.companySvc.findCompanySvc().subscribe((resp: CompanyResponse) => {
        this.company = resp.data
          .filter((company) => company.id == this.id)
          .shift();
        this.formCompany.patchValue({
          name: this.company?.name,
          description: this.company?.description,
          phone: this.company?.phone,
        });
      });
    }
  }

  createEditCompany() {
    if (this.id == 0) {
      this.createCompany();
    } else {
      this.editCompany();
    }
  }

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

  editCompany() {
    const company: Company = {
      name: this.formCompany.get('name')?.value,
      description: this.formCompany.get('description')?.value,
      phone: this.formCompany.get('phone')?.value,
    };
    company.id = this.company?.id;
    this.companySvc.updateCompanySvc(this.id, company).subscribe((data) => {
      this.router.navigate(['/company']);
    });
  }
}
