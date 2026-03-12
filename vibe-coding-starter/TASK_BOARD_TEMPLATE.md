# 当前任务板

## 当前目标

四个核心模块已完成深度优化，当前目标是把跨模块交互与文档体系沉淀为可复用标准，支撑持续演示与研发承接。

## 模块完成度

| 模块 | 路由 | 完成度 | 上轮主要改动 |
| --- | --- | --- | --- |
| 立案审核 | `/filing-review` | 95% | 材料清单点击预览、字段核验与建议结论 |
| 智能阅卷 | `/dossier-reading` | 95% | 卷宗材料预览弹窗、请求要件与抗辩联读 |
| 文书写作助手 | `/doc-writer` | 97% | 证据直接插入、校对/批注联动、Word 导入导出、证据材料文件预览弹窗 |
| 文书审核 | `/doc-review` | 97% | 正文同源、编辑器导航条、庭审记录提取三模块弹窗、材料文件预览、评分与建议真实化 |

## 下一轮待做任务

| ID | 任务 | 优先级 | 状态 |
| --- | --- | --- | --- |
| T1 | 抽象通用“文件预览弹窗”组件（DocWriter/DocReview 复用） | P0 | 待启动 |
| T2 | 文书审核三大弹窗增加可折叠结构与证据编号映射 | P1 | 待启动 |
| T3 | 各模块视觉一致性走查（含 ABP 历史页） | P1 | 待启动 |
| T4 | 打包体积优化（chunk split） | P2 | 待启动 |

## 上轮已完成任务（文书审核+文书写作联动优化）

| 任务 | 涉及文件 |
| --- | --- |
| 文书审核编辑区恢复模块导航 | `docReview/index.vue`、`docReview/components/DocEditor.vue` |
| 文书审核材料列表改文件查看器预览 | `docReview/components/LeftCasePanel.vue` |
| 庭审记录提取三模块弹窗 | `docReview/config.ts`、`docReview/components/LeftCasePanel.vue` |
| 去掉审签辅助看板与定位依赖 | `docReview/components/RightAiAnalysis.vue` |
| 智能评分与审查建议真实化 | `docReview/config.ts` |
| 文书写作助手新增材料文件预览 | `docWriter/components/LeftMaterialPanel.vue` |
| 全项目案号统一 | `docWriter/config.ts`、`docReview/config.ts`、`filingReview/mock.ts`、`dossierReading/mock.ts` |

## 暂不处理

- AI 直接给出裁判结论
- 真实接口接入
- 权限和埋点系统
- 服务端鉴权和审计日志

## 风险

- mock 数据需持续保持专业自洽
- 当前 `npm run build:netlify` 可通过，但仍有 chunk size warning
