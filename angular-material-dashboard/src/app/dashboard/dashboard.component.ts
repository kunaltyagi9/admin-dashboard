import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bank Management System', weight: 3.19, symbol: '4,999'},
  {position: 2, name: 'Electricity Billing System', weight: 3.09, symbol: '5,111'},
  {position: 3, name: 'Payroll System', weight: 4.12, symbol: '2,900'},
  {position: 4, name: 'Airline Management System', weight: 4.14, symbol: '1,098'},
  {position: 5, name: 'Hotel Management System', weight: 2.99, symbol: '2,789'},
  {position: 6, name: 'University Management System', weight: 2.12, symbol: '3,567'},
  {position: 7, name: 'Library Management System', weight: 2.15, symbol: '4,019'},
  {position: 8, name: 'Employee Management System', weight: 3.18, symbol: '4,120'},
  {position: 9, name: 'Spring Boot + Angular + MySQL', weight: 3.44, symbol: '987'},
  {position: 10, name: 'AMCAT Quantitative Aptitude', weight: 4.44, symbol: '123'},
  {position: 11, name: 'AMCAT Logical Reasoning', weight: 1.2, symbol: '983'},
  {position: 12, name: 'AMCAT Automata', weight: 2.12, symbol: '456'},
  {position: 13, name: 'AMCAT Automata Fix', weight: 4.56, symbol: '1,092'},
  {position: 14, name: 'AMCAT Comprehensive English', weight: 0.12, symbol: '896'},
  {position: 15, name: 'CoCubes Preparation', weight: 1.11, symbol: '432'},
  {position: 16, name: 'eLitmus Preparation', weight: 0.12, symbol: '111'},
  {position: 17, name: 'JavaScript projects', weight: 0.99, symbol: '93'},
  {position: 18, name: 'Admin Dashboard Angular Material', weight: 5.12, symbol: '344'},
  {position: 19, name: 'JavaScript Calculator', weight: 0.19, symbol: '12'},
  {position: 20, name: 'Todo List JavaScript', weight: 0.23, symbol: '9'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService : DashboardServiceService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
