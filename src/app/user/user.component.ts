import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "IvanLA";
  isLoggedIn = false
  favGame = '';
  
  gerFavorite (gameName:string) {
    this.favGame = gameName;

  }

  greet(){

    alert("Holaaa")
  }
}

