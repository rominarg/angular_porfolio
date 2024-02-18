import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas
import { AppRoutingModule } from './app-routing.module';
//componentees
import { AppComponent } from './app.component';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { PorfolioComponent } from '../page/porfolio/porfolio.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { ItemComponent } from './pages/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PorfolioComponent,
    SobremiComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
