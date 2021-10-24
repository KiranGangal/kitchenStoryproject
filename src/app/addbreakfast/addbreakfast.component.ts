import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cereservice } from '../breakfast/breakfast.service';
import { efood } from '../food-items/food-items';

@Component({
  selector: 'app-addcere',
  templateUrl: './addbreakfast.component.html',
  styleUrls: ['./addbreakfast.component.css']
})
export class AddbreakfastComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl:efood[]=[];

  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:cereservice){}

  ngOnInit(): void {
    this.vtbl=this.utservice.getcere();
    
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
        this.route.navigate(['/addbreakfast']);
      }
    }

}