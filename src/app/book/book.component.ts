import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from '../model/IBook';
import { BookAPIServiceService } from '../service/book-apiservice.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: any;
  errorMsg:any;

  constructor(private empService: BookAPIServiceService, private router: Router) { }
  
  OnSelect(id:any){
      this.router.navigate(['/employee/', id ])
  }
  ngOnInit(): void {
    this.empService.getBooks().subscribe (
      (data)=>{this.books = data; 
        this.books = (this.books.results);
      console.log(this.books[1].name)},
      (error) => this.errorMsg = error,
      ()=>console.log("completed")
    )
  }

}
