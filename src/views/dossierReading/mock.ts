import type {
  CaseInfo,
  ConclusionDraft,
  DecisionMetric,
  FocusNode,
  FocusWorkbench,
  MaterialItem,
  OriginalAnchorText,
  RiskAlert
} from './config';

export const mockMaterials: MaterialItem[] = [
  { id: 'm1', title: '仲裁申请书', type: 'doc', pageCount: 5, source: '申请人', updatedAt: '2024-01-15', reliability: 'high' },
  { id: 'm2', title: '被申请人答辩书', type: 'doc', pageCount: 3, source: '被申请人', updatedAt: '2024-02-02', reliability: 'high' },
  { id: 'm3', title: '证据目录（申请人）', type: 'list', pageCount: 1, source: '申请人', updatedAt: '2024-01-15', reliability: 'medium' },
  { id: 'm4', title: '证据1：购销合同', type: 'evidence', pageCount: 12, source: '双方签署', updatedAt: '2023-12-01', reliability: 'high' },
  { id: 'm5', title: '证据2：发货单与签收回执', type: 'evidence', pageCount: 6, source: '物流系统', updatedAt: '2023-12-08', reliability: 'high' },
  { id: 'm6', title: '证据3：银行转账记录', type: 'evidence', pageCount: 2, source: '银行流水', updatedAt: '2024-02-28', reliability: 'medium' },
  { id: 'm7', title: '证据4：往来邮件与微信记录', type: 'communication', pageCount: 18, source: '双方沟通', updatedAt: '2024-01-20', reliability: 'medium' },
  { id: 'm8', title: '第一次庭审笔录', type: 'transcript', pageCount: 20, source: '仲裁庭', updatedAt: '2024-03-10', reliability: 'high' }
];

export const mockCaseInfo: CaseInfo = {
  caseNo: '（2024）京仲案字第01234号',
  caseReason: '买卖合同纠纷',
  claimant: '北京科技有限公司',
  respondent: '上海贸易有限公司',
  amount: '1,200,000.00 元',
  status: '组庭审理中',
  mediator: '张三（首席）、李四、王五',
  filingDate: '2024-01-15',
  summary: '申请人主张被申请人未按期支付货款，并要求支付违约金。被申请人抗辩称货物存在质量问题，且已过保修期。',
  risks: ['被申请人主体资格可能存在存疑（曾变更名称）', '申请人发货节点与签收节点存在 2 日时间差', '违约金计算期间与付款宽限期条款可能冲突'],
  todos: ['需确认被申请人送达地址与最新年报地址一致', '核对证据 3 原件与扫描件签章一致性', '补充发票开具时间与货款到期时间对应关系']
};

export const mockDecisionMetrics: DecisionMetric[] = [
  {
    id: 'metric_2',
    label: '冲突证据',
    value: '4 条',
    level: 'warning'
  },
  {
    id: 'metric_3',
    label: '可直接采纳结论',
    value: '2 / 5',
    level: 'warning'
  },
  {
    id: 'metric_4',
    label: '程序风险',
    value: '1 项',
    level: 'danger'
  }
];

export const mockFocusNodes: FocusNode[] = [
  {
    id: 'focus_1',
    title: '货款支付义务是否成立',
    request: '请求1：支付货款 1,000,000 元',
    evidenceCoverage: '高（8/9）',
    conflictCount: 1,
    status: 'partial'
  },
  {
    id: 'focus_2',
    title: '逾期利息计算区间是否准确',
    request: '请求2：支付逾期利息 86,000 元',
    evidenceCoverage: '中（5/7）',
    conflictCount: 2,
    status: 'risk'
  },
  {
    id: 'focus_3',
    title: '违约金约定是否应调减',
    request: '请求3：支付违约金 200,000 元',
    evidenceCoverage: '中（6/8）',
    conflictCount: 1,
    status: 'partial'
  }
];

