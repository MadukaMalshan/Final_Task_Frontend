import { Routes } from '@angular/router';
import { EmployeeHomeComponent } from './EmployeeManegement/employee-home/employee-home.component';
import { NavBarComponent } from './EmployeeManegement/nav-bar/nav-bar.component';
import { EmployeeComponent } from './EmployeeManegement/employee/employee.component';

export const routes: Routes = [

    {


    path:'dashboard',
    component:NavBarComponent,
    
     children :[
        {
            path:'employeeview',
            component:EmployeeHomeComponent

            

        },

        {
            path:"employee",
            component:EmployeeComponent

        }
     ]


    }

    

];
