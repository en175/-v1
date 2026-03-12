export const WRITER_TABS = [
  { key: 'ai', label: '智能写作助手' },
  { key: 'check', label: '校对检查' },
  { key: 'comment', label: '人工批注' }
];

/* ========== 模块导航 ========== */
export const DOC_SECTIONS = [
  { key: 'sec-header', label: '首部' },
  { key: 'sec-claims', label: '案件受理及程序' },
  { key: 'sec-facts', label: '案件事实及双方主张' },
  { key: 'sec-defense', label: '被申请人答辩及反请求' },
  { key: 'sec-investigation', label: '仲裁庭查明' },
  { key: 'sec-analysis', label: '仲裁庭意见' },
  { key: 'sec-ruling', label: '裁决' }
];

/* ========== 模块感知 AI 推荐任务 ========== */
export const SECTION_AI_PRESETS: Record<string, { key: string; label: string; desc: string }[]> = {
  'sec-header': [
    { key: 'check-party', label: '核验当事人信息', desc: '比对申请书与答辩书中的主体信息' },
    { key: 'gen-header', label: '补全首部格式', desc: '按仲裁委文书规范补全首部信息' }
  ],
  'sec-claims': [
    { key: 'gen-timeline', label: '梳理程序时间轴', desc: '按受理、组庭、开庭节点生成程序段' },
    { key: 'check-amount', label: '核验程序文书', desc: '核验受理通知、组庭通知、送达记录一致性' }
  ],
  'sec-facts': [
    { key: 'list-claims', label: '梳理请求与主张', desc: '结构化申请请求、答辩观点与证据线索' },
    { key: 'quote-evidence', label: '补充证据指向', desc: '为事实段插入证据编号与核心内容' }
  ],
  'sec-defense': [
    { key: 'summarize-defense', label: '归纳答辩反请求', desc: '提取抗辩逻辑与反请求条款' },
    { key: 'compare-claims', label: '对比申辩争点', desc: '逐项对照请求、反请求与证据矛盾点' }
  ],
  'sec-investigation': [
    { key: 'gen-findings', label: '生成查明事实', desc: '综合双方证据生成查明段落' },
    { key: 'check-evidence-chain', label: '检查证据链', desc: '检验查明事实是否有充分证据支撑' }
  ],
  'sec-analysis': [
    { key: 'focus', label: '生成争议焦点', desc: '围绕请求事项提炼争议焦点与审查路径' },
    { key: 'reason', label: '生成裁决理由', desc: '形成"事实-规则-结论"说理段落' },
    { key: 'conflict', label: '检测证据冲突', desc: '扫描金额、时间线、主体信息冲突' }
  ],
  'sec-ruling': [
    { key: 'gen-ruling', label: '生成裁决条款', desc: '根据说理结论生成裁决主文条款' },
    { key: 'check-ruling', label: '检查裁决完整性', desc: '核验裁决条款是否覆盖全部请求' }
  ]
};

export const SECTION_AI_OPTIONS: Record<string, Record<string, { key: string; label: string }[]>> = {
  'sec-analysis': {
    focus: [
      { key: 'pay', label: '货款支付义务' },
      { key: 'interest', label: '利息起算节点' },
      { key: 'penalty', label: '违约金调减标准' }
    ],
    reason: [
      { key: 'support', label: '支持全部请求' },
      { key: 'partial', label: '部分支持请求' },
      { key: 'reject', label: '驳回请求' }
    ],
    conflict: [
      { key: 'amount', label: '金额一致性冲突' },
      { key: 'timeline', label: '时间线倒置冲突' },
      { key: 'subject', label: '主体信息冲突' }
    ]
  },
  'sec-facts': {
    'gen-timeline': [
      { key: 'contract', label: '合同签署至交付' },
      { key: 'payment', label: '付款与催告' }
    ],
    'quote-evidence': [
      { key: 'delivery', label: '交付事实' },
      { key: 'payment-fact', label: '付款事实' }
    ]
  }
};

