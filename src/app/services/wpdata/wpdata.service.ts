import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WpdataService {
  public URL = 'http://localhost:8000/';
  public POSTS = `${this.URL}wp-json/wp/v2/posts`;
  public CATEGORIES = `${this.URL}wp-json/wp/v2/categories`;
  public POLITICIANS = `${this.URL}wp-json/wp/v2/politicos`;

  constructor(
    private _http: HttpClient
  ) { }

  getAll(itemsNum: number) {
    return this._http.get(`${this.POSTS}?per_page=${itemsNum}`);
  }

  getSinglePost(id: number) {
    return this._http.get(`${this.POSTS}?include[]=${id}`);
  }

  getCategory(id: number) {
    return this._http.get(`${this.CATEGORIES}/${id}`);
  }

  getCategories(postNum: number) {
    return this._http.get(`${this.CATEGORIES}?post=${postNum}`);
  }

  getPoliticians(itemsNum: number, page: number) {
    return this._http.get(`${this.POLITICIANS}?per_page=${itemsNum}&page=${page}&orderby=date&order=asc`);
  }
}
