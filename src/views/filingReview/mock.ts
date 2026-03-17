import type {
  CaseOverviewItem,
  DecisionSuggestion,
  EvidenceAnchor,
  FilingIssueGroup,
  RuleCheckItem,
  VerifyFieldMeta
} from './config';

export const mockMaterials = [
  {
    id: 'f1',
    title: '仲裁申请书',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    status: 'normal',
    required: true,
    tip: '已提交原件扫描，签章完整',
    previewContent: `仲裁申请书

申请人：北京科技有限公司
住所地：北京市朝阳区某街道101号
法定代表人：王某
统一社会信用代码：91110108MA01A2B3C9

被申请人：上海贸易有限公司
住所地：上海市浦东新区某路200号
法定代表人：赵某

仲裁请求：
一、请求裁决被申请人向申请人支付货款人民币1,180,000.00元；
二、请求裁决被申请人向申请人支付逾期付款违约金人民币20,000.00元；
三、请求裁决本案仲裁费用由被申请人承担。

事实与理由：
2023年12月1日，申请人与被申请人签订《购销合同》（合同编号：BJ2023-1201），约定由申请人向被申请人供应电子元器件一批，总价款人民币1,200,000.00元。

申请人已于2023年12月8日完成全部货物交付，被申请人已签收确认。根据合同约定，被申请人应于验收后30日内支付货款，即最迟应于2024年1月7日付清。

截至申请仲裁之日，被申请人仅支付货款20,000.00元，尚欠货款1,180,000.00元。申请人多次催告，被申请人均未履行付款义务。

综上，申请人依据合同第12条仲裁条款，向贵委提起仲裁。

此致
北京仲裁委员会

申请人：北京科技有限公司（盖章）
2024年1月15日`
  },
  {
    id: 'f2',
    title: '申请人身份证明',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    status: 'normal',
    required: true,
    tip: '营业执照与法定代表人信息一致',
    previewContent: `企业法人营业执照

统一社会信用代码：91110108MA01A2B3C9
名称：北京科技有限公司
类型：有限责任公司
住所：北京市朝阳区某街道101号
法定代表人：王某
注册资本：5000万元人民币
成立日期：2018年03月15日
营业期限：2018年03月15日至长期
经营范围：技术开发、技术咨询、技术服务；
         销售电子产品、计算机软硬件及辅助设备；
         货物进出口、技术进出口。

登记机关：北京市朝阳区市场监督管理局
核准日期：2023年06月20日

━━━━━━━━━━━━━━━━━━━━━━━━━━━

法定代表人身份证明书

兹证明王某为北京科技有限公司法定代表人，
职务为执行董事兼总经理。

特此证明。

北京科技有限公司（盖章）
2024年1月15日`
  },
  {
    id: 'f3',
    title: '被申请人身份信息',
    fileType: 'PDF',
    fileSize: '—',
    status: 'missing',
    required: true,
    previewContent: `【材料缺失提示】

被申请人身份信息材料尚未提交。

需要补充的材料：
1. 被申请人企业营业执照复印件（加盖公章）
2. 被申请人最新工商登记信息（国家企业信用信息公示系统打印件）
3. 被申请人法定代表人信息

缺失影响：
• 无法核验被申请人主体存续状态
• 无法确认被申请人统一社会信用代码准确性
• 可能影响后续文书送达

建议处理：
请申请人尽快补充被申请人最新工商登记信息截图或企业信用报告。`
  },
  {
    id: 'f4',
    title: '仲裁协议/条款',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    status: 'normal',
    required: true,
    tip: '合同第12条约定提交北京仲裁委员会',
    previewContent: `购销合同（节选）

合同编号：BJ2023-1201
签订日期：2023年12月1日
签订地点：北京市

甲方（供方）：北京科技有限公司
乙方（需方）：上海贸易有限公司

……

第十二条 争议解决
12.1 本合同在履行过程中发生的争议，由双方当事人协商解决；
12.2 协商不成的，双方同意将争议提交北京仲裁委员会，按照其届时有效的仲裁规则进行仲裁；
12.3 仲裁裁决是终局的，对双方均有约束力。

第十三条 合同生效
本合同自双方授权代表签字并加盖公章之日起生效。

甲方（盖章）：北京科技有限公司
授权代表（签字）：王某
日期：2023年12月1日

乙方（盖章）：上海贸易有限公司
授权代表（签字）：赵某
日期：2023年12月1日`
  },
  {
    id: 'f5',
    title: '证据清单',
    fileType: 'XLSX',
    fileSize: '856 KB',
    status: 'normal',
    required: false,
    tip: '共10项证据，含银行流水与发货单',
    previewContent: `证据清单

案件名称：北京科技有限公司诉上海贸易有限公司买卖合同纠纷
申请人：北京科技有限公司

┌────┬──────────────┬────────┬─────────────────────────┐
│序号│    证据名称    │  页码  │        证明目的          │
├────┼──────────────┼────────┼─────────────────────────┤
│ 1  │ 购销合同       │ 1-6    │ 证明双方合同关系成立     │
│ 2  │ 发货单         │ 7-9    │ 证明申请人已完成交付     │
│ 3  │ 签收确认单     │ 10-11  │ 证明被申请人已签收货物   │
│ 4  │ 银行转账记录   │ 12-15  │ 证明被申请人仅支付20,000元│
│ 5  │ 对账函         │ 16-17  │ 证明欠款金额1,180,000元  │
│ 6  │ 催款函         │ 18-19  │ 证明申请人已多次催告     │
│ 7  │ 快递签收记录   │ 20     │ 证明催款函已送达         │
│ 8  │ 往来邮件记录   │ 21-25  │ 证明双方沟通过程         │
│ 9  │ 产品质量报告   │ 26-28  │ 证明交付产品符合约定标准 │
│ 10 │ 违约金计算说明 │ 29-30  │ 证明违约金计算依据       │
└────┴──────────────┴────────┴─────────────────────────┘

合计：30页

证据汇总金额：1,180,000.00元（与申请书主张金额存在差异，需复核）`
  },
  {
    id: 'f6',
    title: '授权委托书',
    fileType: 'PDF',
    fileSize: '680 KB',
    status: 'normal',
    required: false,
    tip: '授权事项包含立案与和解权限',
    previewContent: `授权委托书

委托人：北京科技有限公司
住所地：北京市朝阳区某街道101号
法定代表人：王某

受托人：李某
工作单位：北京某律师事务所
执业证号：11101201910XXXXX
联系电话：138-0000-7621
通讯地址：北京市朝阳区某街道101号

委托事项及权限：

一、委托事项
代理委托人与上海贸易有限公司买卖合同纠纷仲裁案件。

二、代理权限（特别授权）
1. 代为申请仲裁、提交证据材料
2. 代为出庭参加仲裁庭审
3. 代为承认、变更、放弃仲裁请求
4. 代为进行和解、调解
5. 代为签收法律文书
6. 代为申请财产保全和证据保全

委托期限：自签署之日起至本案仲裁程序终结。

委托人（盖章）：北京科技有限公司
法定代表人（签字）：王某
日期：2024年1月15日`
  },
  {
    id: 'f7',
    title: '发票开具与寄送凭证',
    fileType: 'JPG',
    fileSize: '—',
    status: 'missing',
    required: false,
    previewContent: `【材料缺失提示】

发票开具与寄送凭证尚未提交。

需要补充的材料：
1. 增值税专用发票复印件
2. 发票寄送快递单号及签收记录
3. 发票签收确认函（如有）

缺失影响：
• 无法核验付款条件是否成就
• 可能影响对"应付款日期"的认定

建议处理：
如申请人主张发票已开具并寄送，请补充相关凭证；
如尚未开具发票，请在申请书中说明原因。`
  }
];