/* 通用 AI 任务（不随模块切换） */
export const AI_COMMON_ACTIONS = [
  { key: 'focus', label: '生成争议焦点', desc: '围绕请求事项提炼争议焦点与审查路径' },
  { key: 'quote', label: '生成证据引用段落', desc: '按主张输出事实+证据悬浮脚注' },
  { key: 'conflict', label: '检测证据冲突', desc: '扫描金额、时间线、主体信息冲突' },
  { key: 'reason', label: '生成裁决理由', desc: '形成"事实-规则-结论"说理段落' }
];

export const AI_PRESET_ACTIONS = AI_COMMON_ACTIONS;

export const AI_PRESET_OPTIONS: Record<string, { key: string; label: string }[]> = {
  focus: [
    { key: 'pay', label: '货款支付义务' },
    { key: 'interest', label: '利息起算节点' },
    { key: 'penalty', label: '违约金调减标准' }
  ],
  quote: [
    { key: 'pay', label: '货款支付请求' },
    { key: 'quality', label: '质量抗辩' },
    { key: 'penalty', label: '违约金争议' }
  ],
  conflict: [
    { key: 'amount', label: '金额一致性冲突' },
    { key: 'timeline', label: '时间线倒置冲突' },
    { key: 'subject', label: '主体信息冲突' }
  ],
  reason: [
    { key: 'support', label: '支持全部请求' },
    { key: 'partial', label: '部分支持请求' },
    { key: 'reject', label: '驳回请求' }
  ]
};

