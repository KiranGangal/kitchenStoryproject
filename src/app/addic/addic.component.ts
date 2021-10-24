import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cereservice } from '../breakfast/breakfast.service';
import { efood } from '../food-items/food-items';
import { Kitchens1 } from './addic';

@Component({
  selector: 'app-addic',
  templateUrl: './addic.component.html',
  styleUrls: ['./addic.component.css']
})
export class AddicComponent implements OnInit {

  Item:number;
    Name:string;
    Cost:number;
    Rating:number;
    qnt:number;
    Img:string;
    kitchens1:efood[]=[];

    kitchen=new Kitchens1();
  constructor(private frtservice:cereservice, private route:Router) { }

  ngOnInit(): void {
    this.kitchens1=this.frtservice.getcere();
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
