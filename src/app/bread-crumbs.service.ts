import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  breadCrumbsArray : any = [{label: 'Home', url: ''}]


  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any {
    const childrenRoutes = route.children;
    
    if (childrenRoutes.length === 0) {
      return breadcrumbs;
    }
    for (let childRoute of childrenRoutes) {
      if (childRoute.outlet === "primary") {
        const routeSnapshot = childRoute.snapshot;
        console.log(routeSnapshot);
        url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
        breadcrumbs.push({
          label: routeSnapshot.data,
          url: url
        });
        return this.createBreadcrumbs(childRoute, url, breadcrumbs);
      }
    }
  }

  push(label:string,route:ActivatedRoute){
    const routeSnapshot = route.snapshot;
    console.log(routeSnapshot);
    let url = this.getFullPath(routeSnapshot);
    this.breadCrumbsArray.push({
      label: label,
      url: url
    });
    console.log(this.breadCrumbsArray, "is the bc array");
  }
  private getFullPath(route: any): string {
    return route?._routerState?.url;
  }

  pop(label: string) {
    const index = this.breadCrumbsArray.findIndex((e:any) => e.label === label );
    if (index !== -1) {
      this.breadCrumbsArray.splice(index, 1);
    } 
    console.log(this.breadCrumbsArray);
  }
  

}
