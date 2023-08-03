import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShortCodeService } from '../short-code.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-short-code',
  templateUrl: './short-code.component.html',
  styleUrls: ['./short-code.component.css']
})
export class ShortCodeComponent implements OnInit {

  @Output() public childEvent = new EventEmitter()

  shortCode: any;
  shortcompanyname : any;
  constructor(private scs : ShortCodeService,private route : Router){}

  ngOnInit() {
    this.scs.getShortCode()
    .subscribe((e)=>{
      this.shortCode = e;
      // console.log(this.shortCode[1].code)
    })
  }

  onSelect(code:any){
    this.route.navigate(['//child/grand-child/great-grand-child/shortcode',code.id])
    this.shortcompanyname = this.shortCode[code.id-1].code;
    console.log(this.shortcompanyname);
  }

  fireEvent(){
    this.childEvent.emit(this.shortcompanyname)
  }

  
}
