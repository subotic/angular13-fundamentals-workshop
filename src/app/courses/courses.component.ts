import {Component, OnInit} from '@angular/core';
import {Course} from "../common/models/course";
import {stringify} from "@angular/compiler/src/util";
import {CoursesService} from "../common/services/courses.service";


const emptyCourse: Course = {
    id: null,
    title: "",
    description: "",
    percentComplete: 0,
    favorite: false,
}

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    // 1. Render courses in a list
    // 2. Select a course
    // 3. Render selected courses

    courses : Course[]

    selectedCourse = emptyCourse;

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit(): void {
       this.fetchCourses()
    }

    selectCourse(course: Course) {
        this.selectedCourse = {...course};
    }

    removeCourseSelection() {
        this.selectCourse({...emptyCourse})
    }

    fetchCourses() {
        this.coursesService.getAll()
            .subscribe((courses: any) => this.courses = courses)
    }

    saveCourse(course: Course) {
        if(course.id) {
            // update
            this.updateCourse(course);
        } else {
            // create
            this.createCourse(course);
        }
    }

    updateCourse(course: Course) {
        this.coursesService.update(course)
            .subscribe(result => this.fetchCourses());
    }

    createCourse(course: Course) {
        this.coursesService.create(course)
            .subscribe(result => this.fetchCourses());
    }

    deleteCourse(courseId: string) {
        this.coursesService.delete(courseId)
            .subscribe(result => this.fetchCourses())
    }



}
