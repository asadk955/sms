import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AdminloginComponent } from './Adminlogin/Adminlogin.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Add_userComponent } from './add_user/add_user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './login/user.service';
import { ProductComponent } from './product_list/product_list.component';
import { ProductService } from './product_list/product.service';
import { Add_productComponent } from './add_product/add_product.component';
import { AddUserService } from './add_user/adduser.service';
import { AddProductService } from './add_product/add_product.service';
import { Edit_userComponent } from './edit_user/edit_user.component';
import { EditUserService } from './edit_user/edit_user.service';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { EditProductService } from './edit_product/edit_product.service';
import { CustomerloginComponent } from './Customerlogin/Customerlogin.component';
import { CustomerloginService } from './Customerlogin/Customerlogin.service';
import { UserHomeComponent } from './user_home/user_home.component';
import { GetProductService } from './user_home/user_home.component.service';
import { ProductDetailsComponent } from './product_details/product_details.component';
import { ProductDetailsService } from './product_details/product_details.component.service';
import { AllopathicComponent } from './allopathic/allopathic.component';
import { AllopathicService } from './allopathic/allopathic.component.service';
import { HomoeopathyComponent } from './homoeopathy/homoeopathy.component';
import { HomoeopathyService } from './homoeopathy/homoeopathy.component.service';
import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { AyurvedicService } from './ayurvedic/ayurvedic.component.service';
import { SearchProductService } from './SearchProduct/SearchProduct.component.service';
import { SearchProductComponent } from './SearchProduct/SearchProduct.component';
import { CartComponent } from './Cart/Cart.component';
import { CartService } from './Cart/Cart.component.service';
import { CustomerRegisterComponent } from './CustomerRegister/CustomerRegister.component';
import { CustomerRegisterService } from './CustomerRegister/CustomerRegister.service';
import { CartProductDetailsComponent } from './CartProductDetails/CartProductDetails.component';
import { CartProductDetailsService } from './CartProductDetails/CartProductDetails.component.service';
import { UserOrdersComponent } from './UserOrders/UserOrders.component';
import { UserOrdersService } from './UserOrders/UserOrders.component.service';
import { UserOrderListComponent } from './UserOrderList/UserOrderList.component';
import { UserOrderListService } from './UserOrderList/UserOrderList.service';
import { AllOrderListService } from './AllOrderList/AllOrderList.service';
import { AllOrderListComponent } from './AllOrderList/AllOrderList.component';
import { ShowOrdersComponent } from './ShowOrders/ShowOrders.component';
import { ShowOrdersListService } from './ShowOrders/ShowOrders.service';

import { ContactComponent } from './contact/contact.component';
import { CovidServicesComponent } from './covid-services/covid-services.component';



const routes: Route[] = [

   { path: '', redirectTo: '/Customerlogin/home', pathMatch: 'full' },

  // the default component
 // { path: '', component: AdminloginComponent },

  {path: 'login' , component: AdminloginComponent},
  {path: 'login/dashboard', component: DashboardComponent},

  { path: 'login/dashboard/user', component: LoginComponent },
  {path: 'login/dashboard/product',component: ProductComponent},

  {path: 'login/dashboard/user/add_user',component: Add_userComponent},
  {path: 'login/dashboard/product/add_product',component: Add_productComponent},

  {path: 'login/dashboard/user/edit_user/:id',component: Edit_userComponent },
  {path: 'login/dashboard/product/edit_product/:id',component: Edit_productComponent },

  {path: 'Customerlogin/home', component: UserHomeComponent, canActivate: [AppComponent]},


  {path: 'Customerlogin', component: CustomerloginComponent},
  {path: 'Customerlogin/product_details/:id', component: ProductDetailsComponent},

  {path: 'Customerlogin/allopathic', component: AllopathicComponent},
  {path: 'Customerlogin/homoeopathy', component: HomoeopathyComponent},
  {path: 'Customerlogin/ayurvedic', component: AyurvedicComponent},
  {path: 'Customerlogin/search', component: SearchProductComponent},
  {path: 'Customerlogin/cart', component: CartComponent},
  {path: 'Customer-register', component: CustomerRegisterComponent},
  {path: 'Customerlogin/cartEdit/:id', component: CartProductDetailsComponent},
  {path: 'Customerlogin/cart/placeorder', component: UserOrdersComponent},
  {path: 'Customerlogin/orders', component: UserOrderListComponent},
  {path: 'Customerlogin/dashboard/orders', component: AllOrderListComponent},
  {path: 'Customerlogin/dashboard/ShowOrders/:id', component: ShowOrdersComponent},

  {path: 'contact', component: ContactComponent},
  {path: 'covid-services', component: CovidServicesComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    Add_userComponent,
    DashboardComponent,
    ProductComponent,
    Add_productComponent,
    Edit_userComponent,
    Edit_productComponent,
    CustomerloginComponent,
    UserHomeComponent,
    ProductDetailsComponent,
    AllopathicComponent,
    HomoeopathyComponent,
    AyurvedicComponent,
    SearchProductComponent,
    CartComponent,
    CustomerRegisterComponent,
    CartProductDetailsComponent,
    UserOrdersComponent,
    UserOrderListComponent,
    AllOrderListComponent,
    ShowOrdersComponent,
    ContactComponent,
    CovidServicesComponent
    
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    ProductService,
    AddUserService,
    AddProductService,
    EditUserService,
    EditProductService,
    CustomerloginService,
    AppComponent,
    GetProductService,
    ProductDetailsService,
    AllopathicService,
    HomoeopathyService,
    AyurvedicService,
    SearchProductService,
    CartService,
    CustomerRegisterService,
    CartProductDetailsService,
    UserOrdersService,
    UserOrderListService,
    AllOrderListService,
    ShowOrdersListService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
