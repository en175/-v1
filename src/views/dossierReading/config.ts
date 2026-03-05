export interface DossierTab {
  key: string;
  label: string;
}

export const TABS: DossierTab[] = [
  { key: 'overview', label: '案卷整体概览' },
  { key: 'claims', label: '请求/事实/证据' },
  { key: 'defense', label: '抗辩对抗视图' }
];

export interface MaterialItem {
  id: string;
  title: string;
  type: string;
  pageCount: number;
  source: string;
  updatedAt: string;
  reliability: 'high' | 'medium' | 'low';
}

export interface CaseInfo {
  caseNo: string;
  caseReason: string;
  claimant: string;
  respondent: string;
  amount: string;
  status: string;
  mediator: string;
  filingDate: string;
  summary: string;
  risks: string[];
  todos: string[];
}

export interface DecisionMetric {
  id: string;
  label: string;
  value: string;
  level: 'good' | 'warning' | 'danger';
}

export interface FocusNode {
  id: string;
  title: string;
  request: string;
  evidenceCoverage: string;
  conflictCount: number;
  status: 'clear' | 'partial' | 'risk';
}

export interface EvidenceSnippet {
  id: string;
  title: string;
  material: string;
  position: string;
  stance: 'support' | 'weaken' | 'neutral';
  confidence: 'high' | 'medium' | 'low';
  content: string;
  anchorId: string;
}

export interface LawSuggestion {
  id: string;
  lawName: string;
  hitRule: string;
  applicability: 'high' | 'medium' | 'low';
}

export interface FocusWorkbench {
  id: string;
  title: string;
  request: string;
  riskLevel: 'high' | 'medium' | 'low';
  pendingChecks: string[];
  evidenceSnippets: EvidenceSnippet[];
  lawSuggestions: LawSuggestion[];
  draftConclusion: string;
}

export interface ConclusionDraft {
  id: string;
  title: string;
  content: string;
  confidence: 'high' | 'medium' | 'low';
  references: string[];
  status: 'pending' | 'accepted' | 'rejected';
}

export interface RiskAlert {
  id: string;
  type: 'procedure' | 'evidence' | 'logic';
  title: string;
  suggestion: string;
}

export interface ClaimRequest {
  id: string;
  title: string;
  elements: Array<{ label: string; content: string }>;
  facts: string[];
  evidence: string[];
}

export interface ClaimFocusGroup {
  id: string;
  focus: string;
  requests: ClaimRequest[];
}

export interface ViewpointItem {
  id: string;
  text: string;
  anchorId: string;
}

export interface DefenseFocusGroup {
  id: string;
  focus: string;
  applicantViews: ViewpointItem[];
  respondentViews: ViewpointItem[];
}

export interface OriginalAnchorText {
  id: string;
  title: string;
  content: string;
}
