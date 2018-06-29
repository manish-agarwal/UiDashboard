import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { ImgService } from './img.service';
import { VideoService } from './video.service';
import { ActivitiesService } from './activities.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    QuickAccessComponent,
    VideoTutorialsComponent,
    RecentActivitiesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImgService, VideoService, ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
