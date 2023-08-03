import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryTrailsService {
  private historyTrails: any[] = [];
  private historyTrailsSubject = new BehaviorSubject<any[]>([]);
  historyTrails$ = this.historyTrailsSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentTrail = this.generateCurrentTrail(this.router.routerState.snapshot.root);
        this.historyTrails.push(currentTrail);
        this.historyTrailsSubject.next(this.historyTrails);
      });
  }

  navigateBack(): void {
    this.historyTrails.pop();
    this.historyTrailsSubject.next([...this.historyTrails]);
  }

  getHistoryTrails(): any[] {
    return [...this.historyTrails];
  }

  private generateCurrentTrail(route: ActivatedRouteSnapshot, url: string = '', trail: any[] = []): any[] {
    const childrenRoutes = route.children;
    if (childrenRoutes.length === 0) {
      return trail;
    }

    for (let childRoute of childrenRoutes) {
      if (childRoute.outlet === 'primary') {
        const routeSnapshot = childRoute;
        url += '/' + this.createUrl(routeSnapshot.url);
        trail.push({
          label: routeSnapshot.data?.breadCrumb || 'Unknown',
          url: url
        });
        return this.generateCurrentTrail(childRoute, url, trail);
      }
    }

    return trail;
  }

  private createUrl(urlSegments: UrlSegment[]): string {
    return urlSegments.map(segment => segment.path).join('/');
  }
}
