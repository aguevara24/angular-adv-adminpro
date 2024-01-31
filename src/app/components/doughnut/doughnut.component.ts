import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, Color } from "chart.js";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: ``
})
export class DoughnutComponent implements  OnChanges {

  ngOnChanges( changes: SimpleChanges ): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data, backgroundColor: this.colors }]
    }
  }

  @Input()
  public title: string = 'No-Title';

  // Doughnut
  @Input('labels')
  public doughnutChartLabels: string[] = [
    'label 1',
    'label 2',
    'label 3',
  ];

  @Input()
  public data: number[] = [350, 450, 100];

  public colors: Color[] = [
    '#6857E5', '#009FEE', '#F02059'
  ]

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data, backgroundColor: this.colors },
    ],
  };

}
