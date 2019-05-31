import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { UserComponent } from "./UserContainer/user/user.component";
import { UserDetailsComponent } from './UserContainer/user-details/user-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/user", pathMatch: "full" },
  {
    path: "user",
    component: UserComponent
  },  
  { path: 'user-details/:id', component: UserDetailsComponent }, 
   { path: "**", redirectTo: "/user" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}