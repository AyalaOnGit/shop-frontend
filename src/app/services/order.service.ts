import { Injectable } from '@angular/core';
import { OrderDTO } from '../models/order.model';
import { OrderItemDTO } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  statuses: string[] = ['באריזה','מוכן לשליחה', 'נשלח','בתחנת איסוף', 'הגיע'];
  orders: OrderDTO[] = [
    {
      orderDate: '2024-05-12',
      orderId: 101,
      orderSum: 150.50,
      userId: 1,
      status: 'נשלח', // הוספנו סטטוס כדי שתוכלי להציג אותו
      orderItems: [
        {productId: 1, productName: 'ספל קרמיקה מעוצב', quantity: 2, price: 75.25, popularColor:'Blue', customText:'לאבא היקר באהבה❤️'}
      ]
    },
    {
      orderDate: '2024-06-01',
      orderId: 105,
      orderSum: 119.99,
      userId: 2,
      status: 'בטיפול',
      orderItems: [
      { productId:1,productName: 'מוצר לדוגמא', quantity: 1, price: 99.99,popularColor:'Red', customText:'הפסקת קפה' },
      { productId:3,productName: 'מוצר נוסף', quantity: 3, price: 20.00 ,popularColor:'Yellow', customText:'גם בשעות החשוכות של הלילה'},
      ]
    },
    {
      orderDate: '2024-02-10',
      orderId: 88,
      orderSum: 225.75,
      userId: 1,
      status: 'הגיע',
      orderItems: [
        {productId: 1, productName: 'ספל קרמיקה מעוצב', quantity: 3, price: 75.25, popularColor:'Blue', customText:'לאבא היקר באהבה❤️'}

      ]
    }
  ];

  constructor() { }

  getStatuses(){
    return this.statuses;
  }
  getOrders(){
    return this.orders;
  }

  getOrderById(orderId: number): OrderDTO | undefined {
    return this.orders.find(order => order.orderId === orderId);
  }
  updateOrderStatus(orderId: number,status:string) {
    const order = this.getOrderById(orderId);
    order!.status = status;
  }

  getOrdersByProductId(productId: number): OrderDTO[] {
  return this.orders.filter(order => 
    order.orderItems.some(item => item.productId === productId)
  );
}
}