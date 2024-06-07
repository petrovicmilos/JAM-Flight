import { Component,Inject, OnInit } from '@angular/core';
import { User, UserService} from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService){}

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      name: this.data.user.name,
      email: this.data.user.email,
      password: this.data.user.password,
      date: this.data.user.date,
      phone: this.data.user.phone,
      address: this.data.user.address
    };
    console.log(this.isEditing)
  }

  doEdit(){
    this.isEditing = !this.isEditing;
    console.log(this.isEditing);
  }

  finishEditing(form: NgForm){
    this.data.user.name = this.profileForInput.name;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.date = this.profileForInput.date;
    this.data.user.phone = this.profileForInput.phone;
    this.data.user.address = this.profileForInput.address;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

}
