import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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





  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {}

    // model form
   
    loginForm=this.fb.group({
      acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

    })
  

  ngOnInit(): void {
    
  }

    login(){
    var acnum=this.loginForm.value.acno
    var psw=this.loginForm.value.psw
    if(this.loginForm.valid){
     
    this.ds.login(acnum,psw).subscribe((result:any)=>{
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
      localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
      localStorage.setItem("token",JSON.stringify(result.token))

      alert(result.message)
      this.router.navigateByUrl('dashboard')
    },
    result=>{
      alert(result.error.message)

    })

  }

  else{
    alert('invalid from')
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
