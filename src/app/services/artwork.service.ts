import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  readonly ROOT_URL = 'https://collectionapi.metmuseum.org/public/collection/v1'

  departments: any = [];
  artworks: any = [];

  constructor(private http: HttpClient) {
    this.getDepartments().subscribe((obj: any) => {
      this.departments = obj.departments;
    })
  }

  getDepartments(): any {
    return this.http.get(`${this.ROOT_URL}/departments`)      
  }

  getArtworks(departmentId: number): any {
    let params = new HttpParams()
      .set('metadataDate', '2022-03-01')
      .set('departmentIds', `${departmentId}`);
    return this.http.get(`${this.ROOT_URL}/objects`, { params });
  }

  getArtwork(objectID: number): any {
    return this.http.get(`${this.ROOT_URL}/objects/${objectID}`)
  }

}
