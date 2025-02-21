import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollserviceService } from '../service/scrollservice.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  websiteTitle: string = '{} CALDERON | LUIS'
  public screenHeight: number = 0;

  mobileM: string = ''
  mobileMenu: string = ''
  constructor(
    public ScrollserviceService: ScrollserviceService,
    public scroller: ViewportScroller
  ) {
    
  }

  isActiveTab() {
    console.log(this.scroller.getScrollPosition()[1]);
    console.log(this.screenHeight)
  }

  ngOnInit(): void {
      this.screenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
  }

  mobile() {
    if(this.mobileM === ''){
      this.mobileM = 'is-active'
      this.mobileMenu = 'active1'
  }
    else {
      this.mobileM = ''
      this.mobileMenu = ''
    }
  }

}
