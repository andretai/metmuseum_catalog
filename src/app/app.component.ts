import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkService } from './services/artwork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend_assessment';

  artworks: Array<object> = [];
  departments: Array<object> = [];
  artwork: object = {};

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artworkService.getDepartments().subscribe((obj: any) => {
      this.departments = obj.departments;
    })
    this.artworkService.getArtworks(1).subscribe((obj: any) => {
      this.artworks = obj.objectIDs;
    })
    this.artworkService.getArtwork(453).subscribe((obj: any) => {
      this.artwork = obj;
    })
  }

  logDepts(): void {
    console.log(this.departments);
  }

  logArts(): void {
    console.log(this.artworks);
  }

  logArt(): void {
    console.log(this.artwork);
  }
}
