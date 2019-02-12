import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/Projects/angular-test-app/src/app/domain/product';
import {LIST} from 'C:/Projects/angular-test-app/src/mockups/listing';

import { Promise } from 'q';
import {Deferred} from "ts-deferred";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListingService {

  constructor(private http: HttpClient) {

  }

  //retrieving data from database
  getTaskFromDatabase(): Observable<any> {
    return this.http.get('/api/todo/listing/');
  }

  addItemToDatabaseList(item: any):void {
    this.http.post('/api/todo/add', item);
  }

  updateItemFromDatabaseList(item: any):void {
    this.http.put('/api/todo/update', item);
  }

  deleteItemFromDatabaseList(item: any):void {
    this.http.post('/api/todo/delete', item);
  }

  //retrieving data from local const list
  getList():Observable<Product[]> {
    return of(LIST);
  };

  addItemToList():void {
    LIST.push(new Product(LIST.length + 1, ""));
  }

  removeItemToList(itemId):void {
    var element = LIST.find(x => x.id == itemId); 
    var elementIndex = LIST.indexOf(element);

    this.removeDomItemElement((elementIndex + 1)).then(function (index) {
      //delete LIST[index];
    });
  }

  updateItemFromList(itemId, itemName):void {
    var element = LIST.find(x => x.id == itemId);  
    var elementIndex = LIST.indexOf(element);

    LIST[elementIndex].id == itemId;
    LIST[elementIndex].name == itemName;
  }

  // helper methods
  removeDomItemElement(itemId):any {
    var p = document.getElementById(itemId.toString());
    p.parentNode.removeChild(p);

    let deferr: Deferred<number> = new Deferred<number>();
    let prom = deferr.promise;

    deferr.resolve(itemId-1);

    return prom;
  }
}