import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import {
    DialogDirective,
    DialogTriggerDirective,
    DialogContentDirective,
    DialogCloseDirective,
    DialogTitleDirective,
    DialogDescriptionDirective
} from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [
        DialogDirective,
        DialogTriggerDirective,
        DialogContentDirective,
        DialogCloseDirective,
        DialogTitleDirective,
        DialogDescriptionDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    styleUrls: ['./dialog.scss'],
    templateUrl: './dialog.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
    dialogCode = `
<div apDialog>
    <button apDialogTrigger class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
        Open Dialog
    </button>
    <dialog apDialogContent class="panel">
        <h2 apDialogTitle class="text-lg font-semibold text-ink">Edit profile</h2>
        <p apDialogDescription class="text-sm text-ink-muted">
            Make changes to your profile here. Click save when you're done.
        </p>
        <div class="flex justify-end gap-3 mt-4">
            <button apDialogClose class="px-4 py-2 bg-transparent border border-border text-ink-muted hover:text-ink hover:bg-surface-hover rounded transition-colors focus:ring-2 focus:ring-primary/30 focus:outline-none">
                Cancel
            </button>
            <button apDialogClose class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                Save changes
            </button>
        </div>
    </dialog>
</div>`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[open]', type: 'boolean', default: 'false', description: 'The controlled open state of the dialog.' },
        { name: '(openChange)', type: 'EventEmitter<boolean>', description: 'Event emitted when the open state changes.' },
        { name: '[modal]', type: 'boolean', default: 'true', description: 'Whether the dialog is modal. Modal dialogs trap focus and show a backdrop.' },
        { name: '[closeOnBackdropClick]', type: 'boolean', default: 'true', description: 'Whether clicking the backdrop closes the dialog.' },
        { name: '[closeOnEscape]', type: 'boolean', default: 'true', description: 'Whether pressing Escape closes the dialog.' },
        { name: '[role]', type: "'dialog' | 'alertdialog'", default: "'dialog'", description: "ARIA role for the dialog panel. Use 'alertdialog' for destructive confirmations." }
    ];

    contentApiProperties: ApiProperty[] = [
        { name: 'host element', type: '<dialog>', description: 'Must be applied to a native <dialog> element. The directive calls showModal()/show()/close() based on the open state.' },
        { name: '::backdrop', type: 'CSS pseudo-element', description: 'Style the modal backdrop with the backdrop: Tailwind variant or a plain ::backdrop CSS rule.' },
        { name: '[data-state]', type: "'open' | 'closed'", description: 'Reflects the current open state for CSS animation hooks.' }
    ];
}