export const mockWorkbench: FocusWorkbench[] = [
  {
    id: 'focus_1',
    title: '货款支付义务是否成立',
    request: '请求1：支付货款 1,000,000 元',
    riskLevel: 'medium',
    pendingChecks: [
      '需核验“收票后十日付款”条款与实际发票送达时间',
      '需确认签收人是否具有收货授权',
      '需确认被申请人提出质量异议的时间点是否在约定期限内'
    ],
    evidenceSnippets: [
      {
        id: 'ev_1',
        title: '购销合同付款条款',
        material: '证据1：购销合同',
        position: '第5页 第3段',
        stance: 'support',
        confidence: 'high',
        content: '合同约定验收通过且收票后十日内付款；逾期按约承担违约责任。',
        anchorId: 'anchor_contract_payment'
      },
      {
        id: 'ev_2',
        title: '发货签收回执',
        material: '证据2：发货单与签收回执',
        position: '第2页 末段',
        stance: 'support',
        confidence: 'high',
        content: '2023-12-08 被申请人仓储部签收，签收数量与合同约定一致。',
        anchorId: 'anchor_delivery_receipt'
      },
      {
        id: 'ev_3',
        title: '质量异议记录',
        material: '被申请人答辩书',
        position: '第2页 第1段',
        stance: 'weaken',
        confidence: 'medium',
        content: '被申请人称到货后发现20%型号不符，并于三日后发函提出异议。',
        anchorId: 'anchor_quality_objection'
      }
    ],
    lawSuggestions: [
      {
        id: 'law_1',
        lawName: '民法典 第五百七十七条',
        hitRule: '一方不履行合同义务应承担继续履行、赔偿损失等责任',
        applicability: 'high'
      },
      {
        id: 'law_2',
        lawName: '民法典 第六百二十六条',
        hitRule: '买受人应按约定支付价款',
        applicability: 'high'
      }
    ],
    draftConclusion: '现有证据足以初步认定货款支付义务成立，但应先核验发票送达节点，避免付款条件争议导致结论被推翻。'
  },
  {
    id: 'focus_2',
    title: '逾期利息计算区间是否准确',
    request: '请求2：支付逾期利息 86,000 元',
    riskLevel: 'high',
    pendingChecks: [
      '需核对宽限期是否受补充协议影响',
      '需确认起算日是否应从“收票后十日”而非“到货后十日”计算'
    ],
    evidenceSnippets: [
      {
        id: 'ev_4',
        title: '利息计算明细',
        material: '证据7：利息计算明细表',
        position: '第1页',
        stance: 'support',
        confidence: 'medium',
        content: '申请人按2024-01-11至2024-02-28计算利息共86,000元。',
        anchorId: 'anchor_interest_table'
      },
      {
        id: 'ev_5',
        title: '邮件付款承诺',
        material: '证据4：往来邮件与微信记录',
        position: '第7页 第2段',
        stance: 'neutral',
        confidence: 'low',
        content: '被申请人财务表示春节前安排付款，但未明确承诺具体日期。',
        anchorId: 'anchor_reconciliation_mail'
      }
    ],
    lawSuggestions: [
      {
        id: 'law_3',
        lawName: '民法典 第五百八十五条',
        hitRule: '约定违约金和损失赔偿可并行审查，明显过高可调减',
        applicability: 'medium'
      }
    ],
    draftConclusion: '利息计算基础尚不稳定，建议先完成付款条件起算节点复核，再输出可采纳结论。'
  },
  {
    id: 'focus_3',
    title: '违约金约定是否应调减',
    request: '请求3：支付违约金 200,000 元',
    riskLevel: 'medium',
    pendingChecks: ['需核验申请人提交的融资成本证据与违约金金额匹配程度'],
    evidenceSnippets: [
      {
        id: 'ev_6',
        title: '违约条款原文',
        material: '证据1：购销合同',
        position: '第9页 第2段',
        stance: 'support',
        confidence: 'high',
        content: '逾期付款超过15日，违约方按合同总价15%支付违约金。',
        anchorId: 'anchor_penalty_clause'
      },
      {
        id: 'ev_7',
        title: '调减抗辩意见',
        material: '被申请人答辩书',
        position: '第3页',
        stance: 'weaken',
        confidence: 'medium',
        content: '被申请人主张违约金明显过高并提交同类交易利润率数据。',
        anchorId: 'anchor_penalty_reduce'
      }
    ],
    lawSuggestions: [
      {
        id: 'law_4',
        lawName: '民法典 第五百八十五条第二款',
        hitRule: '违约金过分高于造成损失的，可请求适当减少',
        applicability: 'high'
      }
    ],
    draftConclusion: '违约金条款有效，但是否调减取决于损失证据与行业利润率对比，建议暂定“部分支持”并待补证。'
  }
];

