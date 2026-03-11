# 当前任务板

## 当前目标

三个核心模块（立案审核、智能阅卷、文书写作助手）已完成深度优化。文书写作助手已完成第三轮优化（直接插入引用、校对/批注双向联动、Overlay 高亮、飞书风格批注）。下一步重点是文书审核模块优化，以及对已完成模块的持续打磨。

## 模块完成度

| 模块 | 路由 | 完成度 | 上轮主要改动 |
| --- | --- | --- | --- |
| 立案审核 | `/filing-review` | 95% | 材料清单点击预览、✅❌与必填图标换位、真实文件内容 |
| 智能阅卷 | `/dossier-reading` | 95% | 抗辩条数移入上方、角色标签精简、卷宗材料预览弹窗、查看原文真实数据 |
| 文书写作助手 | `/doc-writer` | 95% | **第三轮优化**：证据直接插入（非脚注）、校对/批注卡片点击→文中 Overlay 差异化高亮（红/橙/黄）、批注段落持久标记+双向联动（点击文中→右侧聚焦批注卡片）、去掉引用条数/已引用标签、文件名完整显示、导航条 bug 修复 |
| 文书审核 | `/doc-review` | 20% | 基础骨架，待深度优化 |

## 下一轮待做任务

| ID | 任务 | 优先级 | 状态 |
| --- | --- | --- | --- |
| T1 | 文书审核模块深度优化 | P0 | 待启动 |
| T2 | 文书写作助手持续打磨（批注与选中文本位置精确关联、引用 hover 预览） | P1 | 待继续 |
| T3 | 各模块视觉一致性走查 | P2 | 待启动 |
| T4 | 修复历史 TS 基线问题（npm run build） | P2 | 暂缓 |

## 上轮已完成任务（文书写作助手第三轮优化）

| 任务 | 涉及文件 |
| --- | --- |
| 证据直接插入 + 插入后高亮 5 秒 | `docWriter/index.vue`、`EditorArea.vue`（insertContentAndHighlight） |
| 校对/批注 Overlay 高亮（红/橙/黄） | `EditorArea.vue`（showHighlightOverlay、scrollToCheckParagraph、scrollToCommentParagraph） |
| 批注段落持久标记 + 文中点击→批注卡片 | `EditorArea.vue`、`RightPanel.vue`、`index.vue`（commentParagraphIds、comment-paragraph-click、switchToCommentTab） |
| 证据面板：改名、筛选样式、去掉标签和条数、文件名完整 | `LeftMaterialPanel.vue` |
| 定位失败 Toast | `EditorArea.vue`、`index.vue`（locate-failed） |
| 导航条选中 bug 修复 | `EditorArea.vue`（navScrollLock） |
| ProseMirror 备用查找 | `EditorArea.vue`（tryFindEl 含 view.state.doc.descendants） |
| Cursor MCP 配置 | `~/.cursor/mcp.json` |

## 暂不处理

- AI 直接给出裁判结论
- 真实接口接入
- 权限和埋点系统
- 全局 TS 基线修复（不影响 dev）

## 风险

- 文书审核模块尚为基础骨架，需要尽快补齐
- mock 数据需持续保持专业自洽
- 历史 TS 类型问题仍存在，`npm run build` 不能通过
