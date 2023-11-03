import { Component } from '@angular/core';
import { IDropDownOption } from 'src/app/shared/dropdown/dropdown.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  tableHeaders = ["Client", "Sales Person", "Picture", "Paid ", "Positive", "Rating", "Submited", "Plaform"];

  booleanDropOptions: IDropDownOption[] = [
    { text: '--', value: null },
    { text: 'Yes', value: true },
    { text: 'No', value: false }
  ];

  salesPeople: IDropDownOption[] = [
    { text: 'Carlos', value: 'Carlos'},
    { text: 'Adriana', value: 'Adriana'}
  ];

  reports = [
    {
      client: "Craig Coburn",
      salesPerson: "James Silcox",
      picture: true,
      paid: true,
      positive: true,
      rating: 5,
      submitted: '02/03/23',
      platform: 'Google'
    },
    {
      client: "Ashley Tineo",
      salesPerson: "Michael",
      picture: true,
      paid: true,
      positive: true,
      rating: 5,
      submitted: '02/03/23',
      platform: 'Google'
    }
  ];

  onSelectSalesPerson(event: IDropDownOption, index: number): void {
    console.log(event, index)
  }

  onSelectPicture(event: IDropDownOption, index: number, column: string): void {
    console.log(event, index, column)
  }

}
