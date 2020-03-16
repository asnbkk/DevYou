import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private location: Location ,private router: Router, private courseService: CourseService, private activatedRoute: ActivatedRoute) { }
  public courses;
  private id = this.activatedRoute.snapshot.paramMap.get('course_id')
  ngOnInit(): void {
    this.courseService.getCourse()
      .subscribe(data => {
        this.courses = data.filter(o => o.category == this.id)
      })
  }

  goBack() {
    this.location.back()
  }

}
