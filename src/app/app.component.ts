import { Component } from '@angular/core';

const USER_INFO = [
  {name: 'John Smith', dateOfBirth: '1984-05-05', age: 36},
  {name: 'Muhi Masri', dateOfBirth: '1992-02-02', age: 28},
  {name: 'Peter Adams',  dateOfBirth: '2000-01-01', age: 20},
  {name: 'Lora Bay',  dateOfBirth: '1977-03-03', age: 43},
];

const USER_SCHEMA = {
  name: 'text',
  dateOfBirth: 'date',
  age: 'number',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'dateOfBirth', 'age', '$$edit'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;
  isEdit = true;
}
