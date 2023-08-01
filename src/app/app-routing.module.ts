import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { GrandChildPageComponent } from './grand-child-page/grand-child-page.component';
import { GreatGrandChildPageComponent } from './great-grand-child-page/great-grand-child-page.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { GrandChildTwoComponent } from './grand-child-two/grand-child-two.component';
import { GreatGrandChildTwoComponent } from './great-grand-child-two/great-grand-child-two.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data: { breadCrumb: "Home" },
    children: [
      {
        path: "child",
        component: ChildPageComponent,
        data: { breadCrumb: "Child" },
        children: [
          {
            path: "grand-child",
            component: GrandChildPageComponent,
            data: { breadCrumb: "Grand Child" },
            children: [
              {
                path: "great-grand-child",
                component: GreatGrandChildPageComponent,
                data: { breadCrumb: "Great Grand Child" }
              }
            ]
          }
        ]
      },
      {
        path: "child-two",
        component: ChildTwoComponent,
        data: { breadCrumb: "Child Two" },
        children: [
          {
            path: "grand-child-two",
            component: GrandChildTwoComponent,
            data: { breadCrumb: "Grand Child Two" },
            children: [
              {
                path: "great-grand-child-two",
                component: GreatGrandChildTwoComponent,
                data: { breadCrumb: "Great Grand Child Two" }
              }
            ]
          }
        ]
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
