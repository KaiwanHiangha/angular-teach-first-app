import { Component } from '@angular/core';
import {Card} from './card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  
  get sorted(): Card[]{
    console.log('access');
    return this.cards.sort((a, b) => b.vote - a.vote); 
  }
  onclick(firstname:HTMLInputElement,lastname:HTMLInputElement){
    console.log(firstname.value,lastname.value);
    firstname.value = '';
    lastname.value = '';
    const card = new Card(firstname.value,lastname.value,0)
    this.cards.push(card);
 
  }
}
