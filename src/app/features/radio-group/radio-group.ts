import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RadioGroupDirective, RadioGroupItemDirective } from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-radio-group',
    standalone: true,
    imports: [
        RadioGroupDirective,
        RadioGroupItemDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    templateUrl: './radio-group.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponent {
    plan = signal<string | null>('pro');

    radioGroupCode = `
<div apRadioGroup [(value)]="plan" class="space-y-2">
    <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="radio" apRadioGroupItem value="free" class="w-4 h-4 accent-primary" />
        <span class="text-sm text-ink">Free</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="radio" apRadioGroupItem value="pro" class="w-4 h-4 accent-primary" />
        <span class="text-sm text-ink">Pro</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="radio" apRadioGroupItem value="team" class="w-4 h-4 accent-primary" />
        <span class="text-sm text-ink">Team</span>
    </label>
</div>`.trim();

    rootApiProperties: ApiProperty[] = [
        { name: '[(value)]', type: 'string | null', default: 'null', description: 'Two-way bound value of the currently selected item.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'Disables every item in the group.' },
        { name: '[orientation]', type: '"horizontal" | "vertical"', default: '"vertical"', description: 'Sets aria-orientation on the group.' },
    ];

    itemApiProperties: ApiProperty[] = [
        { name: '[value]', type: 'string', description: 'Required. The value this item represents within the group.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'Disables this item only.' },
    ];
}
