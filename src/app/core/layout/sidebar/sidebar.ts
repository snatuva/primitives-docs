import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class SideBar {

}
