import { Component, OnInit } from '@angular/core';
import { efood } from '../food-items/food-items';
import { foodservice } from 'src/app/food-items/food-items.service';

@Component({
  selector: 'app-nut',
  templateUrl: './thali.component.html',
  styleUrls: ['./thali.component.css']
})
export class ThaliComponent implements OnInit {

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
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.thali;
   

  }
 
  
searchkitchen(searchby:string):any[]{
        searchby=searchby.toLocaleLowerCase();
        return this.thali.filter((Food:any)=>Food.Name.toLocaleLowerCase().indexOf(searchby)!==-1);
    }
    constructor(private foo:foodservice) { }

  ngOnInit(): void {
    this.searchedItems=this.thali;
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

  thali:efood[]=[
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
          }

]

}