import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowOrdersListService } from './ShowOrders.service';

@Component({
    selector: 'OrderlistOFMR',
    templateUrl: './ShowOrders.component.html',
    styleUrls: ['./ShowOrders.component.css']
})

export class ShowOrdersComponent  {

    products: any[]
    date:Date
    id:number
    username:String
   // status:String

    constructor(private router: Router,
        productservice: ShowOrdersListService,
        private service : ShowOrdersListService,
        private activeRoute:ActivatedRoute) {

         this.id = this.activeRoute.snapshot.params['id']
 
         this.loadAllProducts()
        
         
    }
 
    ondelete(id: number) {
      console.log(id)
      if(confirm('Are you sure to delete an item'))
      {
          this.service
            .deleteProduct(id)
            .subscribe(response => {
              if (response['status'] == 'success') {
                window.location.reload()
                //this.loadAllProducts()
              } else {
                console.log(response['error'])
              }
            })
        }
      }

  loadAllProducts() {
   
    this.date = new Date()
  
    this.service
      .getAllProducts(this.id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
          
        } else {
          alert('error')
        }
      })
  }

  isexpire(product) {

    const currentdate= new Date()
    return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
  }

}