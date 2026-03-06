export const ANALYSIS_METRICS = [
  { key: 'logic', label: '论证逻辑完整度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' },
  { key: 'focus', label: '争议焦点覆盖度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' },
  { key: 'discretion', label: '自由裁量阐释程度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"></path></svg>' },
  { key: 'fact', label: '事实认定归纳度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>' },
  { key: 'standard', label: '裁决文书规范度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"></path><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"></path><path d="M12 2v6"></path><path d="M12 8a2 2 0 0 1-2 2H6"></path><path d="M12 8a2 2 0 0 0 2 2h4"></path></svg>' }
];

export const MOCK_CASE_SUMMARY = {
  caseNo: '（2024）京仲案字第01234号',
  parties: '申请人：北京科技 / 被申请人：上海贸易',
  secretary: '王小明',
  hearingDate: '2024-03-01'
};

export const MOCK_MATERIALS_REVIEW = [
  {
    id: 'r1',
    title: '裁决书草稿_v2.docx',
    type: 'docx',
    category: '文书草稿',
    page: 18,
    size: '356KB',
    updatedAt: '2024-03-03 09:20',
    previewText: '本案争议焦点主要围绕货款支付责任、质量抗辩成立与否及违约金调整标准展开。'
  },
  {
    id: 'r2',
    title: '庭审笔录（第一、二次）.pdf',
    type: 'pdf',
    category: '庭审材料',
    page: 45,
    size: '2.6MB',
    updatedAt: '2024-03-02 18:30',
    previewText: '审理要点：双方确认供货事实，围绕质量异议通知时间与违约金比例发生实质争议。'
  },
  {
    id: 'r3',
    title: '证据目录与页码对照.xlsx',
    type: 'xlsx',
    category: '证据清单',
    page: 6,
    size: '148KB',
    updatedAt: '2024-03-01 16:05',
    previewText: '证据1-1 购销合同；证据2-3 发货签收单；证据4-2 对账邮件；证据6-1 质量异议说明。'
  },
  {
    id: 'r4',
    title: '合同签章页照片.jpg',
    type: 'image',
    category: '影像证据',
    page: 1,
    size: '892KB',
    updatedAt: '2024-02-28 21:14',
    previewText: '可见合同双方盖章位置及签章日期，章体边缘存在轻微模糊。'
  },
  {
    id: 'r5',
    title: '质证录音（第二次庭审）.mp3',
    type: 'audio',
    category: '庭审音频',
    page: 1,
    size: '5.1MB',
    updatedAt: '2024-03-01 19:10',
    previewText: '录音内容涵盖质量异议通知时点、对账确认过程及违约金调减请求。'
  },
  {
    id: 'r6',
    title: '供货验收过程视频.mp4',
    type: 'video',
    category: '影像证据',
    page: 1,
    size: '16.3MB',
    updatedAt: '2024-02-27 11:42',
    previewText: '视频记录了批次货物开箱与抽检过程，可用于交叉核对型号争议。'
  }
];

export const REVIEW_MODULES = [
  { key: 'coreClaim', label: '核心诉求', paragraphId: 'logic' },
  { key: 'undisputedFact', label: '无争议事实认定', paragraphId: 'fact' },
  { key: 'justiceFocus', label: '核心正义焦点分析', paragraphId: 'discretion' },
  { key: 'riskHint', label: '潜在疑点与矛盾提示', paragraphId: 'p3' }
];

export const MOCK_HEARING_RECORDS = [
  {
    id: 'h1',
    title: '第一次庭审',
    date: '2024-02-20',
    modules: [
      { id: 'h1-m1', name: '庭审笔录', detail: '第1-18页' },
      { id: 'h1-m2', name: '举证质证记录', detail: '第19-26页' },
      { id: 'h1-m3', name: '法庭辩论要点', detail: '3条' }
    ]
  },
  {
    id: 'h2',
    title: '第二次庭审',
    date: '2024-03-01',
    modules: [
      { id: 'h2-m1', name: '庭审笔录', detail: '第27-45页' },
      { id: 'h2-m2', name: '补充质证记录', detail: '第46-52页' },
      { id: 'h2-m3', name: '最后陈述纪要', detail: '2条' }
    ]
  }
];

export const MODULE_INSIGHTS = {
  coreClaim: {
    title: '核心诉求审查建议',
    summary: '核对诉请金额口径、请求事项边界与裁判主文一致性，避免超范围裁决。',
    tips: [
      '核对主文金额与请求事项是否一一对应',
      '检查是否遗漏“利息截止日”与“承担方式”表述',
      '确认请求事项排序与审理查明事实一致'
    ]
  },
  undisputedFact: {
    title: '无争议事实认定建议',
    summary: '先行固化双方共同确认事实，减少后续说理冗余并提升裁决结构清晰度。',
    tips: [
      '优先收录双方庭审已明确认可的履约节点',
      '将争议事实与无争议事实分段写明',
      '对来源证据编号进行统一标注'
    ]
  },
  justiceFocus: {
    title: '核心正义焦点分析建议',
    summary: '围绕公平与诚信原则，评估违约责任分配、举证负担与利益衡量是否充分。',
    tips: [
      '补充违约金调减标准与裁量边界',
      '明确质量抗辩未被采信的理由链条',
      '说明责任比例与损失证据之间的对应关系'
    ]
  },
  riskHint: {
    title: '潜在疑点与矛盾提示',
    summary: '对金额、时间线、主体信息进行冲突复核，避免审签后被指出程序或事实瑕疵。',
    tips: [
      '诉请本金与分项汇总存在差异需二次核对',
      '申请日期与合同签署日期先后关系需复核',
      '主体简称与统一社会信用代码应保持一致'
    ]
  }
};

export const REVIEW_USEFUL_TOOLS = [
  { id: 't1', name: '证据一致性核对', value: '3项待复核', level: 'warning' },
  { id: 't2', name: '程序节点完整性', value: '已覆盖', level: 'success' },
  { id: 't3', name: '裁判主文风险', value: '1项高风险', level: 'danger' },
  { id: 't4', name: '审签前清单', value: '剩余2项', level: 'info' }
];

export const MOCK_ANALYSIS_RESULTS = [
  { 
    metric: 'logic', 
    score: 95, 
    desc: '逻辑链条完整，请求权基础引用准确。', 
    status: 'success' 
  },
  { 
    metric: 'focus', 
    score: 88, 
    desc: '主要争议焦点已覆盖，但关于违约金调整的论述略显单薄。', 
    status: 'warning' 
  },
  { 
    metric: 'discretion', 
    score: 92, 
    desc: '自由裁量部分引用了相关指导案例，说理充分。', 
    status: 'success' 
  },
  { 
    metric: 'fact', 
    score: 90, 
    desc: '事实认定部分与庭审笔录一致。', 
    status: 'success' 
  },
  { 
    metric: 'standard', 
    score: 98, 
    desc: '符合裁决书制作规范。', 
    status: 'success' 
  }
];
