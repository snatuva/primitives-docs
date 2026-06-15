import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CheckboxDirective } from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-checkbox',
    standalone: true,
    imports: [
        CheckboxDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    templateUrl: './checkbox.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
    agreed = signal(false);

    checkboxCode = `
<label class="inline-flex items-center gap-2 cursor-pointer select-none">
    <input type="checkbox" apCheckbox [(checked)]="agreed" class="w-4 h-4 rounded accent-primary" />
    <span class="text-sm text-ink">I agree to the terms and conditions</span>
</label>`.trim();

    // Indeterminate ("select all") example
    items = signal([
        { label: 'Email notifications', checked: true },
        { label: 'SMS notifications', checked: false },
        { label: 'Push notifications', checked: false },
    ]);

    allChecked = computed(() => this.items().every((i) => i.checked));
    someChecked = computed(() => this.items().some((i) => i.checked) && !this.allChecked());

    toggleAll(checked: boolean): void {
        this.items.set(this.items().map((i) => ({ ...i, checked })));
    }

    toggleItem(index: number, checked: boolean): void {
        this.items.update((items) =>
            items.map((item, i) => (i === index ? { ...item, checked } : item))
        );
    }

    indeterminateCode = `
<label class="inline-flex items-center gap-2 cursor-pointer select-none font-medium">
    <input type="checkbox" apCheckbox
           [checked]="allChecked()"
           [indeterminate]="someChecked()"
           (checkedChange)="toggleAll($event)"
           class="w-4 h-4 rounded accent-primary" />
    <span class="text-sm text-ink">Select all</span>
</label>

@for (item of items(); track item.label) {
  <label class="inline-flex items-center gap-2 cursor-pointer select-none ml-6">
      <input type="checkbox" apCheckbox
             [checked]="item.checked"
             (checkedChange)="toggleItem($index, $event)"
             class="w-4 h-4 rounded accent-primary" />
      <span class="text-sm text-ink-muted">{{ item.label }}</span>
  </label>
}`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[(checked)]', type: 'boolean', default: 'false', description: 'Two-way bound checked state.' },
        { name: '[indeterminate]', type: 'boolean', default: 'false', description: 'Shows the mixed/indeterminate visual state. A DOM-only property, applied imperatively.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'When true, prevents the user from toggling the checkbox.' },
    ];
}
