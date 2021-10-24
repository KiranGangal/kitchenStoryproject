import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { efood } from '../food-items/food-items';
import { foodservice } from '../food-items/food-items.service';
import { snacksservice } from '../snacks/snacks.service';
import { Kitchen, Kitchens } from './additem';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

   Item:number;
    Name:string;
    Cost:number;
    Rating:number;
    qnt:number;
    Img:string;
    kitchens:efood[]=[];

    kitchen=new Kitchens();
  constructor(private frtservice:snacksservice, private route:Router) { }

  ngOnInit(): void {
    this.kitchens=this.frtservice.getFruit();
  }
  save(userForm:NgForm){
    alert("Form Submitted"+this.kitchen.Name);
  }
  onFruitAdd(userForm:NgForm){
    let a={
      Item:+this.kitchen.Item,
      Name:this.kitchen.Name,
      Cost:+this.kitchen.Cost,
      Rating:+this.kitchen.Rating,
      qnt:+this.kitchen.qnt,
      Img:this.kitchen.Img,
    }
    this.kitchens.push(a);
    alert("Item Added");
    this.route.navigate(['./add']);    
  }

}