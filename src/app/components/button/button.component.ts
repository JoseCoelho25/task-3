import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  dataFromService: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.observerData.subscribe(data => {
      this.dataFromService = data;
    });
  }

  updateData() {
    this.dataService.updateData('New Data from Button');
  }
}
