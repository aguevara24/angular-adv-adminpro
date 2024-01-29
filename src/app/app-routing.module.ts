import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

const routes: Routes = [

  // path: '/dashboard' PagesRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
]

@NgModule( {
  imports: [
    RouterModule.forRoot( routes ),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [ RouterModule ],
  declarations: [],
} )
export class AppRoutingModule {
}
