import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PromotionService {

  constructor() { }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
