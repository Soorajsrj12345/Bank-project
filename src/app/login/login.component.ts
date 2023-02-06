import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your Perfect Banking Partner"
 
  inputplaceholder="Account Number" 

  acno:any     //acno=''
  psw:any




  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
    
  }

    login(){
    var acno=this.acno
    var psw=this.psw
    
    const result=this.ds.login(acno,psw)
    if(result){
      alert("login success")
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("incorrect acno or password")
    }
  }



  // login(a:any,b:any){
  //   var acno=a.value
  //   var psw=b.value
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("acno incorrect or not registered yet")
  //   }
  //   // alert("login clicked")
  // }


  // login(){
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("acno incorrect or not registered yet")
  //   }
  //   // alert("login clicked")
  }


  // acnoChange(event:any){
  //   this.acno=(event.target.value);
    // console.log(this.acno);
    
    
  // }

  // pswrdChange(event:any){
  //    this.psw=(event.target.value)
    //  console.log(this.psw);
     
//   }

// }
