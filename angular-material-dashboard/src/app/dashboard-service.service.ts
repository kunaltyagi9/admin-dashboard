import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor() { }

  bigChart(){
    return [{
      name : 'Java Projects',
      data : [502, 635, 809, 947, 1402, 3634, 5268]
    },{
      name : 'Full Stack Project',
      data : [106, 107, 111, 133, 221, 767, 1766]
    },{
      name : 'AMCAT Videos',
      data : [163, 203, 276, 408, 547, 729, 628]
    },{
      name : 'Angular Projects',
      data : [18, 31, 54, 156, 339, 818, 1201]
    },{
      name : 'JavaScript Projects',
      data : [2, 2, 2, 6, 13, 30, 46]
    }
  ]
  }

  cards(){
    return [71, 78, 39, 66]
  }

  pieChart(){
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Youtube<br/> Search<br>',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Other<br>youtube<br>features<br>',
          y: 11.84
      }, {
          name: 'Browse<br>features<br>',
          y: 10.85
      }, {
          name: 'Playlist<br>page<br>',
          y: 7.28
      }, {
          name: 'External',
          y: 5.68
      }, {
          name: 'Others',
          y: 2.84
      }]
  }]
  }
}
