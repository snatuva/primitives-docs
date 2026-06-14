import { Component, signal } from '@angular/core';
import { DocShellComponent } from './core/layout/doc-shell/doc-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocShellComponent],
  template: '<app-doc-shell></app-doc-shell>',
})
export class App {
  title = 'primitives-docs';
}
