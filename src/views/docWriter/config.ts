export const WRITER_TABS = [
  { key: 'ai', label: '智能写作助手' },
  { key: 'check', label: '校对检查' },
  { key: 'comment', label: '人工批注' }
];

export const MOCK_MATERIALS = [
  {
    id: 'w1',
    title: '仲裁申请书',
    type: 'doc',
    source: '申请人提交',
    submittedAt: '2024-01-15',
    evidenceItems: [
      {
        id: 'w1-e1',
        claim: '货款支付请求',
        excerpt: '申请人主张：被申请人应支付货款 1,260,000 元及逾期利息。',
        compliance: 'ok',
        conflictLevel: 'none',
        conflictNote: ''
      },
      {
        id: 'w1-e2',
        claim: '利息起算日主张',
        excerpt: '申请人主张利息自 2024-01-15 起计算。',
        compliance: 'warning',
        conflictLevel: 'high',
        conflictNote: '与合同签署日期存在时间线倒置风险。'
      }
    ]
  },
  {
    id: 'w2',
    title: '被申请人答辩书',
    type: 'doc',
    source: '被申请人提交',
    submittedAt: '2024-02-02',
    evidenceItems: [
      {
        id: 'w2-e1',
        claim: '质量抗辩主张',
        excerpt: '被申请人称到货后发现 20% 型号不符，已在 3 日内通知申请人。',
        compliance: 'ok',
        conflictLevel: 'medium',
        conflictNote: '与签收回执数量一致性说明不足。'
      },
      {
        id: 'w2-e2',
        claim: '违约金调减主张',
        excerpt: '被申请人请求将违约金从合同约定比例调减至合理范围。',
        compliance: 'ok',
        conflictLevel: 'none',
        conflictNote: ''
      }
    ]
  },
  {
    id: 'w3',
    title: '庭审笔录',
    type: 'doc',
    source: '仲裁庭记录',
    submittedAt: '2024-03-01',
    evidenceItems: [
      {
        id: 'w3-e1',
        claim: '对账事实确认',
        excerpt: '庭审中双方确认 2024-01-05 邮件曾就应付款余额进行对账。',
        compliance: 'ok',
        conflictLevel: 'none',
        conflictNote: ''
      },
      {
        id: 'w3-e2',
        claim: '主体身份陈述',
        excerpt: '被申请人庭审陈述主体名称与答辩书落款主体存在细微差异。',
        compliance: 'warning',
        conflictLevel: 'high',
        conflictNote: '主体信息不一致，属于高风险必处理项。'
      }
    ]
  }
];

export const MOCK_AI_MSGS = [
  { id: 'm1', role: 'ai', content: '您好，我是文书写作助手。请选择下方任务卡和预选项，我将按仲裁委文书规范生成建议。' }
];

export const AI_PRESET_ACTIONS = [
  { key: 'focus', label: '生成争议焦点', desc: '围绕请求事项提炼争议焦点与审查路径' },
  { key: 'quote', label: '生成证据引用段落', desc: '按主张输出事实+证据悬浮脚注' },
  { key: 'conflict', label: '检测证据冲突', desc: '扫描金额、时间线、主体信息冲突' },
  { key: 'reason', label: '生成裁决理由', desc: '形成“事实-规则-结论”说理段落' }
];

export const AI_PRESET_OPTIONS = {
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

export const AI_PRESET_RESPONSES = {
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
  }
};

export const MOCK_EDITOR_CONTENT = `
  <h1 style="text-align: center">裁决书</h1>
  <p data-paragraph-id="p1">申请人北京科技有限公司与被申请人上海贸易有限公司买卖合同纠纷一案，本委于2024年1月15日受理后，依法组成仲裁庭并完成证据交换。</p>
  <p data-paragraph-id="p2">仲裁庭查明：双方于2023年12月1日签订《购销合同》，约定价款120万元、付款期为收货后30日内。</p>
  <p data-paragraph-id="p3">申请人提交了发货单、签收单和对账邮件，被申请人则主张部分货物型号不符并提出质量异议。</p>
  <p data-paragraph-id="p4">关于争议焦点一，仲裁庭认为被申请人未能充分举证证明其拒付具有合法基础，逾期付款责任应由其承担。</p>
  <p data-paragraph-id="p5">关于争议焦点二，仲裁庭将结合违约金条款约定、履约背景和实际损失综合判断是否需要调减。</p>
`;

