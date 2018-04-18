import { Component, OnInit } from '@angular/core';
//import {LIST} from 'C:/angular-app/src/mockups/listing';
import { ListingService } from 'C:/Projects/angular-test-app/src/app/services/listing.service';
import { LIST } from '../../../mockups/listing';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing-component.html',
  styleUrls: ['./listing-component.css']
})
export class ListingComponent implements OnInit {
 
  constructor(private listingService: ListingService)
  {
  }

  list;

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

  ngOnInit() {
    this.getList();
  };
}