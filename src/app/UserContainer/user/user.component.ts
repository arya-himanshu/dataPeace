import { Component, OnInit } from "@angular/core";

import { User } from "src/app/models/user";
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private userSerive: UserService, private router: Router) {}
  users: Array<User> = new Array();
  globalUsers: Array<User> = new Array();
  pageIndexs: Array<number> = new Array();
  userLength: number;
  keyword: string;
  perPage = 5;
  currentSortTpe: string = "id";
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
    this.chnageIndex(this.globalUsers, this.userLength, this.perPage, 1);
  }

  chnageIndex(user, length, perPage, index) {
    this.paginate(user, length, perPage, index);
    console.log(this.currentSortTpe);
    this.sorting(this.currentSortTpe);
  }

  paginate(
    users: Array<User>,
    userLength: number,
    perPage: number,
    currentIndex: number
  ) {
    let paginateNo: number;
    let localUsers: Array<User> = new Array();
    localUsers = users;

    paginateNo = userLength / perPage;
    this.users = [];
    this.pageIndexs = [];
    if (paginateNo % 2 != 0) {
      paginateNo = Math.round(paginateNo + 1);
    }
    for (let i = 1; i <= paginateNo; i++) {
      this.pageIndexs.push(i);
    }
    for (let user of localUsers.slice(
      perPage * currentIndex - perPage,
      perPage * currentIndex
    )) {
      this.users.push(user);
    }
  }

  searchUser(keyword: string) {
    if (
      this.globalUsers != undefined &&
      this.globalUsers.length > 0 &&
      keyword != undefined &&
      keyword.length > 0
    ) {
      this.users = [];
      for (let user of this.globalUsers) {
        if (user.first_name.toLowerCase().search(keyword.toLowerCase()) > -1) {
          this.users.push(user);
        }
      }
      this.globalUsers = this.users;
      this.userLength = this.users.length;
      this.paginate(this.users, this.userLength, this.perPage, 1);
    } else {
      this.getUses();
    }
  }

  sorting(type) {
    this.currentSortTpe = type;
    this.users = this.users.sort((n1, n2) => {
      switch (type) {
        case "id":
          if (n1.id > n2.id) {
            return 1;
          }

          if (n1.id < n2.id) {
            return -1;
          }
          return 0;
        case "first_name":
          if (n1.first_name > n2.first_name) {
            return 1;
          }

          if (n1.first_name < n2.first_name) {
            return -1;
          }
          return 0;
        case "last_name":
          if (n1.last_name > n2.last_name) {
            return 1;
          }

          if (n1.last_name < n2.last_name) {
            return -1;
          }
          return 0;
        case "company_name":
          if (n1.company_name > n2.company_name) {
            return 1;
          }

          if (n1.company_name < n2.company_name) {
            return -1;
          }
          return 0;
        case "city":
          if (n1.city > n2.city) {
            return 1;
          }

          if (n1.city < n2.city) {
            return -1;
          }
          return 0;
        case "state":
          if (n1.state > n2.state) {
            return 1;
          }

          if (n1.state < n2.state) {
            return -1;
          }
          return 0;
        case "zip":
          if (n1.zip > n2.zip) {
            return 1;
          }

          if (n1.zip < n2.zip) {
            return -1;
          }
          return 0;
        case "email":
          if (n1.email > n2.email) {
            return 1;
          }

          if (n1.email < n2.email) {
            return -1;
          }
          return 0;
        case "web":
          if (n1.web > n2.web) {
            return 1;
          }

          if (n1.web < n2.web) {
            return -1;
          }
          return 0;
        case "age":
          if (n1.age > n2.age) {
            return 1;
          }

          if (n1.age < n2.age) {
            return -1;
          }
          return 0;
        default:
        // code block
      }
    });
  }

  toUserDetails(userId:number){
     this.router.navigate(['/user-details/'+userId]);
  }
}
