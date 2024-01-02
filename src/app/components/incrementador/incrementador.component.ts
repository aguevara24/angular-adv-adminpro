import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }
  @Input() progress: number = 40;
  @Input() btnClass = "btn-primary";

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeProgress( value: number ) {

    if ( this.progress >= 100 && value > 0) {
      this.outputValue.emit( 100 );
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0) {
      this.outputValue.emit( 0 );
      this.progress = 0;
      return;
    }

    this.progress += value;
    this.outputValue.emit( this.progress );
  }

  onChange( nuevoValor: number ) {

    if ( nuevoValor >= 100 ) {
      this.progress = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }

    this.outputValue.emit( this.progress );
  }
}
