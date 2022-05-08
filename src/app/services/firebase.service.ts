import { Injectable } from '@angular/core';
import { AngularFireDatabase} from "@angular/fire/compat/database";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  public userId: string;
  public creatingPoll: boolean;
  public username : string;
  public usernameSubject = new Subject();


  constructor(  public auth: AngularFireAuth, private db: AngularFireDatabase ) {
  }

  userIsLogged(): boolean {
    return !!this.userId;
  }

  setUserId(userId:string){
    this.userId = userId;
  }

  logout(){
    this.userId='';
    return this.auth.signOut();
  }

  login(){
    return this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return this.auth.signInWithPopup(provider);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
  }

  onLogin(user: firebase.User | null) {
    console.log("onlogin detected");
    console.log(user);
    if (user) {
      this.setUserId(user.uid);
      this.getUserName();
    }
  }

  public getUserName() {
    return this.db.object(this.userId + '/userinfo/username').valueChanges()
      .subscribe(username => {
        this.username = username as string;
        this.usernameSubject.next(true);
      });
  }

  setUserName(username: string) {
    return this.db.object(this.userId + '/userinfo/username').set(username)
      .then(x => {
        this.db.object(this.userId + '/userinfo/username').valueChanges()
          .subscribe(userName => this.username = userName as string);
        this.db.list('/usernames').push(username);
      });
  }

  checkUsernameAvailable() {
    return this.db.list(`/usernames`);
  }
}
