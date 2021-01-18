import { Component, OnInit } from '@angular/core';
import {Hero} from '../Models/hero'
import {Heroes} from '../Models/listaHeroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id: 1, name:"Spider man"}
  heroes = Heroes
  public selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
