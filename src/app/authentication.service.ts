import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) {
  
  }
  login(email:string,pasword:string){
    this.fireAuth.signInWithEmailAndPassword(email,pasword).then(()=>{
      //then we store token in local storage
      alert('login succesfull');
      localStorage.setItem('token','true');
      this.router.navigate(['/home'])

    },err =>{
          alert('something went wrong');
          this.router.navigate(['/login'])
    })      
  }

  //register method
  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registration succesfull');
      this.router.navigate(['/login']);


    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);

    })
  }
    //sign out
    logout(){
      this.fireAuth.signOut().then(() =>{
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
      },err =>{
        alert(err.message);

      })

  }
}
