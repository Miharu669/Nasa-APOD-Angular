import { Component } from '@angular/core';
import { NasaApodComponent } from './components/nasa-apod/nasa-apod.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [NasaApodComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
