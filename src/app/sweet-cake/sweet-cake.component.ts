import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cake= {
    cakeName: "",
    cakeCinde: "",
    text: ""
  };

  chocolateCake = 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg'
  cheesCake = 'https://natashaskitchen.com/wp-content/uploads/2020/05/Pefect-Cheesecake-7.jpg'
  carrotsCake = 'https://charlotteslivelykitchen.com/wp-content/uploads/2019/11/carrot-cake-3.jpg'

  isIncludesText = false;
  getTextArray(): string[]{
    if(this.cake.text === ""){
      this.isIncludesText = false
    }
    this.isIncludesText = true
    return this.cake.text.split(",");
  }

  isSubmit= false
  handleSubmit(formData:NgForm){
    this.cake =  formData.value;
    this.isSubmit = true
  }

}
