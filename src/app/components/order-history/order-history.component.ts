import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderDTO } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Footer1 } from '../footer1/footer';
import { Header } from '../header1/header';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [Footer1,Header,CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit{
  private orderService=inject(OrderService);
  userService=inject(UserService);

  ordersHistory:OrderDTO[]=[]

  // ngOnInit(): void {
  //   const allOrders=this.orderService.getOrders();

  //   if(this.userService.isAdmin()){
  //     this.ordersHistory=allOrders;
  //   }
  //   else{
  //     const userId=this.userService.getCurrentUser()?.UserId;
  //     this.ordersHistory=allOrders.filter(order=>order.userId===userId);
  //   }
  //   console.log(this.ordersHistory);
  // }
  ngOnInit(): void {
    const allOrders = this.orderService.getOrders();
    const currentUser = this.userService.getCurrentUser();
    
    console.log('כל ההזמנות:', allOrders);
    console.log('המשתמש המחובר:', currentUser);
  
    if(this.userService.isAdmin()){
      this.ordersHistory = allOrders;
    } else {
      const userId = currentUser?.UserId;
      this.ordersHistory = allOrders.filter(order => order.userId === userId);
      console.log('הזמנות לאחר סינון:', this.ordersHistory);
    }
  }

  updateOrderStatus(orderId: number) {
    if(!this.userService.isAdmin()){
    this.orderService.updateOrderStatus(orderId,'הגיע');}
    else{
      const statuses=this.orderService.getStatuses();
      const thisStatusIndex=statuses.findIndex(status=>status===this.ordersHistory.find(order=>order.orderId===orderId)?.status);
      if(thisStatusIndex<statuses.length-1){ //אם לא הגיע למצב האחרון
      this.orderService.updateOrderStatus(orderId,statuses[(thisStatusIndex+1)]);
      }
    }
  }
  
}
