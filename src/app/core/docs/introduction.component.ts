import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-introduction-doc',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="space-y-8 pb-12">
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-white mb-4">Introduction to Angular Primitives</h1>
        <p class="text-xl text-slate-400">
          Unstyled, accessible, signals-first UI components for building high-quality design systems in Angular.
        </p>
      </div>

      <div class="prose prose-invert max-w-none prose-slate">
        <h2 class="text-2xl font-semibold text-white mt-10 mb-4">What is this?</h2>
        <p class="text-slate-300 leading-relaxed mb-6">
          Angular Primitives is an open-source library that provides the complex behavior and accessibility logic for common UI patterns (like Accordions, Dialogs, and Tooltips), but leaves the styling completely up to you.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="p-6 rounded-xl border border-border bg-surface">
            <h3 class="text-lg font-medium text-white mb-2">Unstyled</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Bring your own CSS framework. Whether you use Tailwind CSS, plain CSS, or a CSS-in-JS solution, Angular Primitives adapts to your styling architecture seamlessly.
            </p>
          </div>
          <div class="p-6 rounded-xl border border-border bg-surface">
            <h3 class="text-lg font-medium text-white mb-2">Accessible by Default</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              We handle the complex ARIA attributes, keyboard navigation, and focus management so you don't have to. Fully compliant with WAI-ARIA standards.
            </p>
          </div>
          <div class="p-6 rounded-xl border border-border bg-surface">
            <h3 class="text-lg font-medium text-white mb-2">Signals First</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Built from the ground up for Angular v21+ using Signals for reactive state. Say goodbye to ExpressionChangedAfterItHasBeenChecked errors!
            </p>
          </div>
          <div class="p-6 rounded-xl border border-border bg-surface">
            <h3 class="text-lg font-medium text-white mb-2">SSR Safe</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Fully isomorphic out of the box. No hydration mismatches or window-not-defined errors during server-side rendering.
            </p>
          </div>
        </div>
        
        <h2 class="text-2xl font-semibold text-white mt-12 mb-4">Getting Started</h2>
        <p class="text-slate-300 mb-6">Check out the components in the sidebar to see how they work. Below is a quick peek at the Dialog primitive:</p>
        
        <a routerLink="/dialog" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-white">
          Explore the Dialog Component
        </a>
      </div>
    </div>
  `,
})
export class IntroductionDocComponent { }
