export const ANALYSIS_METRICS = [
  { key: 'logic', label: '论证逻辑完整度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' },
  { key: 'focus', label: '争议焦点覆盖度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' },
  { key: 'discretion', label: '自由裁量阐释程度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"></path></svg>' },
  { key: 'fact', label: '事实认定归纳度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>' },
  { key: 'standard', label: '裁决文书规范度', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"></path><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"></path><path d="M12 2v6"></path><path d="M12 8a2 2 0 0 1-2 2H6"></path><path d="M12 8a2 2 0 0 0 2 2h4"></path></svg>' }
];

export const MOCK_CASE_SUMMARY = {
  caseNo: '（2026）京仲裁字第0321号',
  parties: '申请人：北京华远建设工程有限公司 / 被申请人：北京京城置业有限公司',
  secretary: '陈晓岚',
  hearingDate: '2026-04-12'
};

export const MOCK_MATERIALS_REVIEW = [
  {
    id: 'r1',
    title: '裁决书（审理稿）v5.docx',
    type: 'docx',
    category: '文书草稿',
    page: 27,
    size: '612KB',
    updatedAt: '2026-06-15 16:20',
    previewText: '本案围绕工程结算余额、整改费用归责、违约金酌定及反请求是否成立展开审查。'
  },
  {
    id: 'r2',
    title: '庭审笔录（2026-04-12）.pdf',
    type: 'pdf',
    category: '庭审材料',
    page: 58,
    size: '3.8MB',
    updatedAt: '2026-04-13 09:10',
    previewText: '审理要点：双方确认合同真实存在与工程已完工；争议集中于整改费用金额、违约金幅度及反请求损失证据。'
  },
  {
    id: 'r3',
    title: '工程结算复核报告.xlsx',
    type: 'xlsx',
    category: '鉴定/复核',
    page: 12,
    size: '324KB',
    updatedAt: '2026-05-28 14:05',
    previewText: '复核结论：已完工程对应价款 15,980,000 元，尚未支付款项 4,320,000 元。'
  },
  {
    id: 'r4',
    title: '监理整改通知与签认记录.jpg',
    type: 'image',
    category: '影像证据',
    page: 3,
    size: '1.2MB',
    updatedAt: '2026-05-10 21:14',
    previewText: '记录整改项分布与签认情况，其中可归责于申请人的整改事项已单独标注。'
  },
  {
    id: 'r5',
    title: '质证录音（关键争点）.mp3',
    type: 'audio',
    category: '庭审音频',
    page: 1,
    size: '6.4MB',
    updatedAt: '2026-04-12 19:10',
    previewText: '录音涵盖“合同效力—实际履行—整改归责—反请求证据链”四组焦点交叉质证。'
  },
  {
    id: 'r6',
    title: '工程验收与试运行视频.mp4',
    type: 'video',
    category: '影像证据',
    page: 1,
    size: '18.7MB',
    updatedAt: '2026-01-06 11:42',
    previewText: '视频显示工程完成后试运行状态，可用于佐证“已实际履行”的客观事实。'
  }
];

export const REVIEW_MODULES = [
  { key: 'coreClaim', label: '核心诉求', paragraphId: 'p-ruling1' },
  { key: 'undisputedFact', label: '无争议事实认定', paragraphId: 'p-inv1' },
  { key: 'justiceFocus', label: '核心争议焦点分析', paragraphId: 'p-focus3' }
];

export const REVIEW_MODULE_DIALOGS = {
  coreClaim: {
    title: '核心诉求',
    bullets: [
      '请求被申请人支付工程款人民币 4,200,000 元',
      '请求被申请人支付逾期付款违约金人民币 460,000 元（暂计至 2026-01-31）',
      '请求被申请人承担全部仲裁费用',
      '反请求部分：被申请人主张整改费 780,000 元及延期损失 320,000 元'
    ]
  },
  undisputedFact: {
    title: '无争议事实认定',
    sections: [
      {
        heading: '合同真实性与仲裁条款无异议',
        content: '双方确认《机电安装工程分包合同》及补充协议真实有效，合同约定争议提交北京仲裁委员会仲裁。',
        quote: '庭审原话：“合同是双方签的，真实性没有争议，仲裁条款我们认可。”'
      },
      {
        heading: '工程已实际完工并投入试运行',
        content: '双方均认可工程已于 2025 年 11 月完成实质施工，监理单位出具验收意见并进入试运行阶段。',
        quote: '庭审原话：“项目已完成并投入试运行，这一点双方没有异议。”'
      },
      {
        heading: '尚存在未支付工程价款',
        content: '双方确认存在未结工程款，仅对具体余额与扣减项目存在争议。',
        quote: '庭审原话：“确实还有款项未结，分歧在于整改费和扣减口径。”'
      },
      {
        heading: '仲裁程序合法且未提出回避',
        content: '双方对仲裁庭组成、证据交换及庭审程序均未提出异议，亦未提出回避申请。',
        quote: '庭审原话：“程序方面没有意见，也不申请回避。”'
      }
    ]
  },
  justiceFocus: {
    title: '核心争议焦点分析',
    focuses: [
      {
        question: '1. 结算余额应如何认定？',
        applicant: {
          view: '申请人主张以复核结算为准，尚欠工程款 4,320,000 元。',
          evidence: [
            '工程结算复核报告：确认已完工程对应价款与未付款余额。',
            '付款台账与对账函：显示被申请人未在约定期限内完成尾款支付。'
          ],
          statement: '“工程量与结算依据都在复核报告里，未付款项有完整台账。”'
        },
        respondent: {
          view: '被申请人主张应先扣减整改费用，申请人请求金额偏高。',
          evidence: [
            '监理整改通知：列明若干整改项目。',
            '现场签认材料：仅部分项目有完整签认链条。'
          ],
          statement: '“有整改费用应先扣减，但具体金额需按签认确认。”'
        },
        conclusion: '仲裁庭采纳“复核余额 + 证据可归责扣减”路径，认定可扣减整改费用 220,000 元。'
      },
      {
        question: '2. 违约金标准是否需要调减？',
        applicant: {
          view: '申请人主张按合同约定继续计算逾期付款违约金。',
          evidence: [
            '合同第 8 条约定违约金计算规则。',
            '催告函及送达凭证：证明被申请人持续逾期。'
          ],
          statement: '“约定明确且已催告，应按合同承担违约责任。”'
        },
        respondent: {
          view: '被申请人主张约定标准偏高，请求仲裁庭酌情调减。',
          evidence: [
            '企业经营压力说明：主张现金流困难。',
            '未提交完整损失对比测算，调减理由证明力度不足。'
          ],
          statement: '“希望结合实际经营情况酌情降低违约金。”'
        },
        conclusion: '仲裁庭综合违约持续时间、损失程度与公平原则，将违约金酌定为 280,000 元。'
      },
      {
        question: '3. 被申请人反请求是否成立？',
        applicant: {
          view: '申请人认为反请求缺乏完整损失证据链，延期非单方原因造成。',
          evidence: [
            '总包交叉施工记录：存在外部工期影响因素。',
            '设计变更通知：显示部分节点非申请人可控。'
          ],
          statement: '“延期与整改并非全部由我方造成，反请求证据不完整。”'
        },
        respondent: {
          view: '被申请人坚持要求承担整改费和延期损失。',
          evidence: [
            '整改通知与会议纪要：证明存在整改事实。',
            '未形成“损失金额—因果关系—可归责性”完整证明闭环。'
          ],
          statement: '“我们有损失，但金额计算和责任比例希望庭上裁量。”'
        },
        conclusion: '仲裁庭支持可核实的整改扣减，反请求其余部分因证据不足不予支持。'
      }
    ]
  }
};

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
    summary: '建议以“诉请金额—结算复核—可扣减项目—最终支持金额”四步结构审查主文，确保裁决金额推导可复核。',
    tips: [
      '主文第一项建议明确“4,320,000 - 220,000 = 4,100,000 元”计算来源',
      '违约金建议继续保留“酌定依据 + 金额结论”双句表达',
      '费用承担条款保留“已预交 + 补付”说明，避免执行争议'
    ]
  },
  undisputedFact: {
    title: '无争议事实认定建议',
    summary: '建议先固化“合同真实、工程完工、存在欠款、程序合法”四项共识事实，再进入争议审查可显著提升说理清晰度。',
    tips: [
      '每项无争议事实后附一条庭审原话，增强可验证性',
      '将“认可事实”与“争议事实”在标题层级上彻底分离',
      '无争议事实建议统一标注来源页码（庭审笔录/复核报告）'
    ]
  },
  justiceFocus: {
    title: '核心争议焦点分析建议',
    summary: '建议采用“申请人主张—被申请人主张—证据支撑—庭审陈述—焦点结论”五段式，完整呈现对抗过程与裁断理由。',
    tips: [
      '焦点一突出“结算复核 + 可归责扣减”的推导闭环',
      '焦点二突出“合同约定 + 公平原则”的违约金酌定依据',
      '焦点三突出“证据链不足”对应“反请求不支持”的裁断逻辑'
    ]
  }
};

