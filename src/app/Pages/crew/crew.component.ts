import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  constructor( private http: HttpClient) { }

  allCrewData!: any;
  singleCrewData!: any;

  imageDirection!: string;
  crewMemberName!: string;
  bio!: string;
  role!: string;

  ngOnInit(): void {

    this.http.get("assets/data.json").subscribe( data => {
      JSON.stringify(data)
      this.allCrewData = data;
      this.allCrewData = this.allCrewData.crew
      console.log(this.allCrewData);
      
      this.imageDirection =  this.allCrewData[0].images.png;
      this.imageDirection = this.imageDirection.replace(/^.\//i, "");
      this.crewMemberName = this.allCrewData[0].name;
      this.bio = this.allCrewData[0].bio;
      this.role = this.allCrewData[0].role;
    })
  }

  getCrewData(crewNum: number): void {
    this.singleCrewData = this.allCrewData[crewNum];
    this.imageDirection =  this.singleCrewData.images.png;
    this.crewMemberName = this.singleCrewData.name;
    this.bio = this.singleCrewData.bio;
    this.role = this.singleCrewData.role;
  }

}
