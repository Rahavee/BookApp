import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  employees: any = [];
  hover:boolean = false;

  constructor() {
    this.employees = [{name:"Rahavee", age:34, gender:"F"},{name:"Somebody", age:55, gender:"M"},{name:"anybody", age:54, gender:"F"}];
   }

   GetPosition(index:number):String{
        if (this.employees[index].age > 40){
          return "Senior Employee";
        }
        return "Junior Employee";
   }

   GetSalary(index:number):number{
     if(this.GetPosition(index)==="Senior Employee"){
       return this.employees[index].age * 10 + 50.000;
     }
     return this.employees[index].age * 5 + 50.000;
   }

  ngOnInit(): void {
  }

  


}
