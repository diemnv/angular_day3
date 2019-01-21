import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  show = true;
  userInfo = {
    name: "Diem",
    photo: "http://file.vforum.vn/hinh/2015/12/hinh-anh-meo-de-thuong-nhat-qua-dat-58.jpg"
  };

  products = [
    {
      name: "ao len",
      price: 5000
    },
    {
      name: "ao khoac",
      price: 10000
    }
    ,
    {
      name: "ao phong",
      price: 2000
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }
}