export const AI_PRESET_RESPONSES: Record<string, Record<string, string>> = {
  focus: {
    pay: '争议焦点建议：1）申请人是否已完成合同项下供货义务；2）被申请人拒付是否具备合同或法定依据；3）逾期付款责任承担范围如何确定。',
    interest: '争议焦点建议：1）利息起算日应以约定付款期限届满日还是催告日计算；2）申请日期与合同日期矛盾是否影响起算逻辑；3）利息计算区间是否与证据一致。',
    penalty: '争议焦点建议：1）违约金条款效力是否成立；2）约定比例是否明显高于实际损失；3）是否需要基于行业利润率与损失证据进行调减。'
  },
  quote: {
    pay: '证据引用段落：申请人提交《购销合同》与《发货签收回执》能够相互印证其已完成交付义务，且《对账邮件》进一步确认应付货款余额。故对货款支付请求具备事实基础。',
    quality: '证据引用段落：被申请人以《质量异议说明》主张型号不符，但其提交时间与签收后异议期限是否一致仍需复核。现有材料尚不足以完全否定申请人履约事实。',
    penalty: '证据引用段落：合同违约条款明确约定违约金计算方式，同时被申请人提交调减意见及行业利润率材料。建议在确认实际损失后，对违约金幅度作比例审查。'
  },
  conflict: {
    amount: '冲突检测结果：高风险。诉请本金与分项汇总存在 12,000 元差异，建议先补齐计算明细，否则阻断对应段落入稿。',
    timeline: '冲突检测结果：高风险。申请日期早于合同签署日期，时间线倒置，建议先复核日期字段并保留校验记录。',
    subject: '冲突检测结果：高风险。庭审陈述主体与答辩书落款主体不一致，需先完成主体信息统一后再采纳该证据结论。'
  },
  reason: {
    support: '裁决理由建议：在申请人履约事实充分、被申请人抗辩证据不足的前提下，依据合同约定及民法典相关条款，对申请人请求予以支持。',
    partial: '裁决理由建议：对货款本金请求予以支持；对利息及违约金部分，结合起算依据和损失证明程度，酌情部分支持。',
    reject: '裁决理由建议：申请人关键证据在金额与主体信息上存在未消除冲突，尚不足以达到高度盖然性标准，故对相应请求不予支持。'
  },
  'check-party': { _default: '当事人信息核验结果：申请人全称、被申请人全称、法定代表人姓名与申请书一致。建议确认被申请人住所地是否为最新工商登记地址。' },
  'gen-header': { _default: '首部格式已按照仲裁委标准补全：案号居中、当事人信息分段、委托代理人独立段落。' },
  'list-claims': { _default: '请求事项梳理：1）支付货款 1,180,000 元；2）支付违约金 20,000 元；3）仲裁费用由被申请人承担。共 3 项请求。' },
  'check-amount': { _default: '金额核验：合同总价 1,200,000 元，已付 20,000 元，请求金额 1,180,000 元，差额计算一致。' },
  'gen-timeline': { contract: '时间线：2023-12-01 签订合同 → 2023-12-08 交付货物 → 2024-01-05 对账确认 → 2024-01-08 支付 20,000 元 → 2024-01-10 发出催款函 → 2024-01-11 催款函签收。', payment: '付款时间线：约定付款期限 2024-01-07（收货后30日）→ 实际付款 2024-01-08（20,000元）→ 催告 2024-01-10 → 至今未付剩余 1,180,000 元。' },
  'quote-evidence': { delivery: '交付事实证据引用：发货单载明 2023-12-08 发出全部货物，签收回执有被申请人签章确认，载明"货物数量与合同一致，型号待进一步验收"。', 'payment-fact': '付款事实证据引用：银行流水显示 2024-01-08 支付 20,000 元，备注"货款"；对账邮件确认尚欠 1,180,000 元。' },
  'summarize-defense': { _default: '答辩要点归纳：1）质量异议——约 20% 货物型号不符；2）违约金过高请求调减；3）主体责任抗辩——实际签收方为关联公司。' },
  'compare-claims': { _default: '申辩对比：货款请求 vs 质量异议（被申请人庭审已弱化）；违约金请求 vs 调减主张（被申请人未举证"明显过高"）；仲裁费用 vs 主体抗辩（签收回执有被申请人公章）。' },
  'gen-findings': { _default: '查明事实草稿已生成，涵盖合同签订、货物交付、部分付款、催告送达及庭审陈述五个事实节点。' },
  'check-evidence-chain': { _default: '证据链检查：交付→签收→对账→催告 链条完整；质量异议缺少退换货凭证；主体抗辩与签收回执公章矛盾。' },
  'gen-ruling': { _default: '裁决条款草稿：一、支付货款 1,180,000 元；二、支付违约金 20,000 元；三、仲裁费 25,000 元由被申请人承担。' },
  'check-ruling': { _default: '裁决完整性检查：3 项请求均已在裁决主文中回应。建议补充履行期限表述（"自本裁决书送达之日起十五日内"）。' }
};

/* ========== 证据材料 ========== */
export interface EvidenceItem {
  id: string;
  claim: string;
  excerpt: string;
  compliance: 'ok' | 'warning';
  conflictLevel: 'none' | 'medium' | 'high';
  conflictNote: string;
  quoted?: boolean;
  quoteCount?: number;
}

export interface MaterialItem {
  id: string;
  title: string;
  type: string;
  source: string;
  sourceParty: 'applicant' | 'respondent' | 'both' | 'tribunal';
  submittedAt: string;
  fileType?: string;
  fileSize?: string;
  evidenceItems: EvidenceItem[];
}

export const SOURCE_FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'applicant', label: '申请方' },
  { key: 'respondent', label: '被申请方' },
  { key: 'tribunal', label: '仲裁庭' }
];