export const MOCK_CHECK_GROUPS = [
  {
    id: 'cg1',
    title: '格式与术语一致性',
    items: [
      { id: 'c1', type: 'format', desc: '金额“10000元”建议统一为“10,000.00 元”', paragraphId: 'p2' },
      { id: 'c2', type: 'format', desc: '“本委”与“仲裁庭”混用，建议按段落语境统一称谓', paragraphId: 'p1' }
    ]
  },
  {
    id: 'cg2',
    title: '逻辑与论证完整性',
    items: [
      { id: 'c3', type: 'logic', desc: '争议焦点二缺少“违约金是否显失公平”的裁判标准引述', paragraphId: 'p5' },
      { id: 'c4', type: 'logic', desc: '对被申请人质量抗辩的证据采信理由尚不充分', paragraphId: 'p3' }
    ]
  },
  {
    id: 'cg3',
    title: '证据引用准确性',
    items: [
      { id: 'c5', type: 'evidence', desc: '签收单证据编号应与证据目录保持一致（当前引用“证据4”）', paragraphId: 'p3' },
      { id: 'c6', type: 'evidence', desc: '建议补充对账邮件发送人与收件人的身份说明', paragraphId: 'p2' }
    ]
  }
];

export const COMMENT_FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待处理' },
  { key: 'resolved', label: '已处理' },
  { key: 'logic', label: '逻辑' },
  { key: 'evidence', label: '证据' }
];

export const MOCK_COMMENTS = [
  { id: 'cm1', title: '补充争议焦点二裁判规则', content: '建议补写《民法典》关于违约金调整的裁判依据。', status: 'pending', type: 'logic', paragraphId: 'p5' },
  { id: 'cm2', title: '核对主体简称', content: '“申请人公司”建议统一为“申请人北京科技有限公司”。', status: 'resolved', type: 'format', paragraphId: 'p1' },
  { id: 'cm3', title: '证据编号修正', content: '签收单应对应证据4-2，当前正文写成证据4。', status: 'pending', type: 'evidence', paragraphId: 'p3' },
  { id: 'cm4', title: '补充对账邮件说明', content: '可增加邮件时间、收件人岗位、回复确认信息。', status: 'pending', type: 'evidence', paragraphId: 'p2' }
];

export const MOCK_AI_CANDIDATES = {
  continue: '仲裁庭进一步认为，被申请人在收到催告后仍未主动履行付款义务，已构成持续违约。',
  rewrite: '仲裁庭审理后认为：申请人履行供货义务事实清楚，被申请人逾期付款事实成立，应承担违约责任。',
  expand: '结合双方提交的合同文本、签收记录及往来邮件，能够形成完整证据链，足以证明申请人已按约履约，被申请人未在约定期限内付款，违约责任应予确认。',
  simplify: '申请人已供货，被申请人逾期未付款，构成违约。',
  translate: 'The arbitral tribunal finds that the claimant has performed the delivery obligations, while the respondent failed to make payment on schedule and therefore breached the contract.',
  summarize: '本案核心结论为：履约事实成立、逾期付款成立、违约责任成立。',
  check: '建议修订：金额格式统一、术语统一、争议焦点二补充法律依据后再提交合议。',
  custom: '根据您的指令，建议将该段调整为“先述事实，再述规则，最后给出裁判结论”的三段式表述。'
};

export const AI_ACTIONS = [
  { key: 'continue', label: '续写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>', color: '#3B82F6' },
  { key: 'rewrite', label: '改写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="M15 5l4 4"/></svg>', color: '#8B5CF6' },
  { key: 'expand', label: '扩写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>', color: '#10B981' },
  { key: 'simplify', label: '精简', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6"/><path d="M4 18h6"/><path d="M4 10h16"/></svg>', color: '#F59E0B' },
  { key: 'translate', label: '翻译', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', color: '#6366F1' },
  { key: 'summarize', label: '总结', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', color: '#EC4899' },
  { key: 'check', label: '检查拼写', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 15 2 2 4-4"/><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>', color: '#EF4444' }
];
