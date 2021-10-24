import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { efood } from '../food-items/food-items';
import { thaliservice } from '../thali/thali.service';

@Component({
  selector: 'app-addfruits',
  templateUrl: './addthali.component.html',
  styleUrls: ['./addthali.component.css']
})
export class AddthaliComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl:efood[]=[];

  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:thaliservice){}

  ngOnInit(): void {
    this.vtbl=this.utservice.getnut();
    
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
        this.route.navigate(['/addthali']);
      }
    }

}