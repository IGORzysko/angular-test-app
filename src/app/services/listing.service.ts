import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/angular-app/src/app/domain/product';
import {LIST} from 'C:/angular-app/src/mockups/listing';

@Injectable()
export class ListingService {

  constructor() { }

  getList():Observable<Product[]> {
    return of(LIST);
  };
}