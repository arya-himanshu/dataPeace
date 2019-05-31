import { Component, OnInit } from "@angular/core";

import { User } from "src/app/models/user";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private userSerive: UserService) {}
  users: Array<User> = new Array();
  globalUsers: Array<User> = new Array();
  pageIndexs: Array<number> = new Array();
  userLength: number;
  keyword: string;
  ngOnInit() {
    this.getUses();
  }

  getUses() {
    this.userSerive.getUsers().subscribe(data => this.setResponse(data));
  }

  setResponse(response: Array<User>) {
    this.users = response;
    this.globalUsers = response;
    this.userLength = response.length;
    this.chnageIndex(1);
  }

  chnageIndex(index) {
    this.paginate(this.globalUsers, this.userLength, 5, index);
  }

  paginate(
    users: Array<User>,
    userLength: number,
    perPage: number,
    currentIndex: number
  ) {
    let paginateNo: number;
    paginateNo = userLength / perPage;
    this.users = [];
    this.pageIndexs = [];
    if (paginateNo % 2 != 0) {
      paginateNo = Math.round(paginateNo + 1);
    }
    for (let i = 1; i <= paginateNo; i++) {
      this.pageIndexs.push(i);
    }
    for (let user of this.globalUsers.slice(
      perPage * currentIndex - perPage,
      perPage * currentIndex
    )) {
      this.users.push(user);
    }
  }

  searchUser(keyword: string) {
    console.log(keyword);
    console.log(this.globalUsers.find(e => e.first_name === keyword)); // {foo: 'bar'} (first match)
  }
}
