import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/Employee.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class EmployeeService{
    baseUrl='https://localhost:7040/api/Employee';
    constructor(private http: HttpClient){}

    getAllEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl)
    }

    addEmployee(employee:Employee):Observable<Employee>{
        employee.employeeId='00000000-0000-0000-0000-000000000000';

        return this.http.post<Employee>(this.baseUrl +'/add',employee);
    }

    deleteEmployee(id:string):Observable<Employee>{
        return this.http.delete<Employee>(this.baseUrl + '/' + id);
    }

    updateEmployee(employee:Employee):Observable<Employee>{
        return this.http.put<Employee>(this.baseUrl + '/' + employee.employeeId, employee);
    }
    getEmployee(id:string):Observable<Employee>{
        return this.http.get<Employee>(this.baseUrl + '/' + id);
    }
}






