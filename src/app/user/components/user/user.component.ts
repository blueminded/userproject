import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IData } from '../../../models/data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: IData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
