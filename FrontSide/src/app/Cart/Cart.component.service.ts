import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

    url='http://localhost:4000/Customerlogin/addcart'

    constructor(private httpClient: HttpClient) { }
    
    getCart(customerID:number)
    {      
        const body = {
            customerID:customerID
        }
        return this.httpClient.post(this.url,body)
    }



}