import { Component } from '@angular/core';
import { ScrollserviceService } from '../service/scrollservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    public ScrollserviceService: ScrollserviceService,
    
  ) {
    
  }
}
