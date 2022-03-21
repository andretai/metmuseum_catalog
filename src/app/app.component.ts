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

  depts: Array<any> = [];
  arts: Array<any> = [];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artworkService.deptsChange.subscribe((depts: Array<any>) => {
      this.depts = depts
    })
    this.artworkService.artsChange.subscribe((arts: Array<any>) => {
      this.arts = arts;
    })
  }

  getDeptName(deptId: number): string {
    return this.depts.find(dept => dept.departmentId == deptId).displayName;
  }

  hasArts(dept: string): boolean {
    return this.artworkService.checkHasArts(dept);
  }

  getArtsByDept(dept: string): Array<any> {
    return this.artworkService.filterArtsByDept(dept);
  }

}
