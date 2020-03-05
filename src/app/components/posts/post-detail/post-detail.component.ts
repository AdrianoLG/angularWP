import { Component, OnInit } from '@angular/core';
import { WpdataService } from 'src/app/services/wpdata/wpdata.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  categories;
  post;
  private _id: string;

  constructor(
    private _wpdataService: WpdataService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('_id');
    this._wpdataService.getSinglePost(parseInt(this._id)).subscribe(post => {
      this.post = post[0];
      this._wpdataService.getCategories(this.post.id).subscribe(categories => {
        this.categories = categories;
      })
    });
  }

  goBack(): void {
    this._location.back();
  }

}
