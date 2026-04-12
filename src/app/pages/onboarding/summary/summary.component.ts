import { Component, computed, inject } from '@angular/core';
import { FlowService } from '../flow/flow.service';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {

   private flow = inject(FlowService);
 
  private profileData = computed(() => this.flow.getFormData('profile') as any);
  private prefData = computed(() => this.flow.getFormData('preferences') as any);
 
  firstName = computed(() => this.profileData()?.firstName || 'there');
  fullName = computed(() => {
    const p = this.profileData();
    return p?.firstName && p?.lastName ? `${p.firstName} ${p.lastName}` : '—';
  });
  email = computed(() => this.profileData()?.email || '—');
  role = computed(() => this.profileData()?.role || '');
  theme = computed(() => {
    const t = this.prefData()?.theme;
    return t ? t.charAt(0).toUpperCase() + t.slice(1) : 'System';
  });
 
  restart() { this.flow.resetFlow(); }
  launch() { alert('Navigating to dashboard!'); }
}
