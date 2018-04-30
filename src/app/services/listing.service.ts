import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/Projects/angular-test-app/src/app/domain/product';
import {LIST} from 'C:/Projects/angular-test-app/src/mockups/listing';

import { Promise } from 'q';
import {Deferred} from "ts-deferred";

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

    this.removeItemDomElement((elementIndex + 1)).then(function (index) {
      //delete LIST[index];
    });
  }

  updateItemFromList(itemId, itemName):void {
    var element = LIST.find(x => x.id == itemId);  
    var elementIndex = LIST.indexOf(element);

    LIST[elementIndex].id == itemId;
    LIST[elementIndex].name == itemName;
  }
  
  removeItemDomElement(itemId):any {
    var p = document.getElementById(itemId.toString());
    p.parentNode.removeChild(p);

    let deferr: Deferred<number> = new Deferred<number>();
    let prom = deferr.promise;

    deferr.resolve(itemId-1);

    return prom;
  }
}