## Select Component Example

This example demonstrates how to use the Select primitive to build a fully accessible, custom-styled dropdown using Tailwind CSS. It highlights data binding, custom options, and disabled states.

### `select-demo.component.ts`

```typescript
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

  selectedFramework = signal<string>('angular');

  onValueChange(value: string) {
    this.selectedFramework.set(value);
  }

  getDisplayValue(value: string | null): string {
    if (!value) return 'Select a framework...';
    return this.frameworks.find(f => f.id === value)?.name || 'Select a framework...';
  }
}
```

### `select-demo.component.html`

```html
<div class="max-w-xs mx-auto mt-10">
  <label class="block text-sm font-medium text-slate-700 mb-1" id="select-label">Choose a framework</label>
  
  <!-- 
    The apSelect directive acts as the root of the primitive.
    We pass in the default value and listen for changes.
  -->
  <div apSelect 
       (valueChange)="onValueChange($event)" 
       [defaultValue]="'angular'"
       #select="apSelect"
       class="relative w-full">
       
    <!-- 
      apSelectTrigger binds ARIA roles and keyboard interactions.
      We style it using Tailwind, applying states based on data attributes.
    -->
    <button apSelectTrigger
            aria-labelledby="select-label"
            class="flex items-center justify-between w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:ring-2 data-[state=open]:ring-blue-500 data-[state=open]:border-blue-500 transition-colors">
      <span class="truncate">
        {{ getDisplayValue(select.value()) }}
      </span>
      <svg class="w-4 h-4 text-slate-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!-- 
      apSelectContent defines the structural template that will be rendered 
      in the overlay when the select is opened.
    -->
    <ng-template apSelectContent>
      <div role="listbox" 
           [id]="select.listboxId()"
           aria-labelledby="select-label"
           class="z-50 w-full min-w-[8rem] overflow-hidden bg-white border border-slate-200 rounded-md shadow-lg outline-none mt-1 p-1">
        
        @for (framework of frameworks; track framework.id) {
          <!-- 
            apSelectOption binds ARIA roles, click, and keyboard focus states.
            We use data attributes [data-active], [data-state=selected], and [data-disabled]
            to style the different states of the option.
          -->
          <div apSelectOption
               [value]="framework.id"
               [disabled]="framework.disabled"
               class="relative flex items-center w-full px-8 py-2 text-sm rounded-sm cursor-default select-none outline-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[active]:bg-slate-100 data-[active]:text-slate-900 data-[state=selected]:font-medium transition-colors">
            
            <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
              @if (select.value() === framework.id) {
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
              }
            </span>
            
            <span>{{ framework.name }}</span>
          </div>
        }
        
      </div>
    </ng-template>
  </div>
  
  <p class="mt-4 text-sm text-slate-500 text-center">
    Selected framework: <span class="font-semibold text-slate-900">{{ selectedFramework() }}</span>
  </p>
</div>
```