export const MOCK_MATERIALS: MaterialItem[] = [
  {
    id: 'w1',
    title: '仲裁申请书',
    type: 'doc',
    source: '申请人提交',
    sourceParty: 'applicant',
    submittedAt: '2024-01-15',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    evidenceItems: [
      { id: 'w1-e1', claim: '货款支付请求', excerpt: '申请人主张被申请人应支付货款人民币 1,180,000 元及逾期利息。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w1-e2', claim: '利息起算日主张', excerpt: '申请人主张利息自 2024-01-11 起按全国银行间同业拆借中心公布的贷款市场报价利率计算。', compliance: 'warning', conflictLevel: 'high', conflictNote: '利息起算日早于违约日期 2024-01-10，时间逻辑冲突。' },
      { id: 'w1-e3', claim: '违约金请求', excerpt: '申请人依据合同第 8 条约定，主张被申请人支付逾期付款违约金人民币 20,000 元。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' }
    ]
  },
  {
    id: 'w2',
    title: '被申请人答辩书',
    type: 'doc',
    source: '被申请人提交',
    sourceParty: 'respondent',
    submittedAt: '2024-02-02',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    evidenceItems: [
      { id: 'w2-e1', claim: '质量抗辩主张', excerpt: '被申请人称到货后发现约 20% 货物型号与合同约定不符，已在 3 日内书面通知申请人。', compliance: 'ok', conflictLevel: 'medium', conflictNote: '与签收回执确认的数量和型号记录存在不一致。' },
      { id: 'w2-e2', claim: '违约金调减主张', excerpt: '被申请人认为合同约定违约金过高，请求仲裁庭依据实际损失酌情调减。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w2-e3', claim: '主体责任抗辩', excerpt: '被申请人称实际签收方为其关联公司，非答辩书落款主体，要求明确责任承担方。', compliance: 'warning', conflictLevel: 'high', conflictNote: '答辩书落款主体与庭审陈述主体存在差异，属高风险项。' }
    ]
  },
  {
    id: 'w3',
    title: '购销合同',
    type: 'contract',
    source: '双方签署',
    sourceParty: 'both',
    submittedAt: '2023-12-01',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    evidenceItems: [
      { id: 'w3-e1', claim: '合同价款约定', excerpt: '合同约定货物总价款人民币 1,200,000 元，付款期为收货验收后 30 日内一次性支付。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w3-e2', claim: '违约金条款', excerpt: '合同第 8 条约定：逾期付款的，买方应按未付金额每日万分之五向卖方支付违约金。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w3-e3', claim: '仲裁条款', excerpt: '合同第 12 条约定：因本合同发生争议，双方同意提交北京仲裁委员会仲裁。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' }
    ]
  },
  {
    id: 'w4',
    title: '发货单与签收回执',
    type: 'evidence',
    source: '申请人提交',
    sourceParty: 'applicant',
    submittedAt: '2023-12-08',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    evidenceItems: [
      { id: 'w4-e1', claim: '交付事实', excerpt: '发货单载明 2023 年 12 月 8 日发出全部合同货物，签收回执有被申请人签章确认。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w4-e2', claim: '签收数量确认', excerpt: '签收回执载明"货物数量与合同一致，型号待进一步验收"，被申请人经办人签字。', compliance: 'ok', conflictLevel: 'medium', conflictNote: '签收回执注明"型号待验收"，与被申请人质量抗辩存在关联。' }
    ]
  },
  {
    id: 'w5',
    title: '银行转账记录',
    type: 'evidence',
    source: '申请人提交',
    sourceParty: 'applicant',
    submittedAt: '2024-01-08',
    fileType: 'PDF',
    fileSize: '680 KB',
    evidenceItems: [
      { id: 'w5-e1', claim: '部分付款事实', excerpt: '银行流水显示被申请人于 2024-01-08 支付人民币 20,000 元，备注"货款"。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' }
    ]
  },
  {
    id: 'w6',
    title: '催款函及快递签收记录',
    type: 'evidence',
    source: '申请人提交',
    sourceParty: 'applicant',
    submittedAt: '2024-01-10',
    fileType: 'PDF',
    fileSize: '920 KB',
    evidenceItems: [
      { id: 'w6-e1', claim: '催告送达', excerpt: '催款函载明要求被申请人于 3 日内支付剩余货款 1,180,000 元，快递单显示已签收。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w6-e2', claim: '催告时间节点', excerpt: '催款函发出日为 2024-01-10，签收日为 2024-01-11，与利息起算日关联。', compliance: 'warning', conflictLevel: 'medium', conflictNote: '催告送达日期是否可作为利息起算节点，需结合合同约定判断。' }
    ]
  },
  {
    id: 'w7',
    title: '庭审笔录（第一次）',
    type: 'doc',
    source: '仲裁庭记录',
    sourceParty: 'tribunal',
    submittedAt: '2024-03-01',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    evidenceItems: [
      { id: 'w7-e1', claim: '对账事实确认', excerpt: '庭审中双方确认 2024-01-05 邮件曾就应付款余额进行对账，被申请人认可尚欠货款。', compliance: 'ok', conflictLevel: 'none', conflictNote: '' },
      { id: 'w7-e2', claim: '质量异议庭审陈述', excerpt: '被申请人庭审中称"型号不符仅涉及部分批次，不影响整体使用"，与答辩书立场存在差异。', compliance: 'warning', conflictLevel: 'medium', conflictNote: '被申请人庭审陈述弱化了答辩书中的质量抗辩主张。' },
      { id: 'w7-e3', claim: '主体身份陈述', excerpt: '被申请人庭审陈述"签收方为上海贸易有限公司"，与答辩书落款主体"上海贸易发展有限公司"存在差异。', compliance: 'warning', conflictLevel: 'high', conflictNote: '主体名称不一致，属于高风险必处理项。' }
    ]
  }
];

