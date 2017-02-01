import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  routeSub: any;
  item;

  constructor(
    private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this._hackerNewsAPIService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item ' + itemID));
    });
  }

}
