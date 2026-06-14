import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SelectDirective, 
  SelectTriggerDirective, 
  SelectContentDirective, 
  SelectOptionDirective 
} from '@snatuva/primitives';

interface Framework {
  id: string;
  name: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [
    CommonModule,
    SelectDirective,
    SelectTriggerDirective,
    SelectContentDirective,
    SelectOptionDirective
  ],
  templateUrl: './select-demo.component.html',
})
export class SelectDemoComponent {
  frameworks: Framework[] = [
    { id: 'angular', name: 'Angular' },
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'svelte', name: 'Svelte' },
    { id: 'solid', name: 'Solid', disabled: true },
  ];

  themes = [
    { id: 'light', name: 'Light Theme' },
    { id: 'dark', name: 'Dark Theme' },
    { id: 'system', name: 'System Default' }
  ];

  selectedFramework = signal<string>('angular');
  selectedTheme = signal<string>('system');

  onValueChange(value: string) {
    this.selectedFramework.set(value);
  }

  onThemeChange(value: string) {
    this.selectedTheme.set(value);
  }

  getDisplayValue(value: string | null): string {
    if (!value) return 'Select a framework...';
    return this.frameworks.find(f => f.id === value)?.name || 'Select a framework...';
  }

  getThemeDisplayValue(value: string | null): string {
    if (!value) return 'Select a theme...';
    return this.themes.find(t => t.id === value)?.name || 'Select a theme...';
  }
}
