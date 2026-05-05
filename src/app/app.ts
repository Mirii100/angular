import { Component, signal } from '@angular/core';
import { BankAccount } from './bank-account/bank-account';

@Component({
  selector: 'app-root',
  imports: [BankAccount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularInlineTableCRUD');
}
