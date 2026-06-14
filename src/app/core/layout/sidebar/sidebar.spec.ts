import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideBar } from './sidebar';

describe('SideBar', () => {
    let fixture: ComponentFixture<SideBar>;
    let component: SideBar;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SideBarComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(SideBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render sidebar structure', () => {
        const el = fixture.nativeElement as HTMLElement;
        expect(el.querySelector('.primitives-sidebar')).toBeTruthy();
        expect(el.querySelector('.sidebar-header h3')?.textContent).toContain('Primitives Docs');
        expect(el.querySelector('.sidebar-footer .feedback-link')?.getAttribute('href')).toContain('github.com');
    });

    it('should have the expected nav links', () => {
        const el = fixture.nativeElement as HTMLElement;
        const links = el.querySelectorAll('.sidebar-nav a');
        expect(links.length).toBe(7);
        expect(links[0].textContent).toContain('Introduction');
        expect(links[0].getAttribute('routerLink')).toBe('/introduction');
    });
});