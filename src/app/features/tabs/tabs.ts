import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
    TabsDirective,
    TabListDirective,
    TabTriggerDirective,
    TabPanelDirective,
} from '@snatuva/primitives';
import { ExampleViewerComponent } from '../../core/components/example-viewer/example-viewer.component';
import { ApiTableComponent, ApiProperty } from '../../core/components/api-table/api-table.component';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [
        TabsDirective,
        TabListDirective,
        TabTriggerDirective,
        TabPanelDirective,
        ExampleViewerComponent,
        ApiTableComponent
    ],
    templateUrl: './tabs.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
    tabsCode = `
<div apTabs class="w-full max-w-md mx-auto">
    <div apTabList class="flex border-b border-border" aria-orientation="horizontal">
        <button apTabTrigger tabId="account" class="px-4 py-2 text-sm font-medium text-ink-muted border-b-2 border-transparent hover:text-ink focus:outline-none focus:ring-2 focus:ring-primary aria-selected:text-ink aria-selected:border-primary">
            Account
        </button>
        <button apTabTrigger tabId="password" class="px-4 py-2 text-sm font-medium text-ink-muted border-b-2 border-transparent hover:text-ink focus:outline-none focus:ring-2 focus:ring-primary aria-selected:text-ink aria-selected:border-primary">
            Password
        </button>
        <button apTabTrigger tabId="team" class="px-4 py-2 text-sm font-medium text-ink-muted border-b-2 border-transparent hover:text-ink focus:outline-none focus:ring-2 focus:ring-primary aria-selected:text-ink aria-selected:border-primary">
            Team
        </button>
    </div>

    <div apTabPanel [value]="'account'" class="px-4 py-3 text-sm text-ink-muted">
        Manage your account settings and set e-mail preferences.
    </div>
    <div apTabPanel [value]="'password'" class="px-4 py-3 text-sm text-ink-muted">
        Change your password here. After saving, you'll be logged out.
    </div>
    <div apTabPanel [value]="'team'" class="px-4 py-3 text-sm text-ink-muted">
        Invite and manage your team members and their permissions.
    </div>
</div>`.trim();

    apiProperties: ApiProperty[] = [
        { name: '[orientation]', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the tab list, used for arrow key navigation.' },
    ];

    tabTriggerProperties: ApiProperty[] = [
        { name: '[tabId]', type: 'string', description: 'Required. A unique identifier matching the corresponding tab panel.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'When true, prevents the tab from being activated.' },
    ];

    tabPanelProperties: ApiProperty[] = [
        { name: '[value]', type: 'string', description: 'Required. A unique identifier matching the corresponding tab trigger\'s tabId.' },
        { name: '[disabled]', type: 'boolean', default: 'false', description: 'When true, marks the panel as disabled.' },
    ];
}
