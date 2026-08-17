import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Header],
  template: `
    <app-header />
    <main>
    <router-outlet/>
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
    }
  `]
})
export class App implements OnInit {
  protected readonly title = signal('first-project');

  constructor() {
    console.log('App component initialized');
  }

  ngOnInit() {
    console.log('App component ngOnInit called');
  }
}
