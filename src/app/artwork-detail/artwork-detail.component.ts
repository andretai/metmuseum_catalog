import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() art: any;

  constructor() { }

  ngOnInit(): void {
  }

}
