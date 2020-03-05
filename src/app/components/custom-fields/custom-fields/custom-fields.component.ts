import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { WpdataService } from 'src/app/services/wpdata/wpdata.service';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss']
})
export class CustomFieldsComponent implements OnInit {
  @ViewChild('link1') link1;
  @ViewChild('link2') link2;
  politicos;
  perPage = 6;

  constructor(
    private _wpdataService: WpdataService,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this._wpdataService.getPoliticians(this.perPage, 1).subscribe(politicos => {
      this.politicos = politicos;
    })
  }

  goToPage(page: number) {
    this._wpdataService.getPoliticians(this.perPage, page).subscribe(politicos => {
      this.toggleActive(page);
      this.politicos = politicos;
    })
  }

  toggleActive(page) {
    if (page === 1) {
      this._renderer.removeClass(this.link2.nativeElement, 'uk-active');
      this._renderer.addClass(this.link1.nativeElement, 'uk-active');
    } else if (page === 2) {
      this._renderer.addClass(this.link2.nativeElement, 'uk-active');
      this._renderer.removeClass(this.link1.nativeElement, 'uk-active');
    }
  }

}
