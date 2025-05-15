import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('bearer')) {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
