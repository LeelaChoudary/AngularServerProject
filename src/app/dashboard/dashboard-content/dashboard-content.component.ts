import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {
  @Input({required:true}) imageData!:{src:string,alt:string}
  @Input ({required:true}) title !: string;

}
