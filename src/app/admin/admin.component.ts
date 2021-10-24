  import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { efood } from '../food-items/food-items';
import { foodservice } from '../food-items/food-items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl:efood[]=[];
  

  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:foodservice){
    
  }

  ngOnInit(): void {
    this.vtbl=this.utservice.getFood();
    
      }
      deleteItem(name:string)
      {
        const index=this.vtbl.findIndex(
          item=>item.Name===name
        )
        if(index>=0){
          this.vtbl.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/admin']);
      }
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
   