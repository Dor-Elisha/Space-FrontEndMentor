import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor( private http: HttpClient) { }

  allPlanetData!: any;
  planetData!: any;

  imageDirection!: string;
  starName!: string;
  description!: string;
  distance!: string;
  travelTime!: string;



  ngOnInit(): void {

    this.http.get("assets/data.json").subscribe( data => {
      JSON.stringify(data)
      this.allPlanetData = data;
      console.log(this.allPlanetData);
      this.allPlanetData = this.allPlanetData.destinations;
      console.log(this.allPlanetData[0]);

      this.imageDirection = this.allPlanetData[0].images.png;
      this.imageDirection = this.imageDirection.replace(/^.\//i, "");
      this.starName = this.allPlanetData[0].name;
      this.description = this.allPlanetData[0].description;
      this.distance = this.allPlanetData[0].distance;
      this.travelTime = this.allPlanetData[0].travel;
    })
  }

  getPlanetData(planetNum: number): void {
      this.planetData = this.allPlanetData[planetNum];
      this.imageDirection = this.planetData.images.webp;
      this.starName = this.planetData.name;
      this.description = this.planetData.description;
      this.distance = this.planetData.distance;
      this.travelTime = this.planetData.travel;

    }
}
