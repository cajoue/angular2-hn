import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userSub: any;
  user;

  constructor(
    private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userSub = this.route.params.subscribe(params => {
      let userID = params['id'];
      this._hackerNewsAPIService.fetchUser(userID).subscribe(data => {
        this.user = data; 
      }, error => console.log('Could not load user ' + userID));
    });
  }

}
