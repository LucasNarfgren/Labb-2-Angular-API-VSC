import { Component } from '@angular/core';
import { Employee } from './Models/Employee.model';
import { EmployeeService } from './Service/Employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Labb-2-Avancerad.NET';

  employees : Employee[] = [];
  employee : Employee ={
    employeeId:'',
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    zipCode:'',
    city:'',
    phone:'',
    salary:'',
    genderId:'',
    departmentId:'',
    fullName:''
  }


  constructor(private EmployeeService : EmployeeService){

  }

  ngOnInit():void{
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.EmployeeService.getAllEmployees().subscribe(response => { this.employees = response; })
  }

  onSubmit(){
    if(this.employee.employeeId == ''){
      this.EmployeeService.addEmployee(this.employee)

      .subscribe
      (response => {

        this.getAllEmployee();

        this.employee = {
          employeeId: '',
          firstName:'',
          lastName:'',
          email:'',
          address:'',
          city:'',
          zipCode:'',
          phone:'',
          salary:'',
          genderId:'',
          departmentId:'',
          fullName:''
        }
       }
      )
    }
    else{
      this.updateEmployee(this.employee);
    }
  }


  updateEmployee(employee:Employee){
    this.EmployeeService.updateEmployee(employee).subscribe( response => {
      this.getAllEmployee();
    })
  }


  onDelete(id:string){
    this.EmployeeService.deleteEmployee(id).subscribe(response => {
      this.getAllEmployee();
    })
  }

  populateForm(employee:Employee){
    this.employee = employee;
  }

  getEmployee(id:string){
    this.EmployeeService.getEmployee(id).subscribe(response =>{
      this.getEmployee(id);
    })
  }
}
