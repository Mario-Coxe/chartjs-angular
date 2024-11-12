import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DoughnutChartComponent,
    CommonModule,
    BarChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Chartjs';

  public displayTab: string = 'doughnut';

  updateTab(str: string) {
    this.displayTab = str;
  }
}
