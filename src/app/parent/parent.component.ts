import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentDay:string 

  constructor()
  {
    this.currentDay = "Friday"
  } 
  ngOnInit(): void {
    
  }
}
