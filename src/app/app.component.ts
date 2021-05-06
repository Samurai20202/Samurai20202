import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Employee';

  ngOnInit(): void {};

  constructor() {};

  public empName: String="";
  public empNum: Number=0;

  public employees = [{id: 1,Name: "Utkarsh", Code: 234},{id: 2,Name: "Saurabh", Code: 123}]


  register(empName:any, empNum:any)
  {
    var sno = 1;
    this.employees.push({id: sno++, Name:empName, Code:parseInt(empNum)});
    //console.log(this.listOfEmployees);
  }

  deleteUser(index:any)
  {
    this.employees.splice(index, 1);
  }

}