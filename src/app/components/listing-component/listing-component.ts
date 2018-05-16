import { Component, OnInit } from '@angular/core';
import { ListingService } from 'C:/Projects/angular-test-app/src/app/services/listing.service';
import { LIST } from '../../../mockups/listing';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing-component.html',
  styleUrls: ['./listing-component.css'],
  
})
export class ListingComponent implements OnInit {
 
  constructor(private listingService: ListingService) {
  }

  item:any;
  list:Array<any>;
  display:any = 'none';

  getList(): void {
    this.list = Array.of(this.listingService.getList());
  }

  addElement():void {
    this.listingService.addItemToList();
  }

  removeElement(itemId):void {
    this.listingService.removeItemToList(itemId);
  }

  updateElement(itemId, itemName):void {
    this.listingService.updateItemFromList(itemId, itemName);
  }

  openModalDialog(): void {
    this.display = 'block';
  }

  closeModalDialog(): void {
    this.display = 'none';
  }

  onCloseHandled(): void {
  }

  addAndUpdateItemWithinModal(name):void {
    this.addElement();
    this.updateElement(this.list[0].value.length, name);
  }

  ngOnInit() {
    this.getList();
    this.item = {id: "", name:""};
  };
}