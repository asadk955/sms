import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product_details.component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'product_details',
    templateUrl: './product_details.component.html',
    styleUrls: ['./product_details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    product: any
    count: number = 1
    rate: number
    temp: number
    id: number
    totalDiscount: number
    customerID:number

    constructor(private service:ProductDetailsService,
        private activateRoute:ActivatedRoute,
        private cartService: ProductDetailsService,
        private route:Router) {
      
        this.id = this.activateRoute.snapshot.params['id']
      
        if(this.id)
        {
            this.service.getProduct(this.id).subscribe(response => {
                if(response['status']=='success')
                {
                    this.product = response['data'][0]
                    this.rate = this.product.priceWithDiscount
                    this.temp = this.rate
                }
            })

        }

     }


     OnIncrement()
     {
        this.count = this.count + 1
        this.rate = this.temp * this.count
     }

     OnDecrement()
     {
        if(this.count == 1)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
            this.rate = this.temp * this.count
        }
     }

     onAddToCart()
     {
         if(localStorage['login_status'] == '0'){
            alert('You need to login first')
            this.route.navigate(['/Customerlogin'])
         }
         else
         {
             if(confirm('Do You want to add itmes'))
             {
                this.customerID = localStorage['id']
                this.totalDiscount = (this.product.price * this.count) - this.rate

                this.cartService.postInCart(this.count,this.rate,this.totalDiscount,this.customerID,this.id)
               .subscribe(response =>{
                if(response['status'] == 'success'){
                    alert('items added in your cart')
                  }
          })

         }

        }
     }

     OnOrderNow()
     {

     }
     
     OnBack()
     {
        if(localStorage['onBack'] == 'allopathic'){
            this.route.navigate(['/Customerlogin/allopathic'])
        }
        else if(localStorage['onBack'] == 'ayurvedic'){
            this.route.navigate(['/Customerlogin/ayurvedic'])
        }
        else if(localStorage['onBack'] == 'homo'){
            this.route.navigate(['/Customerlogin/homoeopathy'])
        }
        else if(localStorage['onBack'] == 'searchProduct'){
            this.route.navigate(['/Customerlogin/search'])
        }
        else{
            this.route.navigate(['/Customerlogin/home'])
        }
        
     }

    ngOnInit() { }
}

