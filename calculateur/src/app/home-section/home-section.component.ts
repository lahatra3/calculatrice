import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  input!: string | number;
  output!: number;
  firstLine: Array<number> = [1, 2, 3];
  secondLine: Array<number> = [4, 5, 6];
  thirdLine: Array<number> = [7, 8, 9]

  constructor() { }

  ngOnInit(): void {
    this.input = "0";
    this.output = 0;
  }

  onGetValue(valeur: number|string): void {
    this.input = valeur;
  }

}
