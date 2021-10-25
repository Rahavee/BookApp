import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAPIServiceService } from '../service/book-apiservice.service';

@Component({
  selector: 'app-employee-deets',
  templateUrl: './employee-deets.component.html',
  styleUrls: ['./employee-deets.component.css']
})
export class EmployeeDeetsComponent implements OnInit {

  public employeeID:any;
  public employee:any;
  public errorMsg: any;

  constructor( private route: ActivatedRoute, private empService: BookAPIServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any)=>{
      let id = params.get('id');
      console.log(id);
      this.employeeID = id;

    });
    this.empService.getBooks().subscribe(
      (data) => {this.employee = data;
      this.employee = this.employee.results[this.employeeID]},
      (error) => this.errorMsg = error,
      ()=>console.log("completed")
    )
  }

}
