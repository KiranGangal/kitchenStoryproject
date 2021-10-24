import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class cereservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private bfood:efood[]=[{
  "Item":1,
  "Name":"Dosa",
  "Cost":99,
  "Rating":5.0,
  "qnt":1,
  "Img":"assets/dosa.jpg"
  },
  {
    "Item":2,
    "Name":"Idly",
    "Cost":50,
    "Rating":4.8,
    "qnt":1,
    "Img":"assets/idly.jpg"
    },
    {
      "Item":3,
      "Name":"Puri",
      "Cost":75,
      "Rating":5.0,
      "qnt":1,
      "Img":"assets/puri.jpg"
      },
      ]
      getcere():efood[]
      {
         return this.bfood;
      }
      getf(id:number):efood{
       const f1=this.bfood.find(f1=>f1.Item===id)
       return f1;       
      }
}