import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() back: boolean;
  constructor(pokemonService : PokemonService) {

  }

  ngOnInit(): void {
  }

}
