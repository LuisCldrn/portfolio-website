import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  cursorX = 0;
  cursorY = 0;

  updateCursorPosition(event: MouseEvent): void {
    this.cursorX = event.clientX - 100; // Offset to center the highlight
    this.cursorY = event.clientY - 100; // Offset to center the highlight
  }
}
