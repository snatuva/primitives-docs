import { Component, input } from '@angular/core';

export interface ApiProperty {
  name: string;
  type: string;
  default?: string;
  description: string;
}

@Component({
  selector: 'app-api-table',
  standalone: true,
  templateUrl: './api-table.component.html'
})
export class ApiTableComponent {
  title = input<string>('API Reference');
  properties = input<ApiProperty[]>([]);
}
