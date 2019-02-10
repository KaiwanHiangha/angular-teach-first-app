import { makeBindingParser } from '@angular/compiler';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

export class Card {
    firstname: string;
    lastname: string;
    vote: number;
    constructor(
        firstname: string,
        lastname: string,
        vote: number
    ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.vote = vote;

    }
    get name(): string{
        return this.firstname + ' ' + this.lastname
    }
}

