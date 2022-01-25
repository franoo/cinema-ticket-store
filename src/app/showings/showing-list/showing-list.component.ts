import { Component, OnInit } from '@angular/core';
import { Showing } from 'src/app/models/showing.model';
import { ShowingService } from 'src/app/services/showing.service';

@Component({
  selector: 'app-showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['./showing-list.component.css']
})
export class ShowingListComponent implements OnInit {

  constructor(private showingsService: ShowingService) { }

  showings: Showing[]=[];

  
  ngOnInit(): void {
    this.showingsService.getShowings().subscribe(data =>{
      this.showings = data;
      console.log(data);
    })
  }

}
