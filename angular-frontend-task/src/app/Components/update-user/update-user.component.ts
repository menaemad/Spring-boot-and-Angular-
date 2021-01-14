import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Servicse/user.service';
import { User } from 'src/Model/user';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User =new User();
  userSelcte: any;

  constructor(private userSrv: UserService
    , private router: ActivatedRoute
    , private route: Router) { }

  ngOnInit(): void {
    this.userSrv.getUsersList().subscribe(data => {
      this.userSelcte = data;
    });

    this.id = this.router.snapshot.params['id'];
    this.userSrv.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data);
    }, error => console.log(error));
  }
  changeSelected(id){
    console.log(id);
  }
  onSubmit(id) {
    this.user.parent = new User();
    this.user.parent.id =id;
    this.saveUser();
  }
  saveUser() {
    this.userSrv.updateUser(this.id, this.user).subscribe(data => {
      this.goToUserList();
    }, error => console.log(error));
  }
  
  goToUserList() {
    this.route.navigate(['users']);
  }
}