export const MOCK_AI_MSGS = [
  { id: 'm1', role: 'ai', content: '您好，我是文书写作助手。请选择上方任务卡和预选项，我将按仲裁委文书规范生成建议。' }
];

export const MOCK_EDITOR_CONTENT = `
  <h1 style="text-align: center">裁决书</h1>
  <p data-paragraph-id="p-caseno" style="text-align: center">（2026）京仲裁字第 0321 号</p>

  <h2 data-paragraph-id="sec-header">一、首部</h2>
  <p data-paragraph-id="p-applicant"><strong>申 请 人：</strong>北京华远建设工程有限公司</p>
  <p data-paragraph-id="p-agent1"><strong>住　　所：</strong>北京市朝阳区建国路 88 号</p>
  <p data-paragraph-id="p-respondent"><strong>法定代表人：</strong>刘某某，总经理</p>
  <p data-paragraph-id="p-party4"><strong>委托代理人：</strong>王某，北京京衡律师事务所律师</p>
  <p data-paragraph-id="p-party5"><strong>委托代理人：</strong>陈某，北京京衡律师事务所实习律师</p>
  <p data-paragraph-id="p-party6" style="text-indent: 0">　</p>
  <p data-paragraph-id="p-party7"><strong>被 申 请 人：</strong>北京京城置业有限公司</p>
  <p data-paragraph-id="p-party8"><strong>住　　所：</strong>北京市丰台区南四环西路 66 号</p>
  <p data-paragraph-id="p-party9"><strong>法定代表人：</strong>赵某某，董事长</p>
  <p data-paragraph-id="p-party10"><strong>委托代理人：</strong>孙某，北京德实律师事务所律师</p>
  <p data-paragraph-id="p-party11"><strong>委托代理人：</strong>马某，北京德实律师事务所律师</p>

  <h2 data-paragraph-id="sec-claims">二、案件受理及程序</h2>
  <p data-paragraph-id="p-claim1">本会根据申请人提交的《仲裁申请书》及双方签署的《机电安装工程分包合同》中的仲裁条款，于 2026 年 2 月 6 日受理本案，案号为（2026）京仲裁字第 0321 号。</p>
  <p data-paragraph-id="p-claim2">本案适用《北京仲裁委员会仲裁规则》（2024 修订）。本会依法向双方当事人送达了受理通知、仲裁规则、仲裁员名册、举证通知及开庭通知。</p>
  <p data-paragraph-id="p-claim3">因双方未在规定期限内共同选定首席仲裁员，本会主任依法指定周某某为首席仲裁员，指定张某某、李某某为仲裁员，三位仲裁员于 2026 年 3 月 1 日组成仲裁庭。</p>
  <p data-paragraph-id="p-claim4">仲裁庭于 2026 年 4 月 12 日开庭审理本案。双方当事人及其代理人均到庭参加庭审，对仲裁庭组成和审理程序均未提出异议。</p>

  <h2 data-paragraph-id="sec-facts">三、案件事实及双方主张</h2>
  <p data-paragraph-id="p-fact1">申请人称：其已按照合同约定完成北京市丰台区“京城云庭项目”1#、2#楼机电安装工程施工，并于 2025 年 11 月 30 日通过总包及监理联合验收。被申请人尚欠工程款及质保金共计 4,860,000 元。</p>
  <p data-paragraph-id="p-fact2">申请人最终确认的仲裁请求为：1. 支付工程款 4,200,000 元；2. 支付逾期付款违约金 460,000 元（暂计至 2026 年 1 月 31 日）；3. 本案仲裁费用由被申请人承担。</p>
  <p data-paragraph-id="p-fact3">申请人提交的主要证据包括：合同及补充协议、工程量确认单、结算单、验收记录、付款凭证、往来函件及催款通知等。</p>

  <h2 data-paragraph-id="sec-defense">四、被申请人答辩及反请求</h2>
  <p data-paragraph-id="p-defense1">被申请人答辩称：申请人存在部分工程质量问题，且部分签证手续不完备，申请人主张金额明显过高；即便存在欠款，也应扣减质保期内整改费用后再行支付。</p>
  <p data-paragraph-id="p-defense2">被申请人提出仲裁反请求：1. 请求确认申请人承担整改费用 780,000 元；2. 请求申请人承担因工期延误造成的损失 320,000 元；3. 请求申请人承担反请求仲裁费用。</p>
  <p data-paragraph-id="p-defense3">被申请人提交的主要证据包括：监理整改通知、现场照片、第三方评估意见、付款台账及会议纪要等。</p>
  <p data-paragraph-id="p-defense4">申请人对反请求答辩称：整改事项多为正常维保范围，不属于质量缺陷；工期延误系总包交叉施工及设计变更导致，不应由申请人承担责任。</p>

  <h2 data-paragraph-id="sec-investigation">五、仲裁庭查明</h2>
  <p data-paragraph-id="p-inv1">仲裁庭查明：双方于 2024 年 6 月 18 日签署《机电安装工程分包合同》，合同暂定总价 16,500,000 元，结算方式为“按月进度支付 + 竣工结算 + 质保金留存 5%”。</p>
  <p data-paragraph-id="p-inv2">工程于 2025 年 11 月完成实质施工并投入试运行。监理单位于 2025 年 12 月 5 日出具《工程验收意见》，确认总体达到合同约定质量标准，但列明个别末端设备需持续调试。</p>
  <p data-paragraph-id="p-inv3">庭审后，仲裁庭依申请人申请委托北京建审工程咨询有限公司进行结算复核。复核报告确认已完工程对应价款为 15,980,000 元，尚未支付款项为 4,320,000 元。</p>
  <p data-paragraph-id="p-inv4">对被申请人主张的整改费用，仲裁庭结合整改通知单、签认记录及第三方复核意见，认定其中可归责于申请人的整改费用为 220,000 元，其余证据不足，不予支持。</p>
  <p data-paragraph-id="p-inv5">关于工期延误损失，被申请人未能就损失金额形成完整证据链，亦未证明延误完全归责于申请人，故其该项主张证据不足。</p>

  <h2 data-paragraph-id="sec-analysis">六、仲裁庭意见</h2>
  <p data-paragraph-id="p-focus-title"><strong>（一）合同效力与结算基础</strong></p>
  <p data-paragraph-id="p-focus1">双方签署的合同及补充协议系真实意思表示，内容不违反法律、行政法规强制性规定，合法有效。仲裁庭据此以合同约定及复核结算结果作为本案价款认定基础。</p>
  <p data-paragraph-id="p-focus-title2"><strong>（二）申请人价款请求</strong></p>
  <p data-paragraph-id="p-focus2">结合结算复核报告与双方付款台账，仲裁庭认定被申请人尚应支付价款 4,320,000 元；扣除可归责于申请人的整改费用 220,000 元后，被申请人仍应向申请人支付 4,100,000 元。</p>
  <p data-paragraph-id="p-focus-title3"><strong>（三）违约金及反请求处理</strong></p>
  <p data-paragraph-id="p-focus3">被申请人逾期付款事实成立，应承担相应违约责任。仲裁庭综合合同约定、实际损失及公平原则，将违约金酌定为 280,000 元。被申请人关于工期延误损失的反请求证据不足，不予支持。</p>

  <h2 data-paragraph-id="sec-ruling">七、裁决</h2>
  <p data-paragraph-id="p-ruling1">据此，依据《中华人民共和国民法典》及《北京仲裁委员会仲裁规则》相关规定，仲裁庭裁决如下：</p>
  <p data-paragraph-id="p-ruling2">（一）被申请人北京京城置业有限公司于本裁决书送达之日起十五日内向申请人北京华远建设工程有限公司支付工程款人民币 4,100,000 元；</p>
  <p data-paragraph-id="p-ruling3">（二）被申请人北京京城置业有限公司于本裁决书送达之日起十五日内向申请人北京华远建设工程有限公司支付逾期付款违约金人民币 280,000 元；</p>
  <p data-paragraph-id="p-ruling4">（三）驳回申请人的其他仲裁请求及被申请人的全部仲裁反请求。</p>
  <p data-paragraph-id="p-ruling5">如未按本裁决确定的期间履行给付义务，应依照《中华人民共和国民事诉讼法》有关规定加倍支付迟延履行期间的债务利息。</p>
  <p data-paragraph-id="p-ruling6">本案仲裁费人民币 186,500 元，由申请人承担 26,500 元，被申请人承担 160,000 元。申请人已预交仲裁费，被申请人应于履行上述款项时一并向申请人支付其应承担部分。</p>
  <p data-paragraph-id="p-ruling7" style="text-align: right">首席仲裁员：周某某　仲裁员：张某某　仲裁员：李某某　　二〇二六年六月十八日　北京</p>
`;

