import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [FlexLayoutModule, BrowserAnimationsModule,BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LayoutComponent, NavigationComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
