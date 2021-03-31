import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRegisterService } from './CustomerRegister.service';


@Component({
    selector: 'Customer-register',
    templateUrl: './CustomerRegister.component.html',
    styleUrls : ['./CustomerRegister.component.css']
})

export class CustomerRegisterComponent implements OnInit {
    username: string =''
    firstname: string =''
    lastname: string =''
    registration_date: string = '1990/01/01'
    phoneno: string =''
    email: string = ''
    password: string =''

    service: CustomerRegisterService
    constructor(private router: Router,
        userservice: CustomerRegisterService ) { 
            this.service =  userservice
        }

    onadd()
    {
        if(this.username.length == 0){
            alert('username is required')
        }
        else if(this.firstname.length == 0){
            alert('firstname is required')
        }
        else if(this.lastname.length == 0){
            alert('lastname is required')
        }
        else if(this.phoneno.length == 0){
            alert('phone number is required')
        }
        else if(this.email.length == 0){
            alert('email is required')
        }
        else if(this.password.length ==0){
            alert('password is required')
        }
        else{

        

        this.service.addUsers(this.username,this.firstname,this.lastname,this.registration_date,
            this.phoneno,this.email,this.password).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('you have successfully register')
                    this.router.navigate(['/Customerlogin'])
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })

        }
    }
    ngOnInit() { }

}