export const MOCK_CHECK_GROUPS = [
  {
    id: 'cg1',
    title: '格式与术语',
    items: [
      { id: 'c1', type: 'format', desc: '案号格式建议核对是否与仲裁委登记系统一致', paragraphId: 'p-caseno', paragraphLabel: '案号', severity: 'warning', targetText: '（2026）京仲裁字第 0321 号' },
      { id: 'c2', type: 'format', desc: '裁决主文条款序号与标点需统一', paragraphId: 'p-ruling2', paragraphLabel: '裁决条款第一项', severity: 'error', targetText: '（一）被申请人北京京城置业有限公司' },
      { id: 'c3', type: 'format', desc: '“本会”“仲裁庭”称谓应保持一致', paragraphId: 'p-claim1', paragraphLabel: '案件受理首段', severity: 'warning', targetText: '本会根据申请人提交的《仲裁申请书》' }
    ]
  },
  {
    id: 'cg2',
    title: '逻辑与论证',
    items: [
      { id: 'c4', type: 'logic', desc: '价款计算过程建议补充中间推导表达', paragraphId: 'p-focus2', paragraphLabel: '价款请求', severity: 'error', targetText: '扣除可归责于申请人的整改费用 220,000 元后' },
      { id: 'c5', type: 'logic', desc: '工期延误损失驳回理由可增加因果关系说明', paragraphId: 'p-inv5', paragraphLabel: '查明·延误损失', severity: 'warning', targetText: '未能就损失金额形成完整证据链' },
      { id: 'c6', type: 'logic', desc: '违约金酌定标准建议补充对比依据', paragraphId: 'p-focus3', paragraphLabel: '仲裁庭意见·违约金', severity: 'warning', targetText: '将违约金酌定为 280,000 元' }
    ]
  },
  {
    id: 'cg3',
    title: '证据引用',
    items: [
      { id: 'c7', type: 'evidence', desc: '鉴定委托与鉴定意见形成过程建议补充日期闭环', paragraphId: 'p-inv3', paragraphLabel: '查明·鉴定委托', severity: 'warning', targetText: '委托北京建审工程咨询有限公司进行结算复核' },
      { id: 'c8', type: 'evidence', desc: '整改费用认定依据建议补充证据编号', paragraphId: 'p-inv4', paragraphLabel: '查明·整改费用', severity: 'warning', targetText: '整改通知单、签认记录及第三方复核意见' },
      { id: 'c9', type: 'evidence', desc: '申请人证据清单建议补齐每项证据页码', paragraphId: 'p-fact3', paragraphLabel: '事实·申请人证据', severity: 'error', targetText: '申请人提交的主要证据包括' }
    ]
  }
];

