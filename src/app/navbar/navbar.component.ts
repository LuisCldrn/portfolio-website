import { Component } from '@angular/core';
import { ScrollserviceService } from '../service/scrollservice.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  websiteTitle: string = '{} CALDERON | LUIS'

  constructor(
    public ScrollserviceService: ScrollserviceService,
    public scroller: ViewportScroller
  ) {
    
  }


}
