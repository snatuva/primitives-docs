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
    <ng-template apDialogContent>
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
        <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg sm:rounded-lg">
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
        </div>
    </ng-template>
</div>`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[open]', type: 'boolean', default: 'false', description: 'The controlled open state of the dialog.' },
        { name: '(openChange)', type: 'EventEmitter<boolean>', description: 'Event emitted when the open state changes.' }
    ];
}
