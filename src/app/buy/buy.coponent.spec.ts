import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"; 
//import { parse } from 'node:path';
import { efood } from '../food-items/food-items';
import { foodservice } from '../food-items/food-items.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
@Injectable()
export class BuyComponent implements OnInit {

 pgtitle="here are the list of items you selected";
 food:efood;
  constructor(private route:Router,private aroute:ActivatedRoute,private fservice:foodservice) { }

  ngOnInit(): void {
    let id=+this.aroute.snapshot.paramMap.get('id');
    this.pgtitle += `:${id}`;
    this.food = this.fservice.getf(id);
    this.cartdetails();
    this.loadcart();

  }
  incq(Item,qnt)
  {
    for(let i=0;i<this.getCartDetails.length;i++)
    {
      if(this.getCartDetails[i].Item===Item){
        if(qnt!=5)
        this.getCartDetails[i].qnt=parseInt(qnt)+1;
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.getCartDetails));
    this.loadcart();
  }
  decq(Item,qnt)
  {
    for(let i=0;i<this.getCartDetails.length;i++)
    {
      if(this.getCartDetails[i].Item===Item){
        if(qnt!=1)
        this.getCartDetails[i].qnt=parseInt(qnt)-1;
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.getCartDetails));
    this.loadcart();
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
  removeall()
 {
   localStorage.removeItem('cart');
   this.getCartDetails=[];
   this.total=0;
   this.cartNumber=0;
   this.fservice.cartSubject.next( this.cartNumber);
   
 }
 singledel(c)
 {
   console.log(c);
   if(localStorage.getItem('cart')){
     this.getCartDetails=JSON.parse(localStorage.getItem('cart'));
     for(let i=0;i<this.getCartDetails.length;i++)
     {
       if(this.getCartDetails[i].Item===c)
       {
         this.getCartDetails.splice(i,1);
         localStorage.setItem('cart',JSON.stringify(this.getCartDetails));
         this.loadcart();
         this.cartnumberf();
       }
     }
   }
 }
 cartNumber:number=0;
 cartnumberf()
 {
     var cartValue=JSON.parse(localStorage.getItem('cart'));
     this.cartNumber= cartValue.length;
     this.fservice.cartSubject.next( this.cartNumber);
 }
  total:number=0;
  loadcart()
  {
    if(localStorage.getItem('cart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('cart'));
      this.total=this.getCartDetails.reduce(function(acc,val){
      return acc+(val.Cost*val.qnt);
      },0)
    }
  }
  getCartDetails:any=[];
  cartdetails()
  {
    if(localStorage.getItem('cart')){
    this.getCartDetails=JSON.parse(localStorage.getItem('cart'));
    console.log(this.getCartDetails);
    }
  }
 goback()
 {
this.route.navigate(['/Fooditems']);
 }
}