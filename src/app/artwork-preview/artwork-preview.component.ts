import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artwork-preview',
  templateUrl: './artwork-preview.component.html',
  styleUrls: ['./artwork-preview.component.css']
})
export class ArtworkPreviewComponent implements OnInit {

  @Input() art: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // For triggering the modal with artwork's detail.
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

}
