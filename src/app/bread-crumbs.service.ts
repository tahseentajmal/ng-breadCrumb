import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  breadCrumbsArray = ['Home','Administartion']
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
    route.snapshot.data
  }


}
