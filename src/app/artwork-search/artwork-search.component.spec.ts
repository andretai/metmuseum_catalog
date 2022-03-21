import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkSearchComponent } from './artwork-search.component';

describe('ArtworkSearchComponent', () => {
  let component: ArtworkSearchComponent;
  let fixture: ComponentFixture<ArtworkSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
