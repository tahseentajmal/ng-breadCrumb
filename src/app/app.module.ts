import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { GrandChildPageComponent } from './grand-child-page/grand-child-page.component';
import { GreatGrandChildPageComponent } from './great-grand-child-page/great-grand-child-page.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { GrandChildTwoComponent } from './grand-child-two/grand-child-two.component';
import { GreatGrandChildTwoComponent } from './great-grand-child-two/great-grand-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChildPageComponent,
    GrandChildPageComponent,
    GreatGrandChildPageComponent,
    BreadCrumbsComponent,
    ChildTwoComponent,
    GrandChildTwoComponent,
    GreatGrandChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
