import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <ul>

  @for (game of games; track game.id) { 
    <!-- el track identifica el id -->
      <li> {{ game.name}}</li>
  }
  </ul>
  
  
  `,
  styles: ``
})
export class GamesComponent {

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
