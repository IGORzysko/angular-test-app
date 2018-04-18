import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/Projects/angular-test-app/src/app/domain/product';
import {LIST} from 'C:/Projects/angular-test-app/src/mockups/listing';

@Injectable()
export class ListingService {

  constructor() { }

  getList():Observable<Product[]> {
    return of(LIST);
  };

  addItemToList():void {
    LIST.push(new Product(LIST.length + 1, ""));
  }

  removeItemToList(itemId):void {
    var element = LIST.find(x => x.id == itemId); 
    var elementIndex = LIST.indexOf(element);

    delete LIST[elementIndex];

    this.removeDomElement((elementIndex + 1));
  }

  updateItemFromList(itemId, itemName):void {
    var element = LIST.find(x => x.id == itemId);  
    var elementIndex = LIST.indexOf(element);

    LIST[elementIndex].id == itemId;
    LIST[elementIndex].name == itemName;
  }

  removeDomElement(itemId):void {
    var p = document.getElementById(itemId.toString());
    
    p.remove();
  }
}