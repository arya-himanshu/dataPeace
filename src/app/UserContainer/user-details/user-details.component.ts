import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId
  constructor( private router: Router, private route: ActivatedRoute, private userService:UserService) {
    this.userId = this.route.snapshot.paramMap.get('id')
    if(this.userId == undefined ||  this.userId == null){
    this.router.navigate(['/user'])
    }
   }
   user:User=new User();

  ngOnInit() {
 this.userService.getUsers().subscribe(
   data=> this.setResponse(data)
 )
  }
  setResponse(response){
    this.user =  response.filter(x => x.id == this.userId)[0];

  }

}
