import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor( private http: HttpClient) { }

  projectData!: any;
  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe( data => {
      JSON.stringify(data)
      this.projectData = data;
      this.projectData = this.projectData.crew;
      console.log(this.projectData);
    })
  }

}