export const COMMENT_FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待处理' },
  { key: 'resolved', label: '已处理' }
];

export const MOCK_COMMENTS = [
  { id: 'cm1', title: '价款计算展示再清晰', content: '建议在“价款请求”段落补一行“应付=复核余额-整改费用”的计算式，便于客户侧快速看懂。', status: 'pending', paragraphId: 'p-focus2', author: '张仲裁员', createdAt: '2026-03-08 14:30', selectedText: '仍应向申请人支付 4,100,000 元' },
  { id: 'cm2', title: '首部信息已接近示范', content: '首部行文顺序与示范一致，建议继续保持“申请人/被申请人”分块排版与全角间隔。', status: 'resolved', paragraphId: 'p-applicant', author: '李秘书', createdAt: '2026-03-07 10:15', selectedText: '北京华远建设工程有限公司' },
  { id: 'cm3', title: '鉴定流程可补充送达', content: '可在鉴定段补充“鉴定意见已向双方送达并组织质证”一句，程序性更完整。', status: 'pending', paragraphId: 'p-inv3', author: '张仲裁员', createdAt: '2026-03-08 15:00', selectedText: '结算复核' },
  { id: 'cm4', title: '反请求驳回理由可再展开', content: '“证据不足”建议加一行说明“未形成损失金额、因果关系、可归责性闭环”。', status: 'pending', paragraphId: 'p-focus3', author: '王首席', createdAt: '2026-03-09 09:20', selectedText: '反请求证据不足，不予支持' },
  { id: 'cm5', title: '裁决费用条款完整', content: '仲裁费承担条款已经完整，可保持“已预交+应返还/补付”的表达方式。', status: 'pending', paragraphId: 'p-ruling6', author: '李秘书', createdAt: '2026-03-09 11:00', selectedText: '本案仲裁费人民币 186,500 元' }
];

