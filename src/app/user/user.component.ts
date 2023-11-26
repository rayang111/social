import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <button (click)="registerUser()">Enregistrer un utilisateur</button>
      <button (click)="getUser()">Obtenir un utilisateur</button>
      <button (click)="updateUser()">Mettre à jour un utilisateur</button>
      <button (click)="deleteUser()">Supprimer un utilisateur</button>
    </div>
  `,
})

export class UserComponent {

  constructor(private userService: UserService) {}

  registerUser() {
    const newUser = {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'hashed_password',
    };

    this.userService.registerUser(newUser).subscribe(response => {
      console.log(response);
    });
  }

  getUser() {
    const username = 'john_doe';

    this.userService.getUser(username).subscribe(user => {
      console.log(user);
    });
  }

  updateUser() {
    const username = 'john_doe';
    const updatedUserData = { email: 'john_new@example.com' };

    this.userService.updateUser(username, updatedUserData).subscribe(response => {
      console.log(response);
    });
  }

  deleteUser() {
    const username = 'john_doe';

    this.userService.deleteUser(username).subscribe(response => {
      console.log(response);
    });
  }

}
