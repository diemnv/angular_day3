import { Component, OnInit } from '@angular/core';

interface filmCart {
  name: string;
  type: string;
  time: string;
  startDate: Date;
  photo: string;
}

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.component.html',
  styleUrls: ['./cgv.component.scss']
})
export class CgvComponent implements OnInit {

  filmList: filmCart[]=[
    {
     name: "BỘ BA QUÁI NHÂN",
     type: "Kịch tính, Kinh Dị",
     time: "135",
     startDate : new Date(),
     photo: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/g/l/glass240.jpg"
   },
   {
     name: "BỘ BA QUÁI NHÂN",
     type: "Kịch tính, Kinh Dị",
     time: "135",
     startDate : new Date(),
     photo: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/2/4/240_10_47.jpg"
   },

    {
     name: "BỘ BA QUÁI NHÂN",
     type: "Kịch tính, Kinh Dị",
     time: "135",
     startDate : new Date(),
     photo: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/2/4/240_11_6.jpg"
   },

   {
    name: "BỘ BA QUÁI NHÂN",
    type: "Kịch tính, Kinh Dị",
    time: "135",
    startDate : new Date(),
    photo: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/2/4/240_11_6.jpg"
  },

    {
     name: "BỘ BA QUÁI NHÂN",
     type: "Kịch tính, Kinh Dị",
     time: "135",
     startDate : new Date(),
     photo: "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/2/4/240_10_41.jpg"
   }];

  constructor() {}

  ngOnInit() {

  }

  remove(idx: number) {
    this.filmList = this.filmList.filter((item, index) => index !== idx);
  }

}
