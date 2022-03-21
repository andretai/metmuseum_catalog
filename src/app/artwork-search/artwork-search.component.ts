import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../services/artwork.service';

@Component({
  selector: 'app-artwork-search',
  templateUrl: './artwork-search.component.html',
  styleUrls: ['./artwork-search.component.css']
})
export class ArtworkSearchComponent implements OnInit {

  searchText: string = "";

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
  }

  // Triggers Artwork Service to manipulate the displayed results.
  onSearch(e: any): void {
    // console.log(e.target.value)
    this.artworkService.searchArts(e.target.value)
  }

}
