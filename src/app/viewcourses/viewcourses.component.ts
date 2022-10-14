import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit {

  constructor(private myapi:ApiService) {
this.fetchData()
   }



status:boolean=false

   fetchData=()=>{
    this.myapi.viewcourse().subscribe(
      (data)=>{
        this.courseData=data
        this.status=true
      }
    )
   }
  courseData:any = []
  ngOnInit(): void {
  }

}
