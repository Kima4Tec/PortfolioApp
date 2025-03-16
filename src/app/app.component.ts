import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  template: `
  <main class="main">
  <header>
<nav>
  <ul>
    <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
    <li><a routerLink="/profile" routerLinkActive="active">Profil</a></li>
    <li><a routerLink="/contact" routerLinkActive="active">Kontakt</a></li>
  </ul>
</nav>
</header>
  </main>
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioApp';
}
