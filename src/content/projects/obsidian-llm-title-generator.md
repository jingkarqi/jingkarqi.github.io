---
title: "obsidian-llm-title-generator"
summary: "为 Obsidian 笔记调用兼容 OpenAI 接口生成标题，并把结果直接用于 Markdown 文件重命名。"
publishDate: 2026-04-08
repoUrl: "https://github.com/jingkarqi/obsidian-llm-title-generator"
tech:
  - TypeScript
  - Obsidian Plugin API
  - OpenAI Compatible API
status: active
featured: true
type: original
order: 3
---

这个插件面对的是一个很小但很真实的需求：很多笔记内容已经写完，但标题命名质量不稳定。

## 我做的不是简单生成标题

- 支持当前文件、右键单文件、多选文件和全库批量处理
- 把生成结果直接接进重命名流程，而不是停在建议层
- 给用户保留输入长度和批量策略等控制面

## 这个项目反映的能力

我比较关注 AI 功能是否能接进已有工具的高频动作里。这个插件就是一个典型例子。
