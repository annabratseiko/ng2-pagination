import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  private _limit: number;
  private _list: Array<any>;
  private pages: Array<any>
  private _listData: any;
  private _pages: Array<any> = [];

  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();

  @Input() page: number;
  @Input() maxItems: number;

  @Input()
  set items(val: Array<any>) {
    this._list = val;
    this.pages = this.calcPages();
  }

  get items(): Array<any> {
    return this._list;
  }

  @Input()
  set limit(val: number) {
    this._limit = val;
    this.pages = this.calcPages();
  }

  get limit(): number {
    return this._limit;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  calcPages() {
    this._pages = [];
    let itemsNumber = this.items.length;
    let count = Math.ceil(itemsNumber / this.limit);

    for( let i = 0; i < count; i++) {
      this._pages.push({
        name: i + 1,
        number: i + 1
      });
    }

    return this._pages;
  }

  selectPage(value: number) {
    this.pageNumber.emit(value);
    this.router.navigate(['/list', value, this.limit]);
  }

  goNext() {
    if (!this.hasNext()) return false;
    this.selectPage(this.page + 1);
  }

  goPrev() {
    if (!this.hasPrev()) return false;
    this.selectPage(this.page - 1); 
  }

  hasNext() {
    return this.page < this._pages.length;
  }

  hasPrev() {
    return this.page > 1;
  }

}
