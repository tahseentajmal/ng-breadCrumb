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
import { HistoryTrailsComponent } from './history-trails/history-trails.component';
import { ShortCodeComponent } from './short-code/short-code.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreatGreatGrandChildComponent } from './great-great-grand-child/great-great-grand-child.component';


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
    GreatGrandChildTwoComponent,
    HistoryTrailsComponent,
    ShortCodeComponent,
    PageNotFoundComponent,
    GreatGreatGrandChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
