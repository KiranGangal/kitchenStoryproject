import { Component, OnInit } from '@angular/core';
import {efood} from './food-items';
import { foodservice } from './food-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  title = 'angular-text-search-highlight';
  _searchterm:string;
  imgWidth1="600";
  imgHeight1="300";
  imgRadius="15";
  searchedItems:any[]=[];
    get searchterm():string{
       
        return this._searchterm;
        }

  set searchterm(value:string){
    
    this._searchterm=value;
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.Food;
   

  }
 
  
searchkitchen(searchby:string):any[]{
        searchby=searchby.toLocaleLowerCase();
        return this.Food.filter((Food:any)=>Food.Name.toLocaleLowerCase().indexOf(searchby)!==-1);
    }
    constructor(private foo:foodservice,private route:Router) { }

  ngOnInit(): void {
    this.searchedItems=this.Food;
  }
  inc(f)
  {
    if(f.qnt!=5)
    {
    f.qnt=f.qnt+1;
  }
  }
  dec(f)
  {
    if(f.qnt!=1)
    {
    f.qnt=f.qnt-1;
    }
  }
  itemsCart:any=[];
  add(f)
{
 let cdataNull=localStorage.getItem('cart');
 if(cdataNull==null)
 {
   let sdataget:any=[];
   sdataget.push(f);
   localStorage.setItem('cart',JSON.stringify(sdataget));
 }
 else{
   var id=f.Item;
   let index:number=-1;
   this.itemsCart=JSON.parse(localStorage.getItem('cart'));
   for(let i=0;i<this.itemsCart.length;i++)
   {
     if(parseInt(id) == parseInt(this.itemsCart[i].Item))
     {
         this.itemsCart[i].qnt=f.qnt; 

         index=i;
         break;  
     }
   }
if(index==-1)
{
  this.itemsCart.push(f);
  localStorage.setItem('cart',JSON.stringify(this.itemsCart));
}
else{
  localStorage.setItem('cart',JSON.stringify(this.itemsCart));
}
 }
 this.cartnumberf();
}
cartNumber:number=0;
  cartnumberf()
  {
      var cartValue=JSON.parse(localStorage.getItem('cart'));
      this.cartNumber= cartValue.length;
      this.foo.cartSubject.next( this.cartNumber);
  }
  od()
  {
    alert("Login First");
    this.route.navigate(['./login']);
  }
  Food:efood[]=[
    {"Item":1,
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
}