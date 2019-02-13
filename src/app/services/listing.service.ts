import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/Projects/angular-test-app/src/app/domain/product';
import {LIST} from 'C:/Projects/angular-test-app/src/mockups/listing';

import { Promise } from 'q';
import {Deferred} from "ts-deferred";

import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ListingService {

  constructor(private http: HttpClient) {

  }

  baseUrl = 'http://localhost:53550';

  getTasks():any{
    let tasksResponse: any; 

    this.http.get(this.baseUrl + '/api/Task/Get')
      .map((res:Response) => (
        res.json()
      ))
   .subscribe(data => tasksResponse = data)

   return tasksResponse;
  }

  getList():Observable<Product[]> {
    return of(LIST);
  };

  addItemToList():void {
    LIST.push(new Product(LIST.length + 1, ""));
  }

  removeItemToList(itemId):void {
    var element = LIST.find(x => x.id == itemId); 
    var elementId = element.id;
    
    var elementIndex = LIST.indexOf(element);

    this.removeDomItemElement(elementId).then(function (index) {
     LIST.splice(elementIndex, 1);
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

    var listElementId = "list-of-products_" + itemId.toString();
    var p = document.getElementById(listElementId);
    p.parentNode.removeChild(p);

    let deferr: Deferred<number> = new Deferred<number>();
    let prom = deferr.promise;

    deferr.resolve(itemId-1);

    return prom;
  }
}