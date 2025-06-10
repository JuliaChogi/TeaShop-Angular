import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() goToCatalog = new EventEmitter<void>();
}
