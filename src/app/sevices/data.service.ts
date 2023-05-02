import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading headers as global
const option={
  headers:new HttpHeaders()

}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser:any
  currentAcno:any
  userDetails:any

  constructor(private http:HttpClient){
  //  this.getData()
  }
  
  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:"abc123",balance:0,transaction:[]},
  //   1001:{acno:1001,username:"amal",password:"abc123",balance:0,transaction:[]},
  //   1003:{acno:1003,username:"arun",password:"abc123",balance:0,transaction:[]},
  //   1004:{acno:1004,username:"akhil",password:"abc123",balance:0,transaction:[]}

  // }


  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
      if(this.currentAcno){
        localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
      }
    }

    // getData(){
    //   if(localStorage.getItem('database')){
    //     this.userDetails=JSON.parse(localStorage.getItem('database') || "")
    //   }
    //   if(localStorage.getItem('currentUser')){
    //     this.currentUser=localStorage.getItem('currentUser')
    //   }
    //   if(localStorage.getItem('currentAcno')){
    //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || "" )
    //   }
    // }
  
    getToken(){
      //access token
      const token=JSON.parse(localStorage.getItem("token")  || "" )

      //generate header
      let headers= new HttpHeaders()

      if(token){
        //append token in header
      option.headers= headers.append("access_token",token)
      }
      return option
    }

  register(uname:any,acno:any,psw:any){
  //create body data
  const data={uname,acno,psw}
  return this.http.post("http://localhost:3001/register",data)


  }

  login(acno:any,psw:any){
   // create body data
   const data={acno,psw}         //key and value same ..key is in the body data used in API call..value is in login argument
   return this.http.post("http://localhost:3001/login",data)


  }

  deposit(acnum:any,password:any,amount:any){
   const data ={acnum,password,amount}
   return this.http.post("http://localhost:3001/deposit",data,this.getToken())

  }

  withdraw(acnum:any,password:any,amount:any){
    const data ={acnum,password,amount}
    return this.http.post("http://localhost:3001/withdraw",data,this.getToken())
 
  }

  getTransaction(acno:any){
    const data= {acno}
    return this.http.post("http://localhost:3001/transaction",data,this.getToken())

  }

  deleteacc(acno:any){
    return this.http.delete("http://localhost:3001/delete/"+acno,this.getToken())
  }
}
