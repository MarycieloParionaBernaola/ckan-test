import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CkanTestComponent } from './ckan-test/ckan-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CkanTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ckan-test-project';
}
