import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  uname:any   //uname=''
  acno:any
  psw:any
  constructor(private ds:DataService, private router:Router) {}

  ngOnInit(): void {
    
  }

  register(){
    // var userDetails=this.ds.userDetails             //var userDetails can be used again instead of this.ds.userDetails 
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.register(uname,acno,psw)

    if(result){
      alert('registered')
      this.router.navigateByUrl("")
    }
    
    else{
      alert('acc no already present')
    }
    //console.log(uname,acno,psw);
    


  }

}
