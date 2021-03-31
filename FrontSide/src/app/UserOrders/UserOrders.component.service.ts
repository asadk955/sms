
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrdersService {
    http: HttpClient
    url1 = 'http://localhost:4000/Customerlogin/cart/confirmorder'   //express port 4000

   
    
    constructor(httpClient: HttpClient) {
        this.http = httpClient
       
        console.log(this.url1);
     }

     
     UpdateOrders(
        OrderDate:String,
        deliveryDate:String,
        PaymentMode: number,
        customerID:number,
        fullname:String,
        address:String,
        phoneno:String

        )
        
        {
        
        const body = {
            OrderDate:OrderDate,
            deliveryDate:deliveryDate,
            PaymentMode:PaymentMode,
            customerID:customerID,
            fullname:fullname,
            address:address,
            phoneno:phoneno
            
        }

        return this.http.put(this.url1, body)
    } 


    InsertLocation(fullname:String,phoneno:String,state:String,city:String,pincode:String,address:String,customerID:number)
    {
        const body = {
            fullname:fullname,
            phoneno:phoneno,
            state:state,
            city:city,
            pincode:pincode,
            address:address,
            customerID:customerID
        }

        return this.http.post(this.url1, body)
    }

    // getFullAddress()
    // {
    //     return this.http.get(this.url1)
    // }
        

}