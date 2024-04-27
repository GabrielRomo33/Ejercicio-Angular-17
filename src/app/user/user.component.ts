import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Halford'
  isLoggedIn = false
  favGame = '';

  getFavorite(gameName: string){//Metodo para recibir el nombre del juego que se hizo click en la lsita 
    this.favGame = gameName;
  }

  greet(){
    alert('Muchacho Chicho')
  }
};