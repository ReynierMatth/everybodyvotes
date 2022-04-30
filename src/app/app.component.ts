import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'everybodyvotes';

  isMobile = false;
  userNamePopup = false;

  constructor(private router: Router, public firebaseService : FirebaseService, public auth: AngularFireAuth) {
  }

    ngOnInit(): void {
      this.isMobile = window.innerWidth < 850;
        this.auth.authState.subscribe(user => {
          this.firebaseService.onLogin(user);
        })
      this.firebaseService.usernameSubject.subscribe(x => {
        if(!this.firebaseService.username){
          this.openUserNamePopup();
        }
      });
    }


  public goToCreatePoll(){
    this.router.navigate(['polls/create']);
  }

  public login(){
    this.firebaseService.login();
  }

  public logout(){
    this.firebaseService.logout().then(() => this.router.navigate(['']));
  }

  private openUserNamePopup() {
    this.userNamePopup = true;
  }

}
