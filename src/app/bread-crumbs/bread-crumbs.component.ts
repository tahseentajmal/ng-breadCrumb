import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { BreadCrumbsService } from "../bread-crumbs.service";
// import { ShortCodeService } from "../short-code.service";
// import { ShortCodeComponent } from "../short-code/short-code.component";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.css"]
})
export class BreadCrumbsComponent implements OnInit {

  breadcrumbs: any;
  shortCode: any = [];
  public Id : any 
  shortname : any
  constructor(private router: Router, private route: ActivatedRoute, private bcs : BreadCrumbsService) {
   }

  

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!) 
    this.Id = id
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.bcs.createBreadcrumbs(this.route.root); 
      });
  }

  
}