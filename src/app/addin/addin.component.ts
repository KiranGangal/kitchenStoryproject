import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { efood } from '../food-items/food-items';
import { thaliservice } from '../thali/thali.service';
import { Kitchens2 } from './addin';

@Component({
  selector: 'app-addin',
  templateUrl: './addin.component.html',
  styleUrls: ['./addin.component.css']
})
export class AddinComponent implements OnInit {

  Item:number;
    Name:string;
    Cost:number;
    Rating:number;
    qnt:number;
    Img:string;
    kitchens1:efood[]=[];

    kitchen=new Kitchens2();
  constructor(private frtservice:thaliservice, private route:Router) { }

  ngOnInit(): void {
    this.kitchens1=this.frtservice.getnut();
  }
  save(userForm:NgForm){
    alert("Form Submitted"+this.kitchen.Name);
  }
  onCereAdd(userForm:NgForm){
    let a={
      Item:+this.kitchen.Item,
      Name:this.kitchen.Name,
      Cost:+this.kitchen.Cost,
      Rating:+this.kitchen.Rating,
      qnt:+this.kitchen.qnt,
      Img:this.kitchen.Img,
    }
    this.kitchens1.push(a);
    alert("Item Added");
    this.route.navigate(['./add']);    
  }

}
