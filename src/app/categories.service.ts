import { Injectable } from '@angular/core';
import { ICategory } from '../assets/interface/category'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _url: string = 'assets/data/categories.json'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._url)
  }
}
