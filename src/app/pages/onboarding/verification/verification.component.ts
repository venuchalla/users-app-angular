import { Component, inject, OnInit, signal } from '@angular/core';
import { FlowService } from '../flow/flow.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verifiation',
  imports: [FormsModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss',
})
export class VerificationComponent implements OnInit{
 private flow = inject(FlowService);
 
  prefs = signal<Record<string, any>>({
    emailNotifs: true, pushNotifs: false, marketing: false,
    theme: 'system', digest: 'weekly'
  });
 
  notifications = [
    { key: 'emailNotifs', label: 'Email notifications', desc: 'Receive updates via email' },
    { key: 'pushNotifs', label: 'Push notifications', desc: 'Browser push notifications' },
    { key: 'marketing', label: 'Product updates', desc: 'News, tips and feature announcements' }
  ];
 
  themes = [
    { value: 'light', label: '☀️ Light' },
    { value: 'dark', label: '🌙 Dark' },
    { value: 'system', label: '💻 System' }
  ];
 
  ngOnInit() {
    const saved = this.flow.getFormData('preferences');
    if (saved && Object.keys(saved).length) this.prefs.set(saved as any);
  }
 
  toggle(key: string) {
    this.prefs.update(p => ({ ...p, [key]: !p[key] }));
  }
 
  setTheme(value: string) { this.prefs.update(p => ({ ...p, theme: value })); }
  setPref(key: string, value: any) { this.prefs.update(p => ({ ...p, [key]: value })); }
 
  next() { this.flow.goNext(this.prefs() as any); }
  back() { this.flow.goBack(); }
  skip() { this.flow.goNext(); }
}
