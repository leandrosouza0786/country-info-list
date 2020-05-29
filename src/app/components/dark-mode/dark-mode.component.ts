import { DarkModeService } from './dark-mode.service';
import { Component, OnInit } from '@angular/core';
import {  faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  famoon = faMoon;
  darkMode : boolean = true;

  constructor(private darkModeServ : DarkModeService) { }

  ngOnInit(): void {
    this.darkModeServ.preferColorsUser()
  }

  darkModeActivated(){
    let mode = this.darkMode ? 'dark' : 'light'
    this.darkModeServ.darkMode(mode)
  }

}
