import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-pagination-wrapper',
  templateUrl: './pagination-wrapper.component.html',
  styleUrls: ['./pagination-wrapper.component.css'],
  providers: [PaginationService]
})
export class PaginationWrapperComponent implements OnInit {
  private items: Array<any> = [];
  private page: number = 1;
  private limit: number = 5;
  private maxItems: number = 4;

  private limitsArray = [1, 2, 3, 4, 5];

  constructor(
    private _dataService: PaginationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    _dataService.getData().then(data => {
      this.items = data;
    });

    activatedRoute.params.subscribe((params: Params) => {
      this.page = +params["num"];
      this.limit = +params["limit"];
    });  
  }

  ngOnInit() {
  }

  onSelectChange(value: number) {
    this.limit = value;
    this.router.navigate(['/list', 1, this.limit]);
  }

  getPageNumber(event: number){
    this.page = event;
  }

}
