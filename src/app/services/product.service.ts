import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PagenationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProducts = (
    url: string,
    params: PagenationParams
  ): Observable<Products> => {
    return this.apiService.get<Products>(url, {
      params,
      responseType: 'json',
      observe: 'response',
    });
  };
}
