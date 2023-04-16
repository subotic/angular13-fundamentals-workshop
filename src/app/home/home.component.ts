import { Component, OnInit } from '@angular/core';
import {Lesson} from "../common/models/lesson";
import {LessonService} from "../common/services/lesson.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  selectedLesson = null;

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessons =this.lessonService.lesson;
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson
  }
}
