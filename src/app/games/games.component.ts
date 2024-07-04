import { Component, EventEmitter,Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{ username }}</h3>
  <ul>

  @for (game of games; track game.id) { 
    <!-- el track identifica el id -->
      <li (click)="fav(game.name)"> {{ game.name}}</li>
  }
  </ul>
  
  
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username= '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: "Assassins creed"
    },
    {
      id: 2,
      name: "Sekiro"
    },
    {
      id: 3,
      name: "Elden ring"
    }

  ]
}
