import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: any;
  @Input() course_list: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(id) {
    this.router.navigate(['/course', id])
  }

}
