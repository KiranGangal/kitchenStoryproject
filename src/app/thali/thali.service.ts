import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class thaliservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private thali:efood[]=[{
  
    "Item":7,
    "Name":"North Indian Thali",
    "Cost":250,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/nthali.jpg"
    },
    {
      "Item":8,
      "Name":"South Indian Thali",
      "Cost":300,
      "Rating":3.0,
      "qnt":1,
      "Img":"assets/sthali.jpg"
      },
      {
        "Item":9,
        "Name":"Veg Thali",
        "Cost":120,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/pthali.jpg"
        },
]
getnut():efood[]
{
   return this.thali;
}
getf(id:number):efood{
 const f1=this.thali.find(f1=>f1.Item===id)
 return f1;       
}

}
