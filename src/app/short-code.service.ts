import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http'
import { IShortCode } from './interface/short-code';
import { Observable, } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShortCodeService {
  shortcompanyname: any;
  shortcod: any
  private _url: string = "../assets/data/shortCode.json"

  constructor(private http: HttpClient, private route: Router) { }

  getShortCode(): Observable<IShortCode[]> {
    return this.http.get<IShortCode[]>(this._url)
  }
  // onSelection(code: any) {
  //   this.route.navigate(['//child/grand-child/great-grand-child/shortcode', code.id])
  //   this.shortcompanyname = code.code;
  // }
}
