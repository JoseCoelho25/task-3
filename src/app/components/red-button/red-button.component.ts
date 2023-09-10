import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.css']
})
export class RedButtonComponent {
  dataFromService: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Receive data from Service and set that data in variable dataFromService
    this.dataService.observerData.subscribe(data => {
      this.dataFromService = data;
    });
  }

  updateData() {
    // Method that when called updates data in the DataService
    this.dataService.updateData('New Data from Red Button');
  }
}
