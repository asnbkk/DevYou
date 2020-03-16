import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  public course
  constructor(private courseService: CourseService, private activetedRoute: ActivatedRoute, private location: Location) { }
  private id = this.activetedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.courseService.getCourse()
      .subscribe(data => {
        this.course = data.find(o => o.id == this.id)
      })
  }
  goBack() {
    this.location.back()
  }

}