export const mockVerifyData = {
  caseNo: '（2026）京仲裁字第0321号',
  caseType: '买卖合同纠纷',
  filingChannel: '线上立案',
  applicant: '北京科技有限公司',
  applicantCreditCode: '91110108MA01A2B3C9',
  applicantLegalRep: '王某',
  respondent: '上海贸易有限公司',
  respondentLegalRep: '赵某',
  arbitrationClause: '双方因本合同发生争议，提交北京仲裁委员会仲裁',
  court: '北京仲裁委员会',
  clauseValid: '有效（建议复核签署页完整性）',
  claimType: '货款+违约金',
  amount: '1,200,000.00',
  currency: '人民币',
  interestStartDate: '2024-01-11',
  claimDate: '2024-01-15',
  contractSignedDate: '2023-12-01',
  deliveryDate: '2023-12-08',
  defaultDate: '2024-01-10',
  contact: '北京市朝阳区某街道101号',
  postalCode: '100020',
  contactPerson: '李某（委托代理人）',
  contactPhone: '138-0000-7621',
  respondentCreditCode: '91310000MA1K23AB9X'
};

export const mockIssueGroups: FilingIssueGroup[] = [
  {
    id: 'g1',
    title: '材料缺失',
    type: 'missing_material',
    items: [
      {
        id: 'g1_i1',
        type: 'missing_material',
        desc: '缺少被申请人最新工商登记信息（近30天），主体存续状态无法确认',
        severity: 'high',
        fieldKey: 'respondentCreditCode'
      },
      {
        id: 'g1_i2',
        type: 'missing_material',
        desc: '缺少发票寄送凭证，影响付款条件是否成就的判断',
        severity: 'medium',
        fieldKey: 'claimDate'
      }
    ]
  },
  {
    id: 'g2',
    title: '信息不一致',
    type: 'inconsistent_info',
    items: [
      {
        id: 'g2_i1',
        type: 'inconsistent_info',
        desc: '申请书主张金额 120 万，与证据汇总 118 万存在差异',
        severity: 'high',
        fieldKey: 'amount'
      },
      {
        id: 'g2_i2',
        type: 'inconsistent_info',
        desc: '送达地址“101号”与合同“101号A座”不一致，建议统一口径',
        severity: 'medium',
        fieldKey: 'contact'
      }
    ]
  },
  {
    id: 'g3',
    title: '主体资格',
    type: 'subject_error',
    items: [
      {
        id: 'g3_i1',
        type: 'subject_error',
        desc: '被申请人统一社会信用代码末位校验失败，疑似录入错误',
        severity: 'high',
        fieldKey: 'respondentCreditCode'
      },
      {
        id: 'g3_i2',
        type: 'subject_error',
        desc: '申请人名称存在历史简称，建议统一为营业执照全称',
        severity: 'low',
        fieldKey: 'applicant'
      }
    ]
  },
  {
    id: 'g4',
    title: '请求事项',
    type: 'claim_error',
    items: [
      {
        id: 'g4_i1',
        type: 'claim_error',
        desc: '利息起算日早于违约日期，时间逻辑冲突需修正',
        severity: 'medium',
        fieldKey: 'interestStartDate'
      },
      {
        id: 'g4_i2',
        type: 'claim_error',
        desc: '请求事项存在“货款+违约金”与“仅货款”两种表述，需统一',
        severity: 'low',
        fieldKey: 'claimType'
      }
    ]
  }
];

