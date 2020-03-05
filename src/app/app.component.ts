import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WPangularFront';
  @ViewChild("posts") posts: ElementRef;
  @ViewChild("customFields") customFields: ElementRef;

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.title = 'WP Angular Front';
  }

  toggleActive(type) {
    if (type === 'posts') {
      this._renderer.removeClass(this.customFields.nativeElement, 'uk-active');
      this._renderer.addClass(this.posts.nativeElement, 'uk-active');
    } else if (type === 'custom-fields') {
      this._renderer.addClass(this.customFields.nativeElement, 'uk-active');
      this._renderer.removeClass(this.posts.nativeElement, 'uk-active');
    }
  }


}
