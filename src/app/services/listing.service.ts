import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {LIST} from 'C:/angular-app/src/mockups/listing';
import { Listing } from 'C:/angular-app/src/app/domain/listing';


@Injectable()
export class ListingService {

  constructor() { }

  getList():Observable<Listing[]> {
    return of(LIST);
  };
}