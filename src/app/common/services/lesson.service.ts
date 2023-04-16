import { Injectable } from '@angular/core';
import {Lesson} from "../models/lesson";

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  model = 'lessons'

  lesson: Lesson[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];
}
