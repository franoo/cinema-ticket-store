import { Component, Input, OnInit } from '@angular/core';
import { Showing } from 'src/app/models/showing.model';

@Component({
  selector: 'app-showing-item',
  templateUrl: './showing-item.component.html',
  styleUrls: ['./showing-item.component.css']
})
export class ShowingItemComponent implements OnInit {

  constructor() { }

  @Input() showing: Showing;
  showDetails= false;
  ngOnInit(): void {
  }
  onDetailsShow(){
    this.showDetails=!this.showDetails;
  }

}
