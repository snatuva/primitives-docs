import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doc-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './doc-shell.component.html',
})
export class DocShellComponent {
  navItems = [
    { label: 'Introduction', path: '/introduction' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Dialog', path: '/dialog' },
    { label: 'Select', path: '/select' },
    { label: 'Tabs', path: '/tabs' },
    { label: 'Tooltip', path: '/tooltip' }
  ];
}