export const mockOriginalAnchors: OriginalAnchorText[] = [
  {
    id: 'anchor_contract_payment',
    title: '原文片段-付款条件',
    content: '《购销合同》第5条：买受人应于验收合格并收到增值税专用发票后十日内支付对应货款。'
  },
  {
    id: 'anchor_delivery_receipt',
    title: '原文片段-发货签收',
    content: '发货单与签收回执载明：2023年12月8日，被申请人仓储部完成签收，签收人王某，数量与合同约定一致。'
  },
  {
    id: 'anchor_interest_table',
    title: '原文片段-利息明细',
    content: '利息明细表载明：本金 1,000,000 元，按日万分之三，自 2024-01-11 计至 2024-02-28。'
  },
  {
    id: 'anchor_reconciliation_mail',
    title: '原文片段-邮件对账',
    content: '2024年1月5日邮件中，被申请人财务确认应付货款余额 1,000,000 元，并表示春节前安排付款。'
  },
  {
    id: 'anchor_quality_objection',
    title: '原文片段-质量异议',
    content: '被申请人提交《到货检验记录》，主张其中 20% 型号与订单不一致，要求换货后再付款。'
  },
  {
    id: 'anchor_invoice_condition',
    title: '原文片段-发票条件',
    content: '被申请人答辩称合同约定“收票后十日付款”，申请人未在到期前完成发票寄送。'
  },
  {
    id: 'anchor_penalty_clause',
    title: '原文片段-违约条款',
    content: '合同第9条约定：逾期付款超过15日，违约方应按合同总价15%向守约方支付违约金。'
  },
  {
    id: 'anchor_finance_loss',
    title: '原文片段-融资损失',
    content: '申请人提交银行贷款利息流水，显示因应收账款回款延迟新增融资成本 96,500 元。'
  },
  {
    id: 'anchor_penalty_reduce',
    title: '原文片段-调减抗辩',
    content: '被申请人主张违约金已明显高于可能损失，请求参照同类案件水平进行比例调减。'
  },
  {
    id: 'anchor_loss_mitigation',
    title: '原文片段-减损义务',
    content: '被申请人称申请人可通过转售库存降低损失，未及时转售导致损失扩大。'
  }
];

export const mockConclusionDrafts: ConclusionDraft[] = [
  {
    id: 'c1',
    title: '结论1：货款请求',
    content: '建议倾向支持。合同关系及履行事实较完整，唯一需补核发票送达证据。',
    confidence: 'medium',
    references: ['证据1：购销合同', '证据2：发货单与签收回执', '证据4：往来邮件与微信记录'],
    status: 'pending'
  },
  {
    id: 'c2',
    title: '结论2：逾期利息',
    content: '建议暂缓采纳。利息起算点与付款条件存在解释冲突。',
    confidence: 'low',
    references: ['证据7：利息计算明细表', '证据1：购销合同'],
    status: 'pending'
  },
  {
    id: 'c3',
    title: '结论3：违约金',
    content: '建议部分支持。违约条款有效，但幅度可能需调减。',
    confidence: 'medium',
    references: ['证据1：购销合同', '被申请人答辩书', '证据9：融资利息流水'],
    status: 'accepted'
  }
];

export const mockRiskAlerts: RiskAlert[] = [
  {
    id: 'r1',
    type: 'evidence',
    title: '关键证据未闭环',
    suggestion: '发票送达凭证未见原件，建议在证据链中补齐并标注来源。'
  },
  {
    id: 'r2',
    type: 'logic',
    title: '结论与证据存在跳跃',
    suggestion: '利息结论引用了付款承诺邮件，但未体现约定起算条款。'
  },
  {
    id: 'r3',
    type: 'procedure',
    title: '程序风险待核验',
    suggestion: '被申请人主体曾更名，需确认送达主体与营业执照主体一致。'
  }
];

export const mockTraceQueue = [
  { id: 'q1', label: '未被引用关键证据', value: '2 条', level: 'warning' },
  { id: 'q2', label: '低置信结论待复核', value: '1 条', level: 'danger' },
  { id: 'q3', label: '已完成人工确认', value: '4 条', level: 'good' }
];
