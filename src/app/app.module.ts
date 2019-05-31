import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UserComponent } from "./UserContainer/user/user.component";
import { UserDetailsComponent } from "./UserContainer/user-details/user-details.component";

@NgModule({
  declarations: [AppComponent, UserComponent, UserDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
