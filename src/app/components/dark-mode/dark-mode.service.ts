import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private renderHandler: Renderer2;
  private color: string;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderHandler = rendererFactory.createRenderer(null, null);
  }

  activeMode(){
    return this.color
  }

  preferColorsUser() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.color = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  }

  localUserDefault(theme) {
    this.color = theme
    localStorage.setItem('prefer-color', theme)
  }

  loadThemePrefColor() {
    localStorage.getItem('prefer-color') ? this.color = localStorage.getItem('prefer-color') : this.preferColorsUser();
  }

  darkMode(them){
    console.log("here", them)
    this.localUserDefault(them)

    this.renderHandler.addClass(document.body, this.color === 'dark' ? 'dark-mode' : 'light-mode');
    // this.renderHandler.addClass(document.body, this.color)
  }

}
