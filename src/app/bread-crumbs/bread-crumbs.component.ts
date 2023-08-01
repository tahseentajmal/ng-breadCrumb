import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Input } from "@angular/core";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.css"]
})
export class BreadCrumbsComponent implements OnInit {



  breadcrumbs: any;
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.route.root);        
      });
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any {

    const childrenRoutes = route.children;
    if (childrenRoutes.length === 0) {      
      console.log(breadcrumbs);
      return breadcrumbs; 
    }
    for (let childRoute of childrenRoutes) {
      // Check if the current child route is the primary outlet
      if (childRoute.outlet === "primary") {
        const routeSnapshot = childRoute.snapshot;
        // Append the URL for the current breadcrumb with the path segment of the current child route
        url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
        // console.log(url);

        // Push the current breadcrumb to the breadcrumbs array
        breadcrumbs.push({
          label: routeSnapshot.data, // Assuming that route's data property holds the breadcrumb label
          url: url
        });
        
        // Continue generating breadcrumbs for the next child route recursively
        return this.createBreadcrumbs(childRoute, url, breadcrumbs);
      }
    }
  }



  // ngOnInit() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       this.breadcrumbs = [];
  //       let currentRoute = this.activatedRoute.root,
  //         url = "";
  //       do {
  //         const childrenRoutes = currentRoute.children;
  //         currentRoute = null!;
  //         childrenRoutes.forEach(route => {
  //           if (route.outlet === "primary") {
  //             const routeSnapshot = route.snapshot;
  //             url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
  //             this.breadcrumbs.push({
  //               label: route.snapshot.data,
  //               url: url
  //             });
  //             // console.log(this.breadcrumbs[0].label.breadCrumb);
  //             currentRoute = route;
  //           }
  //         });
  //       } while (currentRoute);
  //     });
  // }

  // ngOnInit() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
  //     });
  // }

  // private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any {
  //   const childrenRoutes = route.children;
  //   if (childrenRoutes.length === 0) {
  //     return breadcrumbs;
  //   }

  //   for (let childRoute of childrenRoutes) {
  //     if (childRoute.outlet === "primary") {
  //       const routeSnapshot = childRoute.snapshot;
  //       url += "/" + routeSnapshot.url.map(segment => segment.path).join("/");
  //       breadcrumbs.push({label: routeSnapshot.data,url: url});
  //       return this.createBreadcrumbs(childRoute, url, breadcrumbs);
  //     }
  //   }
  // }


}