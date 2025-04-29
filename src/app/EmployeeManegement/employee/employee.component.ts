import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  public employeeList  : any=[
    {
      id: 0,
      name: "",
      adress: "",
      salary: 0,
      age: 0,
    }
  ]

  employee: FormData = new FormData();  

  constructor(private employeeservice:EmployeeServiceService,private http:HttpClient){
    this.loadEmployee();
    console.log("Employee Home Component Loaded");
  }
  AddEmployee() {
    let newEmployee = { name: this.employeeList.name, adress:this.employeeList.adress, salary: this.employeeList.salary, age: this.employeeList.age };
    this.http.post("http://localhost:8080/api/employee/save-employee", newEmployee, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res) => {
        console.log('Success:', res);
      },
      error: (err) => {
        console.error('Error:', err.error);
      }
    });
  }
  loadEmployee(){
    this.employeeservice.getAll().subscribe({
      next:(res)=>{
        this.employeeList=res;
      }
    })
  }


  }

 
