import { Component, input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleViewerComponent implements OnInit {
  title = input<string>('');
  description = input<string>('');
  code = input<string>('');
  
  showCode = false;
  highlightedCode = '';

  ngOnInit() {
    this.highlightCode();
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }

  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code());
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  }

  private highlightCode() {
    const Prism = (window as any).Prism;
    if (Prism && this.code()) {
      this.highlightedCode = Prism.highlight(this.code(), Prism.languages.html, 'html');
    } else {
      this.highlightedCode = this.code();
    }
  }
}
