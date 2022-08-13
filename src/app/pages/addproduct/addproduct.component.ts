import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm!:FormGroup ;

  constructor() { }

  ngOnInit(): void {

    this.productForm=new FormGroup({
      id:new FormControl(null,[Validators.required]),
      addProduct:new FormControl(null,[Validators.required]),
      addQuantity:new FormControl(null,[Validators.required]),
      addYear:new FormControl(null,[Validators.required]),
      addPrice: new FormControl(null,[Validators.required])
    })
  }
  onSave(){}


}
