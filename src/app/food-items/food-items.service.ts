import {Injectable} from "@angular/core";
import {efood} from './food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class foodservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private food:efood[]=[{
    "Item":1,
    "Name":"Dosa",
    "Cost":99,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/dosa.jpeg"
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
        {
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
              },
           
               {
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

    getFood():efood[]
    {
       return this.food;
    }
    getf(id:number):efood{
     const f1=this.food.find(f1=>f1.Item===id)
     return f1;       
    }

}   