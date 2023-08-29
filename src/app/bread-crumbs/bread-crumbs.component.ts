import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { BreadCrumbsService } from "../bread-crumbs.service";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.css"]
})
export class BreadCrumbsComponent implements OnInit {

  @Input() shortCode: any = [];
  breadcrumbs: any;
  shortname: any;
  constructor(private router: Router, private route: ActivatedRoute, private bcs: BreadCrumbsService) { }
  bcArray : any = this.bcs.breadCrumbsArray

  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.bcs.createBreadcrumbs(this.route.root);
      });
  }
}