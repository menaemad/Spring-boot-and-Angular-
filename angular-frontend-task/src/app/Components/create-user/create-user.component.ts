import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicse/user.service';
import { User } from 'src/Model/user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User ;//=new User();
  userSelcte: any;
  constructor(private userSrv: UserService ,
              private router: Router) {
              this.user={parent:{id:0} as User,username:"" ,fullName:"",id:0 , childern :[]};
           //  this.user={}as User;
               }

  ngOnInit(): void {
    this.userSrv.getUsersList().subscribe(data => {
      this.userSelcte=data;
    });
  }

  onSubmit(id){
  // this.user.parent=new User();
     this.user.parent.id=id;    
     this.saveUser();
   }
  saveUser(){
    this.userSrv.createUser(this.user).subscribe(data =>{
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  
}
