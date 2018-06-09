///<reference path="services/dish.service.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';



import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


import { DishService } from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { baseURL } from './shared/baseurl';
import {ProcesshttpmsgService} from './services/processhttpmsg.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DishdetailComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DishService, PromotionService, LeaderService, {provide: 'BaseURL', useValue: baseURL}, ProcesshttpmsgService],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
