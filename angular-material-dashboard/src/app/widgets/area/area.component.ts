import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions : {}
  Highcharts = Highcharts;

  @Input() data : []

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Views are up! Your channel got 27,981 views in the last 28 days.'
      },
      subtitle: {
          text: 'That’s more than the 17,200–21,100 your channel usually gets.'
      },
     
      tooltip: {
          split: true,
          valueSuffix: ' thousand'
      },
      credits : {
        enabled : false
      },
      exporting : {
        enabled : true
      },
      series : this.data
  };

  HC_exporting(Highcharts);

  
  }

}