export const MOCK_AI_CANDIDATES: Record<string, string> = {
  continue: '仲裁庭进一步认为，被申请人在收到催告后仍未主动履行付款义务，已构成持续违约。',
  rewrite: '仲裁庭审理后认为：申请人履行供货义务事实清楚，被申请人逾期付款事实成立，应承担违约责任。',
  expand: '结合双方提交的合同文本、签收记录及往来邮件，能够形成完整证据链，足以证明申请人已按约履约，被申请人未在约定期限内付款，违约责任应予确认。',
  simplify: '申请人已供货，被申请人逾期未付款，构成违约。',
  summarize: '本案核心结论为：履约事实成立、逾期付款成立、违约责任成立。',
  custom: '根据您的指令，建议将该段调整为"先述事实，再述规则，最后给出裁判结论"的三段式表述。'
};

export const AI_ACTIONS = [
  { key: 'continue', label: '续写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>', color: '#3B82F6' },
  { key: 'rewrite', label: '改写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="M15 5l4 4"/></svg>', color: '#8B5CF6' },
  { key: 'expand', label: '扩写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>', color: '#10B981' },
  { key: 'simplify', label: '精简', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6"/><path d="M4 18h6"/><path d="M4 10h16"/></svg>', color: '#F59E0B' },
  { key: 'summarize', label: '总结', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', color: '#EC4899' }
];
