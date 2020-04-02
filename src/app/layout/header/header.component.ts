import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {
  }

  /**
   * Animação do header.
   ** Ao rolar o scroll para baixo o header some.
   ** Ao rolar o scroll para cima o header aparece.
   */
  headerAnimation() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-t").style.top = "0";
      } else {
        document.getElementById("navbar-t").style.top = "-56px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
}

