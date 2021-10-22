import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { BookAPIServiceService } from '../service/book-apiservice.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books:any;
  errorMsg:any;

  constructor(private empService: BookAPIServiceService) { }
  
  ngOnInit(): void {
    this.empService.getBooks().subscribe(
      (data)=>{this.books = data; console.log(data)},
      (error) => this.errorMsg = error,
      ()=>console.log("completed")
    )
  }

}
