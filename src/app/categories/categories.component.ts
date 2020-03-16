import { Component, OnInit} from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories = []
  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(data => {
        this.categories = data
      })
  }
  onSelect(category){
    this.router.navigate(['/courses', category])
  }

}
