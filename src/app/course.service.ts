import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from 'src/assets/interface/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _url: string = 'assets/data/courses.json'

  constructor(private http: HttpClient) { }

  getCourse(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this._url)
  }
}
