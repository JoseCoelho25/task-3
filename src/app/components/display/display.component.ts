import { ColorClassPipePipe } from './../../pipes/color-class-pipe.pipe';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  dataFromService: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Receive data from Service and set that data in variable dataFromService
    this.dataService.observerData.subscribe(data => {
      this.dataFromService = data;
      //console.log(this.dataFromService);

    });
  }
}
