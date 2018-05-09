import { Component, OnInit } from '@angular/core';
import { ListingService } from 'C:/Projects/angular-test-app/src/app/services/listing.service';
import { LIST } from '../../../mockups/listing';
import { Product } from '../../domain/product';
import { Observable } from 'rxjs/Observable';
//import {modal} from 'C:/Projects/angular-test-app/src/app/bower_components/angular-strap/dist/modules/modal.js'

@Component({
  selector: 'app-listing-modal-component',
  templateUrl: './listing-modal-component.html',
  styleUrls: ['./listing-modal-component.css'],
  
})
export class ListingModalComponent implements OnInit {
 
  constructor(private listingService: ListingService
    //,public listingModal
  )
    {
    //listingModal = modal;
  }
  
  public item;
  public list: Observable<Product[]>[]; 

  getList(): void {
  this.list = Array.of(this.listingService.getList());
  }

  updateElement(itemId, itemName):void {
    this.listingService.updateItemFromList(itemId, itemName);
  }

  ngOnInit() {
    this.getList();
    this.item = {id: "", name: ""};
  };
}