
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrderListService {

    http: HttpClient
    url = 'http://localhost:4000/Customerlogin/orders'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts(customerID:number) {
         const body = {
            customerID:customerID
         }
        return this.http.post(this.url,body)
      }
    
     deleteProduct(id: number) {
        
        this.url = this.url+ '/'+id
        return this.http.delete(this.url)
       
      }
    
}
