import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.model.ts/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BookService) { }

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      console.log(data);
      
    });
  }

}
