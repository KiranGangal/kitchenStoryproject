import { Component, OnInit } from '@angular/core';
import { efood } from '../food-items/food-items';
import { foodservice } from 'src/app/food-items/food-items.service';


@Component({
  selector: 'app-cere',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  
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
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.bfood;
   

  }
 
  
searchkitchen(searchby:string):any[]{
        searchby=searchby.toLocaleLowerCase();
        return this.bfood.filter((Food:any)=>Food.Name.toLocaleLowerCase().indexOf(searchby)!==-1);
    }
    constructor(private foo:foodservice) { }

  ngOnInit(): void {
    this.searchedItems=this.bfood;
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
  bfood:efood[]=[{
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
        }
  ]
}