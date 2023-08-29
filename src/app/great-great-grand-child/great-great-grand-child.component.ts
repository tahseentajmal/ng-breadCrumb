import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../bread-crumbs.service';

@Component({
  selector: 'app-great-great-grand-child',
  templateUrl: './great-great-grand-child.component.html',
  styleUrls: ['./great-great-grand-child.component.css']
})
export class GreatGreatGrandChildComponent {
  label : any = "Children 4"

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
