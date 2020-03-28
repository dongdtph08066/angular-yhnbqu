import { Injectable } from '@angular/core';
import {data } from "../MockData";
import { Product} from "../Product";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api ="http://5e7b7bea0e046300163334a0.mockapi.io/ass";

  constructor(
    private http: HttpClient
  ) { }

getProduct(): Observable<Product[]>{
  return this.http.get<Product[]>(this.api);
}
}