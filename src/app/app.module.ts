import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExtractContentPipe } from './pipes/extract-content.pipe';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkPreviewComponent } from './artwork-preview/artwork-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtractContentPipe,
    ArtworkListComponent,
    ArtworkPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