export const mockVerifyFieldMeta: Record<string, VerifyFieldMeta> = {
  caseNo: { status: 'match', note: '与登记系统一致' },
  caseType: { status: 'match', note: '与申请书案由一致' },
  filingChannel: { status: 'match', note: '线上受理流水完整' },
  applicant: { status: 'match', note: '名称与营业执照一致' },
  applicantCreditCode: { status: 'match', note: '通过18位校验' },
  applicantLegalRep: { status: 'match', note: '执照与授权书一致' },
  respondent: { status: 'risk', note: '存在历史简称，建议统一全称' },
  respondentCreditCode: { status: 'risk', note: '末位校验失败，建议复核原件' },
  respondentLegalRep: { status: 'missing', note: '缺少最新工商截图' },
  arbitrationClause: { status: 'match', note: '条款内容明确' },
  court: { status: 'match', note: '机构名称规范' },
  clauseValid: { status: 'risk', note: '签署页扫描件清晰度不足' },
  claimType: { status: 'risk', note: '不同材料口径不一致' },
  amount: { status: 'risk', note: '申请书120万，证据汇总118万' },
  currency: { status: 'match', note: '币种明确为人民币' },
  interestStartDate: { status: 'risk', note: '起算日早于违约日' },
  claimDate: { status: 'match', note: '事实段落可定位' },
  contractSignedDate: { status: 'match', note: '与合同原文一致' },
  deliveryDate: { status: 'match', note: '发货单可回溯' },
  defaultDate: { status: 'match', note: '催告函日期一致' },
  contact: { status: 'risk', note: '地址后缀存在A座差异' },
  postalCode: { status: 'missing', note: '申请书未填写邮编' },
  contactPerson: { status: 'match', note: '代理人信息完整' },
  contactPhone: { status: 'match', note: '联系电话格式正确' }
};

