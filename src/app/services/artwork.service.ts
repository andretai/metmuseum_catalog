import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { concatMap } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private ROOT_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
  private FIXED_ARTS: Array<any> = [];

  depts: any = [];
  arts: any = [];

  // SETTERS

  setFixedArts(value: Array<any>): void {
    console.log('changing fixed arts')
    this.FIXED_ARTS = value;
  }

  setDepts(value: Array<any>): void {
    this.depts = value;
  }

  setArts(value: Array<any>): void {
    this.arts = value;
  }

  // CONSTRUCTOR

  constructor(private http: HttpClient) {
    this.createSubscriptions();
    this.fetchDepts();
  }

  // SUBSCRIPTIONS

  deptsChange: Subject<Array<any>> = new Subject();
  artsChange: Subject<Array<any>> = new Subject();

  createSubscriptions(): void {
    this.deptsChange.subscribe((depts: any) => {
      this.setDepts(depts);
    });
    this.artsChange.subscribe((arts: any) => {
      this.setArts(arts);
    });
  }

  // API CALLS

  fetchDepts(): void {
    this.http.get(`${this.ROOT_URL}/departments`)
      .subscribe((obj: any) => {
        this.deptsChange.next(obj.departments);
        this.fetchArtsByDept();
      });
  }

  // Fetch artworks' objectIDs by their departments, then fetch individual objects before setting them to 'arts'.
  fetchArtsByDept(): void {    
    for(let i = 0; i < this.depts.length; i++) { 
      var params = new HttpParams()
        .set('hasImages', `${true}`)
        .set('q', '*')
        .set('departmentId', `${this.depts[i].departmentId}`)
      // Used search to get results with image. Leaner and also better looking interface.
      this.http.get(`${this.ROOT_URL}/search`, { params })
        .pipe(
          concatMap((response: any) => {
            const observables = response.objectIDs.slice(0, 18).map((objectID: number) => {
              return this.http.get(`${this.ROOT_URL}/objects/${objectID}`)
            })
            return forkJoin(observables)
          })
        )
        .subscribe({
          next: (arts: any) => {
            // Set a separate array to store all of the results.
            this.setFixedArts([...this.FIXED_ARTS, ...arts]);
            // Set an array to store results, mutable by user's search, can reference 'fixedArts' when search's reset.
            this.artsChange.next([...this.arts, ...arts]);
          },
          error: err => console.log(err),
          complete: () => {
            // console.log('yay')
          }
        })    
    }   
  }

  // FILTERING ARTWORKS

  searchArts(query: string): void {
    query = query.toLowerCase();
    if(query.length < 1) {
      this.artsChange.next([...this.FIXED_ARTS])  
    } else {
      this.artsChange.next([...this.FIXED_ARTS])
      this.artsChange.next([...this.arts.filter((art: any) => {
        return art.title.toLowerCase().includes(query)
      })])
    }
  }

  // Not every departments return results, so we have to check and compare.
  checkHasArts(dept: string): boolean {
    return this.arts.filter((art: any) => art.department === dept).length > 0;
  }

  // Divide the artworks by department.
  filterArtsByDept(dept: string): any {
    return this.arts.filter((art: any) => art.department === dept);
  }

}
