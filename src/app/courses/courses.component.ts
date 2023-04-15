import {Component, OnInit} from '@angular/core';
import {Course} from "../common/models/course";
import {stringify} from "@angular/compiler/src/util";


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

    courses : Course[] = [
        {
            id: '1',
            title: 'Angular 13 Fundamentals',
            description: 'Learn the fundamentals of Angular 13',
            percentComplete: 26,
            favorite: true
        },
        {
            id: '2',
            title: 'Angular 14 Fundamentals',
            description: 'Learn the fundamentals of Angular 14',
            percentComplete: 29,
            favorite: true
        },
        {
            id: '3',
            title: 'Angular 15 Fundamentals',
            description: 'Learn the fundamentals of Angular 15',
            percentComplete: 37,
            favorite: true
        }
    ];

    selectedCourse = emptyCourse;

    constructor() {
    }

    ngOnInit(): void {
    }

    selectCourse(course: Course) {
        this.selectedCourse = {...course};
    }

    removeCourseSelection() {
        this.selectCourse({...emptyCourse})
    }

    deleteCourse(courseId: String) {
        console.log("DELETE COURSE:", courseId);
    }

    saveCourse(course: Course) {
        console.log("SAVE COURSE:", course);
    }

}
