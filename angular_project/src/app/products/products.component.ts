import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products = [
    {
      id: 1,
      date : "21-06-2017",
      name: "Moto Z2",
      price : "3999 SEK",
      image : "/assets/products/phone1.jpg",
      available: "Available"
    },
    {
      id: 2,
      date : "01-05-2018",
      name: "Iphone X",
      price : "12999 SEK",
      image : "/assets/products/phone2.jpg",
      available: "Available"

    },
    {
      id: 3,
      date : "12-08-2018",
      name: "Samsung s9",
      price : "11999 SEK",
      image : "/assets/products/phone3.jpg",
      available: "Not Available"

    
    },
    {
      id: 4,
      date : "11-01-2017",
      name: "Nokia 6",
      price : "5999 SEK",
      image : "/assets/products/phone4.jpg",
      available: "Available"

  
    },
    {
      id: 5,
      date : "11-08-2017",
      name: "Lenovo P2",
      price : "8999 SEK",
      image : "/assets/products/phone5.jpg",
      available: "Not Available"

     
    },
    {
      id: 6,
      date : "10-08-2018",
      name: "OnePlus 6T",
      price : "8999 SEK",
      image : "/assets/products/phone6.jpg",
      available: "Available"

   
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
