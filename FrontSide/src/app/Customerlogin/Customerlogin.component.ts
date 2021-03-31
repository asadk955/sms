import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CustomerloginService } from './Customerlogin.service';
import * as toastr from 'toastr';


@Component({
    selector: 'Customer-login',
    templateUrl: './Customerlogin.component.html',
    styleUrls: ['./Customerlogin.component.css']
})

export class CustomerloginComponent {
    email = ''
    password = ''
    rememberme = false
   // isLoggedIn = false

   

    constructor(private router: Router,
        private service: CustomerloginService) { }

    onlogin()
    {
        if(this.email.length == 0)
        {
            alert('email field can not be empty')
        }
        else if(this.password.length == 0)
        {
            alert('password can not be empty')
        }
        else
        {

             this.service.login(this.email,this.password).subscribe((response)=>{
                
            
                console.log(response)
                if(response['status']=='success')
                {
                
                        localStorage['login_status'] = '1'
                        localStorage['username'] = response['data'][0].username
                        localStorage['id'] = response['data'][0].id
                        localStorage['flag'] = '0'

                   
                
                    this.router.navigate(['/Customerlogin/home'])
                }
                else if(response['status']=='error')
                {

                    alert('invaild email or password')
                }

           })

        }

    }
 
    
}