// popup.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupElement!: HTMLElement;

  constructor() { }

  openPopup(): void {
    this.popupElement = document.createElement('div');
    this.popupElement.classList.add('popup-container');
    document.body.appendChild(this.popupElement);
    this.popupElement.innerHTML = '<app-popup></app-popup>';
    console.log("here")
  }

  closePopup(): void {
    if (this.popupElement && this.popupElement.parentNode) {
      this.popupElement.parentNode.removeChild(this.popupElement);
    }
  }
}
