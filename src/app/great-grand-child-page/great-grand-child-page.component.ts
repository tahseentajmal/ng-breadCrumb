import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../bread-crumbs.service';

@Component({
  selector: 'app-great-grand-child-page',
  templateUrl: './great-grand-child-page.component.html',
  styleUrls: ['./great-grand-child-page.component.css']
})
export class GreatGrandChildPageComponent {
  label : any = "Children 3"

  constructor(
    private bcs : BreadCrumbsService,
    private route : ActivatedRoute
  ) {}


  ngOnInit() {
    console.log("ngoninit ch 4 triggered");
    
    this.bcs.push(this.label,this.route)
    
  }
  ngOnDestroy (){
    this.bcs.pop(this.label)
  }
}
