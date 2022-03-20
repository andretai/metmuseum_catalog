import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-preview',
  templateUrl: './artwork-preview.component.html',
  styleUrls: ['./artwork-preview.component.css']
})
export class ArtworkPreviewComponent implements OnInit {

  @Input() art: any;

  constructor() { }

  ngOnInit(): void {
  }

}
