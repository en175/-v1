export interface MaterialItem {
  id: string;
  title: string;
  type: string;
  pageCount: number;
  source: string;
  updatedAt: string;
  reliability: 'high' | 'medium' | 'low';
  format: string;
  fileSize: string;
  previewContent: string;
}

export interface CaseInfo {
  caseNo: string;
  caseReason: string;
  claimant: string;
  respondent: string;
  currentDispute: string;
  currentRequest: string;
}

export interface CaseSummaryItem {
  label: string;
  value: string;
  span?: 'normal' | 'full';
}

export interface DisputeFocusItem {
  id: string;
  text: string;
  status: 'neutral' | 'warning' | 'danger';
  requestId: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  detail: string;
  requestIds: string[];
  targetElementIds: string[];
  targetFactIds: string[];
  tags: Array<'evidenceWeak' | 'defenseHit' | 'coreFact'>;
}

export interface RequestNavItem {
  id: string;
  title: string;
  requestStatement: string;
  evidenceStrength: 'strong' | 'medium' | 'weak';
  hasDefense: boolean;
  elementCount: number;
  defenseCount: number;
}

export interface EvidenceItem {
  id: string;
  title: string;
  type: string;
  source: string;
  position: string;
  provingPoint: string;
  summary: string;
  anchorId: string;
  strength: 'strong' | 'medium' | 'weak';
}

export interface FactItem {
  id: string;
  title: string;
  eventDate: string;
  content: string;
  evidenceStrength: 'strong' | 'medium' | 'weak';
  evidences: EvidenceItem[];
}

export interface RequestElement {
  id: string;
  title: string;
  description: string;
  status: 'supported' | 'contested' | 'pending';
  facts: FactItem[];
}

export interface DefenseItem {
  id: string;
  targetElementId: string;
  targetLabel: string;
  type: 'request' | 'fact' | 'evidence';
  targetName: string;
  point: string;
  source: string;
  hitLevel: 'high' | 'medium' | 'low';
  content: string;
  evidenceExcerpt: string;
}

export interface RequestWorkbench {
  id: string;
  title: string;
  requestStatement: string;
  reviewHint: string;
  elements: RequestElement[];
  defenses: DefenseItem[];
}

export interface OriginalAnchorText {
  id: string;
  title: string;
  content: string;
}
