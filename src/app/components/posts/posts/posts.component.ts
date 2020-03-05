import { Component, OnInit } from '@angular/core';
import { WpdataService } from 'src/app/services/wpdata/wpdata.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(
    private _wpdataService: WpdataService
  ) { }

  ngOnInit(): void {
    this._wpdataService.getAll(5).subscribe(posts => {
      this.posts = posts;
    })
  }

}