export const MOCK_ANALYSIS_RESULTS = [
  { 
    metric: 'logic', 
    score: 93, 
    desc: '裁决已形成“查明—意见—主文”闭环，金额推导路径完整。', 
    detail: '已覆盖结算复核、整改扣减与主文金额衔接，建议补充一行计算式增强执行清晰度。',
    status: 'success' 
  },
  { 
    metric: 'focus', 
    score: 91, 
    desc: '三大争议焦点已覆盖，双方主张和证据对抗关系清晰。', 
    detail: '建议在“反请求不支持”处再补充“损失金额、因果关系、可归责性”三要素说明。',
    status: 'success' 
  },
  { 
    metric: 'discretion', 
    score: 89, 
    desc: '违约金酌定逻辑基本充分，裁量边界表达尚可进一步细化。', 
    detail: '可增加“逾期期间 + 实际损失 + 行业惯例”三项并列说明，提高说服力。',
    status: 'warning' 
  },
  { 
    metric: 'fact', 
    score: 94, 
    desc: '事实认定与庭审笔录、复核报告、整改签认材料总体一致。', 
    detail: '无争议事实可单列小标题并追加庭审原话，可进一步提升文书可读性。',
    status: 'success' 
  },
  { 
    metric: 'standard', 
    score: 92, 
    desc: '案号、裁决事项、履行期限与费用承担条款已符合仲裁文书规范。', 
    detail: '建议将“二〇二六年六月十八日”与落款行距再统一，增强版式一致性。',
    status: 'success' 
  }
];
