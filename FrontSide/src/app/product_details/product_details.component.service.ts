import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductDetailsService {

    url = 'http://localhost:4000/login/dashboard/product/'
    url1 ='http://localhost:4000/Customerlogin/cart'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,customerID:number,productID:number)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            customerID:customerID,
            productID:productID
        }

        return this.httpClient.post(this.url1,body)
    }



}