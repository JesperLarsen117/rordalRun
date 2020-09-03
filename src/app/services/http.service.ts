import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getRunners() {
    return this.http.get('https://api.mediehuset.net/rordal/run');
  }
  getRunner(run_id: number) {
    return this.http.get(`https://api.mediehuset.net/rordal/run/${run_id}`);
  }
  getPages() {
    return this.http.get('https://api.mediehuset.net/rordal/pages');
  }
  getPage(page_id: number) {
    return this.http.get(`https://api.mediehuset.net/rordal/pages/${page_id}`);
  }
  getRegistrations() {
    return this.http.get('https://api.mediehuset.net/rordal/registrations');
  }
  getRegistration(registrations_id: number) {
    return this.http.get(`https://api.mediehuset.net/rordal/registrations/${registrations_id}`);
  }
  postRegistration(body) {
    return this.http.post('https://api.mediehuset.net/rordal/registrations', body);
  }
  deleteRegistration(registrations_id: number) {
    return this.http.delete(`https://api.mediehuset.net/rordal/registrations/${registrations_id}`);
  }
  getRatings() {
    return this.http.get('https://api.mediehuset.net/rordal/ratings/list/1');
  }
  getRating(rating_id: number) {
    return this.http.get(`https://api.mediehuset.net/rordal/ratings/${rating_id}`);
  }
  getAverageRating(rating_id: number, header: any) {
    return this.http.get(`https://api.mediehuset.net/rordal/ratings/average/${rating_id}`, header);
  }
  postRating(body: any, header: any) {
    console.log(header);

    return this.http.post('https://api.mediehuset.net/rordal/ratings', body, header);
  }
  deleteRating(rating_id: number, header: any) {
    return this.http.delete(`https://api.mediehuset.net/rordal/ratings/${rating_id}`, header);
  }
  getSearchResult(keyword: string) {
    return this.http.get(`https://api.mediehuset.net/rordal/search/${keyword}`);
  }
  getLogin(body: any) {
    return this.http.post('https://api.mediehuset.net/token', body);
  }
}