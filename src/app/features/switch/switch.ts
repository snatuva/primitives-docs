import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SwitchDirective } from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-switch',
    standalone: true,
    imports: [
        SwitchDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    templateUrl: './switch.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {
    airplaneMode = signal(false);

    switchCode = `
<label class="inline-flex items-center gap-3 cursor-pointer select-none">
    <input type="checkbox" apSwitch [(checked)]="airplaneMode" class="sr-only" />
    <span class="w-10 h-6 rounded-full transition-colors relative"
          [class.bg-primary]="airplaneMode()"
          [class.bg-border]="!airplaneMode()">
        <span class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
              [class.translate-x-4]="airplaneMode()"></span>
    </span>
    <span class="text-sm text-ink font-medium">Airplane Mode</span>
</label>`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[(checked)]', type: 'boolean', default: 'false', description: 'Two-way bound on/off state of the switch.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'When true, prevents the user from toggling the switch.' },
    ];
}
