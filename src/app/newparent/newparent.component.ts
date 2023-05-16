import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.css']
})
export class NewparentComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  ngOnInit(): void {
    
  }
}
