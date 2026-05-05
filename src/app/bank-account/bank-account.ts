import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-account',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bank-account.html',
  styleUrl: './bank-account.css',
})
export class BankAccount implements OnInit {
  private fb = inject(FormBuilder);
  bankAccountForms: FormArray = this.fb.array([]);

  ngOnInit() {
    this.addBankAccountForm();
  }

  addBankAccountForm() {
    this.bankAccountForms.push(this.fb.group({
      bankAccountID: [0],
      accountNumber: [''],
      accountHolder: [''],
      bankID: [0],
      IFSC: [''],
    }));
  }

  get forms() {
    return this.bankAccountForms.controls as FormGroup[];
  }
}
