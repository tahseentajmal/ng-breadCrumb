import { Component } from '@angular/core';
import { BreadCrumbsService } from '../bread-crumbs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grand-child-page',
  templateUrl: './grand-child-page.component.html',
  styleUrls: ['./grand-child-page.component.css']
})
export class GrandChildPageComponent {
  label : any = "Children 2"

  constructor(
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
