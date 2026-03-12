# 仲裁智能化项目 v1

本项目是面向仲裁委办案场景的 B 端 AI 工作台原型，服务售前演示、产品迭代和后续研发承接。

## 项目目标

- 业务目标：把仲裁委办案中的阅卷、立案审核、文书起草与文书审核流程结构化，体现 AI 在真实工作流中的辅助价值
- 演示目标：让客户在 10 分钟内看清"AI 如何帮助秘书、承办人、仲裁员提升效率和判断质量"
- 交付目标：沉淀一套可持续迭代的前端工作台骨架、真实业务文案和可复用样式体系

## 用户与场景

- 目标用户：仲裁秘书、一线承办人、仲裁员
- 高频场景 1：秘书进行结构化阅卷，围绕请求、请求要件、事实、证据、抗辩完成整理
- 高频场景 2：立案审核人员进行材料完整性核验、字段核验、问题归纳和处理决策
- 高频场景 3：仲裁员/秘书撰写裁决书，引用证据材料，AI 辅助续写/改写/检查
- 不做的场景：不做泛化法律咨询产品，不做脱离仲裁委语境的通用 AI 助手

## 四个核心模块（当前状态）

| 模块 | 路由 | 状态 | 说明 |
| --- | --- | --- | --- |
| 立案审核 | `/filing-review` | ✅ 已完成深度优化 | 材料清单点击预览、案件信息核验、问题归纳与建议结论 |
| 智能阅卷 | `/dossier-reading` | ✅ 已完成深度优化 | 请求导航、卷宗材料预览、案件摘要与时间轴、请求要件-事实证据-抗辩对照 |
| 文书写作助手 | `/doc-writer` | ✅ 已完成深度优化 | 7 段模块导航、证据直接插入、校对/批注双向联动、Word 导入导出、证据材料文件预览弹窗（PDF 查看器风格） |
| 文书审核 | `/doc-review` | ✅ 已完成深度优化 | 裁决书正文与写作助手同源、编辑器导航条、案件材料文件预览、庭审记录提取三大模块弹窗、真实化审查建议与评分 |

## 技术栈

- Vue 3 + Vite + Vue Router + TypeScript
- Tiptap（富文本编辑器）
- mammoth（Word 导入解析）+ docx（Word 导出生成）
- 纯 CSS 设计系统（design-tokens + workbench + arbitration-kit）
- 无 UI 框架依赖（非 Element Plus）

## 本地启动

```bash
npm install
npm run dev
# 默认访问 http://localhost:5173/
# 文书写作助手：http://localhost:5173/doc-writer
# 文书审核：http://localhost:5173/doc-review
```

## 关键目录

```text
src/
  views/
    filingReview/      # 立案审核
    dossierReading/    # 智能阅卷
    docWriter/         # 文书写作助手
      index.vue        # 主页面（三栏+直接插入引用+Overlay 高亮+Toast）
      config.ts        # 模块导航、AI 任务、证据材料、校对、批注配置
      mock.ts          # mock 数据导出
      components/
        LeftMaterialPanel.vue     # 手风琴式证据材料面板+提交方筛选+文件预览
        RightPanel.vue            # AI 助手+校对检查+人工批注（双向联动）
        FloatingSelectionToolbar.vue  # 浮动工具栏（5 项 AI+批注）
        AiWritePopover.vue        # AI 自由输入弹窗
        CandidateResultCard.vue   # AI 生成结果卡片
    docReview/         # 文书审核
      index.vue        # 主页面（三栏）
      config.ts        # 审核模块、弹窗内容、评分、建议数据
      components/
        LeftCasePanel.vue         # 案件材料+文件预览+庭审记录提取模块弹窗
        DocEditor.vue             # 审核编辑区（复用 EditorArea）
        RightAiAnalysis.vue       # 模块审查建议+智能分析评分
  components/
    editor/            # EditorArea.vue（Tiptap+模块导航+Overlay 高亮+Word 按钮）
    ToastMessage.vue   # 全局 Toast 消息组件
  layouts/             # WorkbenchLayout.vue（工作台总布局）
  styles/
    design-tokens.css  # 设计变量
    workbench.css      # 通用组件原语
    arbitration-kit.css # 仲裁业务样式
  router/index.ts      # 路由配置
vibe-coding-starter/   # 项目上下文文档（给 AI 衔接用）
PRD/                   # 产品需求文档
```

## 当前状态

- 已完成：立案审核、智能阅卷、文书写作助手、文书审核
- 全局案号已统一：`（2026）京仲裁字第0321号`
- 构建状态：`npm run build:netlify` 可通过（存在 chunk size 提示，不影响功能）
