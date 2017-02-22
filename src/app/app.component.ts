import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.template.html'
})
export class MainApp {

    @ViewChild(Nav) nav: Nav;

    showAbout() {
        alert('Exemplo :)');
    }

}
