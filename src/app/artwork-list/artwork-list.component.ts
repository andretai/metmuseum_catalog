import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  @Input() dept: any;
  @Input() arts: any;

  artsList: Array<any> = [];
  slicePoint: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.artsList = this.arts;
  }

  prev(): void {
    if(this.slicePoint > 0) {
      this.slicePoint -= 6;
    }
  }

  next(): void {
    if(this.slicePoint < this.artsList.length - 6) {
      this.slicePoint += 6;
    }
  }

}
