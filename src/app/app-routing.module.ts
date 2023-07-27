import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { GrandChildPageComponent } from './grand-child-page/grand-child-page.component';
import { GreatGrandChildPageComponent } from './great-grand-child-page/great-grand-child-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data:{breadCrumb:"Home"},
    children: [
      {
        path: "child",
        component: ChildPageComponent,
        data:{breadCrumb:"Child"},
        children: [
          {
            path: "grand-child",
            component: GrandChildPageComponent,
            data:{breadCrumb:"Grand-Child"},
            children: [
              {
                path: "great-grand-child",
                component: GreatGrandChildPageComponent,
                data:{breadCrumb:"Great-Grand-Child"},
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
