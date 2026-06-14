import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
    AccordionDirective,
    AccordionItemDirective,
    AccordionTriggerDirective,
    AccordionContentDirective,
} from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [
        AccordionDirective,
        AccordionItemDirective,
        AccordionTriggerDirective,
        AccordionContentDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    styleUrls: ['./accordion.scss'],
    templateUrl: './accordion.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
    accordionCode = `
<div apAccordion type="single" [collapsible]="true" class="w-full max-w-md mx-auto rounded-lg overflow-hidden border border-border">
    <div apAccordionItem itemId="item-1" class="border-b border-border last:border-b-0">
        <button apAccordionTrigger class="w-full flex justify-between items-center px-4 py-3 bg-surface hover:bg-surface/80 text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset data-[state=open]:bg-surface/80">
            What are headless UI primitives?
            <svg class="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </button>
        <div apAccordionContent class="px-4 py-3 bg-background text-slate-400 text-sm overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            Headless primitives provide behavior and accessibility without imposing
            any visual styles. You supply the markup and CSS.
        </div>
    </div>
</div>`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[type]', type: '"single" | "multiple"', default: '"single"', description: 'Determines whether one or multiple items can be opened at the same time.' },
        { name: '[value]', type: 'string[]', default: '[]', description: 'The controlled value of the item(s) to expand.' },
        { name: '[collapsible]', type: 'boolean', default: 'false', description: 'When type is "single", allows closing content when clicking trigger for an open item.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'When true, prevents the user from interacting with the accordion.' },
        { name: '(valueChange)', type: 'EventEmitter<string[]>', description: 'Event emitted when the expanded state changes.' }
    ];
}