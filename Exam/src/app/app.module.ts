import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import {ApiBackEndService} from './api-back-end.service';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  
  { path: '**', redirectTo: '/inicio' }
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [ApiBackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
