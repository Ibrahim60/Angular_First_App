import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList: any;
  constructor(private _service: UserService) { }

  ngOnInit() {
    this.userList = this._service.getList();
  }

  delete(id: number) {
    this._service.delete(id);
  }
}
