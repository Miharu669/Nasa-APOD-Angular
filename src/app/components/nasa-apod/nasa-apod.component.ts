import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-nasa-apod',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.scss']
})
export class NasaApodComponent {
  apodData: any = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.getApodData();
  }

  getApodData() {
    this.nasaService.getApod().subscribe(data => {
      this.apodData = data;
    });
  }
}
