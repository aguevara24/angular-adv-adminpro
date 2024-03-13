import { Component, OnInit } from '@angular/core';
import { log } from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-promise-sample',
  templateUrl: './promise-sample.component.html',
  styles: ``
})
export class PromiseSampleComponent implements OnInit {
  ngOnInit(): void {

    this.getUsers().then( users => {
      console.log(users)
    });
    // const promise = new Promise( ( resolve, reject ) => {
    //
    //   if ( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject( 'Algo salió mal');
    //   }
    //
    // });
    //
    // promise.then( ( mensaje ) => {
    //   console.log( mensaje );
    // }).catch( error => console.log('Error en mi promesa ', error ))
    //
    // console.log('Fin del Init')
  }

  getUsers() {

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve ( body.data ) );
    } );

  }

}
