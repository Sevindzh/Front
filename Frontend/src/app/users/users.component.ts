import { Component, OnInit } from '@angular/core';
import { IUser } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: IUser[]=[]
  constructor(private _usersservice: UsersService) { }

  ngOnInit(): void {
    this._usersservice.getUsers().subscribe(data => this.users = data);
  }

}
