import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipContentDirective, TooltipDirective, TooltipTriggerDirective } from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    TooltipDirective,
    TooltipTriggerDirective,
    TooltipContentDirective,
    ExampleViewerComponent,
    ApiTableComponent
  ],
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip {
  tooltipCode = `
<div apTooltip>
    <button apTooltipTrigger class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
        Hover me
    </button>
    <ng-template apTooltipContent [tooltipId]="'my-tooltip-id'">
        <div class="px-3 py-2 bg-ink text-white text-sm rounded shadow-lg">
            This is a helpful tooltip!
        </div>
    </ng-template>
</div>`.trim();

  apiProperties: ApiProperty[] = [
    { name: '[tooltipId]', type: 'string', default: 'undefined', description: 'Unique ID for the tooltip content. Must be provided for ARIA wiring.' },
    { name: '[showDelay]', type: 'number', default: '300', description: 'Delay in ms before showing the tooltip on hover.' },
    { name: '[hideDelay]', type: 'number', default: '150', description: 'Delay in ms before hiding the tooltip on mouse leave.' }
  ];
}
