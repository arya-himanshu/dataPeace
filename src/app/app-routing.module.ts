import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { UserComponent } from "./UserContainer/user/user.component";

const routes: Routes = [
  { path: "**", redirectTo: "/user" },
  {
    path: "user",
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
