import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoughnutChartComponent, CommonModule],
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
