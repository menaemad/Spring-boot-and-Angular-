import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { UserService } from 'src/app/Servicse/user.service';
import { User } from 'src/Model/user';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[];
  files : TreeNode[];
  userId:number;
  store:[]=[];
  constructor(private userSrv: UserService , private router: Router) { }

  ngOnInit(): void {
   this.getUser();
  }
  getUser(){
    this.userSrv.getUsersList().pipe(
        map((res:any)=>
        res.map((data)=>{
        return  {
            data: data,
            children: data.childern
        };
    })
    )).subscribe((data)=>{
        this.files=data ;
        console.log(data);
    });

 }
  updateUser(id: number){
      this.router.navigate(['update-user',id]);
  }
  deleteUser(id){
    this.userSrv.deleteUser(id).subscribe(data =>{
     this.getUser();
    },error => console.log(error));
  }

}
