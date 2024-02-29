// modal.service.ts
import { Injectable } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private renderer: Renderer2;
  private modal: HTMLElement | null = null;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  openModal(): void {
    console.log("Opening modal");
    this.modal = this.renderer.createElement('div');
    this.renderer.addClass(this.modal, 'modal');
    this.renderer.appendChild(document.body, this.modal);
    console.log("Modal created:", this.modal); // Log the created modal
    this.renderer.listen(this.modal, 'click', () => this.closeModal());
  }

  closeModal(): void {
    console.log("Closing modal");
    if (this.modal) {
      this.renderer.removeChild(document.body, this.modal);
      this.modal = null;
    }
  }
}

