import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  dataFromService: string = '';

  // Created mapping object
  colorClassMapping: { [key: string]: string } = {
    'Green': 'text-green-400',
    'Red': 'text-red-400',
    //'Black': 'text-black'
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Receive data from Service and set that data in variable dataFromService
    this.dataService.observerData.subscribe(data => {
      this.dataFromService = data;
      //console.log(this.dataFromService);

    });
  }

  getColorBasedOnData(data: string): string {
    // Check if data includes the key in the mapping
    for (const key of Object.keys(this.colorClassMapping)) {
      if (data.includes(key)) {
        //console.log(this.colorClassMapping[key]);
        return this.colorClassMapping[key];
      }
    }
    // If no matches
    return 'text-blue-400';
  }

}
