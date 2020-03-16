import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit {
  public courses = []

  constructor(private course: CourseService) { }

  ngOnInit(): void {
    this.course.getCourse()
      .subscribe(data => {
        this.courses = data
      })
  }

}
