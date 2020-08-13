import { Component } from '@angular/core';
import { UserService } from './user/services/user.service';
import { IData } from './models/data.model';
import { IResponse } from './models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'userproject';
  user: IData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPerson().subscribe((resp) => {
      this.user = resp.data;
    });
  }
}
