import { Component, OnInit } from '@angular/core';
import { WpdataService } from 'src/app/services/wpdata/wpdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category;
  private _id: string;

  constructor(
    private _wpdataService: WpdataService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('_id');
    this._wpdataService.getCategory(parseInt(this._id)).subscribe(category => {
      this.category = category;
      console.log(this.category);
    });
  }

}
