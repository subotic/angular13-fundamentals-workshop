import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../../common/models/course";

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {

    currentCourse: Course;
    originalTitle: string = '';

    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input() set course(value: Course) {
        if (!value) return;
        this.currentCourse = {...value};
        this.originalTitle = value.title;
    }
}
