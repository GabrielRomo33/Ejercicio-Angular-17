import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los Juegos Favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: `
  li{
  cursor: pointer;
}
`
})
export class GamesComponent {
  @Input() username: string = '' //esto indica que puede recibir un parametro llamado username
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){//funcion para mandar el valor del nombre del juego
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Smash'
    },
    {
      id: 2,
      name: 'Fifa'
    },
    {
      id: 3,
      name: 'Guitar'
    }
  ];
}
