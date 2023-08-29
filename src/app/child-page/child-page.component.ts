import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BreadCrumbsService } from '../bread-crumbs.service';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css']
})
export class ChildPageComponent {

  label : any = "Children 1"

  constructor(
    private router : Router,
    private bcs : BreadCrumbsService,
    private route : ActivatedRoute
  ) {}


  ngOnInit() {
    this.bcs.push(this.label,this.route)
    
  }

  ngOnDestroy (){
    this.bcs.pop(this.label)
  }
}
