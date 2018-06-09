import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcesshttpmsgService } from './processhttpmsg.service';

@Injectable()
export class DishService {

  constructor(private http: HttpClient,
              private processhttpmsgservice: ProcesshttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      .pipe(map(res => { return this.processhttpmsgservice.extractData(res); }));
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/' + id)
      .pipe(map(res => { return this.processhttpmsgservice.extractData(res); }));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
      .pipe(map(res => { return this.processhttpmsgservice.extractData(res)[0]; }));
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .pipe(map(dishes => { return dishes.map(dish => dish.id) }));
  }
}

