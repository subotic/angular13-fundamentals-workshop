import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';
import {FormsModule} from "@angular/forms";
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
    ],
  declarations: [AppComponent, HomeComponent, CoursesComponent, CoursesListComponent, CourseDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
