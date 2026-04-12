export interface FlowStep {
  id: string;
  currentPage: string;      // route path
  nextPage: string | null;  // null = end of flow
  prevPage: string | null;
  label: string;
  description?: string;
  canSkip?: boolean;
  data?: Record<string, unknown>;
}

export interface FlowConfig {
  flowId: string;
  name: string;
  startPage: string;
  steps: FlowStep[];
}

export interface FlowState {
  currentStepId: string;
  completedSteps: string[];
  formData: Record<string, unknown>;
}