import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any {

    const childrenRoutes = route.children;
    if (childrenRoutes.length === 0) {      
      // console.log(breadcrumbs);
      return breadcrumbs; 
    }
    for (let childRoute of childrenRoutes) {
      if (childRoute.outlet === "primary") {
        const routeSnapshot = childRoute.snapshot;
        // Append the URL for the current breadcrumb with the path segment of the current child route
        url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");

        // Push the current breadcrumb to the breadcrumbs array
        breadcrumbs.push({
          label: routeSnapshot.data, 
          url: url
        });
        
        return this.createBreadcrumbs(childRoute, url, breadcrumbs);
      }
    }
  }
}