import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangularcomponent/hooksangular.component';
import DeportesComponent from '../components/deportes/deportes.component';
import { FormsbindingComponent } from '../components/formsbinding/formsbinding.component';
import SumarNumerosCompoent from '../components/sumarnumeros/sumarnumeros.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsbindingComponent,
    SumarNumerosCompoent,
    PruebaComponent,
    TablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
