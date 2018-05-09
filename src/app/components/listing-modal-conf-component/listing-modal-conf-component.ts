import { Component, OnInit } from '@angular/core';
import { ListingService } from 'C:/Projects/angular-test-app/src/app/services/listing.service';
import { LIST } from '../../../mockups/listing';

@Component({
  selector: 'app-listing-modal-conf-component',
  templateUrl: './listing-modal-conf-component.html',
  styleUrls: ['./listing-modal-conf-component.css'],
  
})
export class ListingModalConfComponent{
 
  constructor(private listingService: ListingService) {
  }

  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}