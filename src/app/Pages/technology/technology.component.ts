import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor( private http: HttpClient) { }

  allTechnologyData!: any;
  singleTechnologyData!: any;

  imageDirectionL!: string;
  imageDirectionP!: string;
  name!: string;
  description!: string;

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe (data => {
        JSON.stringify(data)
        this.allTechnologyData = data
        this.allTechnologyData = this.allTechnologyData.technology
        console.log(this.allTechnologyData);

        this.imageDirectionL =  this.allTechnologyData[0].images.landscape;
        this.imageDirectionL = this.imageDirectionL.replace(/^.\//i, "");
        this.imageDirectionP =  this.allTechnologyData[0].images.portrait;
        this.imageDirectionP = this.imageDirectionP.replace(/^.\//i, "");
        this.name = this.allTechnologyData[0].name;
        this.description = this.allTechnologyData[0].description;
      })
  }
  
  getNum(arrNum: number): void {
    this.singleTechnologyData = this.allTechnologyData[arrNum];
    this.imageDirectionL = this.singleTechnologyData.images.landscape;
    this.imageDirectionP = this.singleTechnologyData.images.portrait;
    this.name = this.singleTechnologyData.name;
    this.description = this.singleTechnologyData.description;
  }
}
