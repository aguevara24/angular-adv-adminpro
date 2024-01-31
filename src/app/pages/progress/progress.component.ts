import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: `./progress.component.css`
})
export class ProgressComponent {

  progress1: number = 25;
  progress2: number = 35;

  get getPercent1() {
    return `${ this.progress1 }%`;
  }

  get getPercent2() {
    return `${ this.progress2 }%`;
  }
}
