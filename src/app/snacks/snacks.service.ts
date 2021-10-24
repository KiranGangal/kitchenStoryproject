import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class snacksservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private snacks:efood[]=[{
  
    "Item":4,
    "Name":"Pizza",
    "Cost":300,
    "Rating":4.5,
    "qnt":1,
    "Img":"assets/pizza.jpg"
    },
    {
      "Item":5,
      "Name":"Burger",
      "Cost":150,
      "Rating":4.0,
      "qnt":1,
      "Img":"assets/burger.jpg"
      },
      {
        "Item":6,
        "Name":"French Fries",
        "Cost":250,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/fingerchips.jpg"
        }
      ]
      getFruit():efood[]
      {
         return this.snacks;
      }
      getf(id:number):efood{
       const f1=this.snacks.find(f1=>f1.Item===id)
       return f1;       
      }
  
}