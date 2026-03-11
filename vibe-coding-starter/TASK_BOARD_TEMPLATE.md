# 当前任务板

## 当前目标

三个核心模块（立案审核、智能阅卷、文书写作助手）已完成深度优化。下一步重点是文书审核模块优化，以及对已完成模块的持续打磨。

## 模块完成度

| 模块 | 路由 | 完成度 | 上轮主要改动 |
| --- | --- | --- | --- |
| 立案审核 | `/filing-review` | 95% | 材料清单点击预览、✅❌与必填图标换位、真实文件内容 |
| 智能阅卷 | `/dossier-reading` | 95% | 抗辩条数移入上方、角色标签精简、卷宗材料预览弹窗、查看原文真实数据 |
| 文书写作助手 | `/doc-writer` | 90% | 裁决书7模块真实内容、证据材料7份、AI预选写作、校对检查跳转定位、飞书风格批注、编辑器白纸溢出修复 |
| 文书审核 | `/doc-review` | 20% | 基础骨架，待深度优化 |

## 下一轮待做任务

| ID | 任务 | 优先级 | 状态 |
| --- | --- | --- | --- |
| T1 | 文书审核模块深度优化 | P0 | 待启动 |
| T2 | 文书写作助手持续打磨（批注与选中文本关联、编辑器体验优化） | P1 | 待继续 |
| T3 | 各模块视觉一致性走查 | P2 | 待启动 |
| T4 | 修复历史 TS 基线问题（npm run build） | P2 | 暂缓 |

## 上轮已完成任务（本轮对话完成的）

| 任务 | 涉及文件 |
| --- | --- |
| 智能阅卷：抗辩条数上移、角色标签精简 | `dossierReading/components/MainTabs.vue` |
| 智能阅卷：卷宗材料预览弹窗 | `dossierReading/components/LeftMaterialPanel.vue`、`config.ts`、`mock.ts` |
| 智能阅卷：查看原文载入真实数据 | `dossierReading/mock.ts` |
| 立案审核：去掉预览按钮、点击文件直接预览 | `filingReview/components/LeftMaterialPanel.vue`、`mock.ts` |
| 立案审核：✅❌与必填图标换位 | `filingReview/components/LeftMaterialPanel.vue` |
| 文书写作助手：裁决书真实内容（7模块分段） | `docWriter/config.ts` |
| 文书写作助手：证据材料扩展到7份 | `docWriter/config.ts` |
| 文书写作助手：去掉左侧统计行 | `docWriter/components/LeftMaterialPanel.vue` |
| 文书写作助手：去掉"不支持自由输入"提示 | `docWriter/components/RightPanel.vue` |
| 文书写作助手：去掉逻辑/证据筛选，保留全部/待处理/已处理 | `docWriter/config.ts` |
| 文书写作助手：校对检查每项新增 paragraphLabel 跳转 | `docWriter/config.ts`、`RightPanel.vue` |
| 文书写作助手：批注重构为飞书风格 | `docWriter/components/RightPanel.vue` |
| 文书写作助手：浮动工具栏新增"批注"按钮 | `docWriter/components/FloatingSelectionToolbar.vue` |
| 文书写作助手：选中文本→创建批注→自动切tab编辑 | `docWriter/index.vue` |
| 文书写作助手：批注支持编辑/删除/标记已解决 | `docWriter/components/RightPanel.vue`、`index.vue` |
| 编辑器白纸溢出修复 | `components/editor/EditorArea.vue`、`styles/workbench.css` |
| 编辑器工具栏精简（去掉分割线和清除格式按钮） | `components/editor/EditorArea.vue` |
| 左侧材料列表去掉冗余 meta | `docWriter/components/LeftMaterialPanel.vue` |

## 暂不处理

- AI 直接给出裁判结论
- 真实接口接入
- 权限和埋点系统
- 全局 TS 基线修复（不影响 dev）

## 风险

- 文书审核模块尚为基础骨架，需要尽快补齐
- mock 数据需持续保持专业自洽
- 历史 TS 类型问题仍存在，`npm run build` 不能通过
