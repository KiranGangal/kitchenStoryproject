import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from './adpwd';

@Component({
  selector: 'app-adpwd',
  templateUrl: './adpwd.component.html',
  styleUrls: ['./adpwd.component.css']
})
export class AdpwdComponent implements OnInit {

  new_pass:string;
r_new_pass:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  admin=new Admin();
  Pass_change(userForm:NgForm){

    if(this.admin.password=='mahathi123')
    {
      if(this.new_pass==this.r_new_pass)
      {
        alert("Admin password changed");
        this.route.navigate(['./add']);
      }
      else{
        alert("Re-enter password correctly");
      }
    }

    else{
      alert("Enter valid current password");
    }
  }
}
