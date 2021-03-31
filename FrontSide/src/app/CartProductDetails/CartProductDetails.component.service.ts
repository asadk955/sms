import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartProductDetailsService {

    url = 'http://localhost:4000/login/dashboard/product/'
    url1 ='http://localhost:4000/Customerlogin/cartEdit'
    url2 = 'http://localhost:4000/Customerlogin/cartDelete'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,customerID:number,productID:number,orderDetailsTableID:number)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            customerID:customerID,
            productID:productID,
            orderDetailsTableID:orderDetailsTableID
        }

        return this.httpClient.put(this.url1,body)
    }

    DeleteFromCart(id:number)
    {
        const body = {
            id:id
        }

        return this.httpClient.post(this.url2,body)
    }



}