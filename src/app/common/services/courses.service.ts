import { Injectable } from '@angular/core';
import {Course} from "../models/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  model = 'courses'

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get(this.getUrlWithId(id));
  }

  create(course: Course) {
    return this.httpClient.post(this.getUrl(), course);
  }

  update(course: Course) {
    return this.httpClient.put(this.getUrlWithId(course.id), course);
  }

  delete(id: string) {
    return this.httpClient.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
