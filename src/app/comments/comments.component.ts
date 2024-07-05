import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios finales</h3>
    <img src="https://github.com/Ivan93LA.png" />
    <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     Corporis alias eaque, velit ab id sint harum doloremque in tenetur ut error 
     ipsam! Ea mollitia quasi reprehenderit at, 
     vero maxime non.
    </p>
    
  `,
  styles: `
  img {
    width: 100%;
    height: auto;

  }`,
})
export class CommentsComponent {

}
