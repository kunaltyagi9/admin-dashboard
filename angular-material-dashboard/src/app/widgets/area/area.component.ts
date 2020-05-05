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
          text: 'Random Data'
      },
      subtitle: {
          text: 'demo'
      },
     
      tooltip: {
          split: true,
          valueSuffix: ' millions'
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