export const mockEvidenceAnchors: Record<string, EvidenceAnchor> = {
  amount: {
    sourceName: '证据汇总表',
    page: 5,
    anchor: '证据汇总-金额统计段',
    snippet: '证据汇总显示应付货款合计为 1,180,000.00 元，与申请书主张金额存在 20,000 元差异。'
  },
  interestStartDate: {
    sourceName: '申请书事实部分',
    page: 3,
    anchor: '事实与理由-利息主张段',
    snippet: '申请人主张自 2024/01/11 起计算利息，但违约事实描述为 2024/01/10 后持续逾期。'
  },
  respondentCreditCode: {
    sourceName: '工商信息截图',
    page: 2,
    anchor: '主体信息-统一社会信用代码',
    snippet: '截图中统一社会信用代码末位与录入值不一致，建议按原件复核后统一。'
  },
  contact: {
    sourceName: '合同首页',
    page: 4,
    anchor: '合同信息-送达地址',
    snippet: '合同记载地址为“101号A座”，申请书填写为“101号”，存在后缀差异。'
  },
  clauseValid: {
    sourceName: '购销合同',
    page: 6,
    anchor: '争议解决条款',
    snippet: '仲裁条款约定明确，但签署页印章边缘模糊，建议补充清晰扫描件。'
  }
};

export const mockRuleChecks: RuleCheckItem[] = [
  {
    id: 'r1',
    title: '诉请本金与分项金额校验',
    level: 'high',
    result: 'hit',
    formula: '诉请本金(1,260,000) - 明细汇总(1,248,000) = 12,000',
    conclusion: '差异 12,000 元，超过金额容差阈值 5,000 元，需补充分项计算说明。',
    relatedFields: ['amount']
  },
  {
    id: 'r2',
    title: '申请日期与合同签署日期先后校验',
    level: 'medium',
    result: 'hit',
    formula: '申请日期(2024/01/15) < 合同签署日期(2024/01/20)',
    conclusion: '时间顺序异常，申请日期早于合同签署日期，建议复核合同日期或申请日期录入。',
    relatedFields: ['claimDate', 'signDate']
  },
  {
    id: 'r3',
    title: '违约日与利息起算日间隔校验',
    level: 'medium',
    result: 'no_hit',
    formula: '利息起算日(2024/01/15) - 首次违约日(2024/01/10) = 5天',
    conclusion: '间隔天数处于规则阈值（0-7天）内，本条未触发风险。',
    relatedFields: ['defaultDate', 'interestStartDate']
  }
];

export const mockCaseOverview: CaseOverviewItem[] = [
  {
    label: '案由概览',
    value: '申请人主张其已完成合同项下交付义务，被申请人未按约支付工程价款，遂依据仲裁条款提请仲裁。',
    tone: 'neutral'
  },
  {
    label: '合同约定',
    value: '双方在《机电安装工程分包合同》中约定，因合同履行发生争议提交北京仲裁委员会仲裁，合同并约定付款节点及违约责任。',
    tone: 'neutral'
  },
  {
    label: '申请主张',
    value: '请求裁决被申请人支付工程款、逾期付款违约金并承担仲裁费用。',
    tone: 'neutral'
  },
  {
    label: '争议核心',
    value: '争议集中于未付款项金额口径、整改费用扣减范围及违约金标准是否应予调整，尚需结合在卷证据作进一步核验。',
    tone: 'neutral'
  }
];

export const mockDecisionSuggestion: DecisionSuggestion = {
  result: '建议退回补正',
  tone: 'warning',
  summary: '当前案件具备继续审核基础，但主体信息与请求金额存在实质性缺口，直接通过立案风险较高。',
  reasons: [
    '被申请人最新工商登记信息缺失，主体存续状态尚未完成核验。',
    '申请书主张金额与证据汇总金额不一致，需先统一口径。',
    '送达地址和利息起算时间存在冲突，影响后续送达与审查准确性。'
  ],
  nextStep: '建议先退回补正，要求补齐主体材料并统一金额、地址、时间字段后再提交。'
};
