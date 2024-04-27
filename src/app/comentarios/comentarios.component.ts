import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://img2.rtve.es/im/5805132/?w=900" alt="isFine">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure 
      minus fuga et, nam est voluptatem iste? Alias dignissimos optio, 
      eius suscipit deserunt odit delectus perferendis, nisi, in maiores iusto quia?</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `,
})
export class ComentariosComponent {

};
