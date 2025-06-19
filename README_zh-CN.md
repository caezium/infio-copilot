<h1 align="center">Obsidian-Infio-Copilot</h1>

**让你的 Obsidian 秒变个人 AI 工作站！**

Infio Copilot 是一款可高度个人定制化的 Obsidian AI 插件，旨在帮助用户在本地工作流中轻松使用各类强大的 AI 大模型，为知识库提供交互式对话、内联编辑、智能补全、全库检索问答等功能。

<a href="README.md" target="_blank"><b>English</b></a>  |  <a href="README_zh-CN.md" target="_blank"><b>中文</b></a>

[Chat with me on Twitter](https://x.com/buyiyouxi)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/felixduan)

## 最新版本
[0.6.15](https://github.com/infiolab/infio-copilot/releases/tag/0.6.15) – 更新聊天视图样式，修复 bug，新增功能（2025年6月18日）

## 最近更新
[0.6.15](https://github.com/infiolab/infio-copilot/releases/tag/0.6.15) 更新聊天视图样式

[0.6.14](https://github.com/infiolab/infio-copilot/releases/tag/0.6.14) 修复搜索视图选中文本错误，修复模型选择错误

[0.6.13](https://github.com/infiolab/infio-copilot/releases/tag/0.6.13) 修复并更新设置迁移

[0.6.12](https://github.com/infiolab/infio-copilot/releases/tag/0.6.12) 修复设置迁移

[0.6.11](https://github.com/infiolab/infio-copilot/releases/tag/0.6.11) 更新设置迁移，优化正则搜索结果，新增崩溃上报（感谢 @travertexs）

[0.6.10](https://github.com/infiolab/infio-copilot/releases/tag/0.6.10) 更新聊天历史视图，新增向量检索视图

[0.6.8](https://github.com/infiolab/infio-copilot/releases/tag/0.6.8) 修复向量嵌入内存泄漏，更新聊天视图样式

[0.6.7](https://github.com/infiolab/infio-copilot/releases/tag/0.6.7) 修复 pdf/md 内容 null byte 错误，修复向量嵌入内存泄漏

[0.6.6](https://github.com/infiolab/infio-copilot/releases/tag/0.6.6) 修复 pdf 内容 null byte 错误

[0.6.5](https://github.com/infiolab/infio-copilot/releases/tag/0.6.5) 修复 openai provider 测试错误

[0.6.4](https://github.com/infiolab/infio-copilot/releases/tag/0.6.4) 新增 siliconflow 批量嵌入功能

[0.6.0](https://github.com/infiolab/infio-copilot/releases/tag/0.6.0) 新增 Infio 内置 MCP 支持，优化启动性能，支持 Infio provider MCP 工具

[0.5.2](https://github.com/infiolab/infio-copilot/releases/tag/0.5.2) 新增 Infio provider，新增 Infio 嵌入模型

[0.5.1](https://github.com/infiolab/infio-copilot/releases/tag/0.5.1) 修复当前文件内容提示

[0.5.0](https://github.com/infiolab/infio-copilot/releases/tag/0.5.0) 增强性能和稳定性，增加 MCP 支持

## 功能特点

| 功能 | 描述 |
|------|------|
| 💬 对话与编辑 | 获取即时 AI 协助，一键应用建议的改进 |
| 📝 智能补全 | 在输入时获取上下文感知的写作建议 |
| ✏️ 内联编辑 | 直接在当前文件中编辑笔记 |
| 🔍 全库对话 | 使用 AI 与整个 Obsidian vault 交互 |
| 🖼️ 图片分析 | 上传并分析来自 vault 或本地系统的图片 |
| ⌨️ 快捷命令 | 创建和管理自定义快捷命令，实现快速操作 |
| 🎯 自定义Mode | 定义具有特定行为的个性化 AI 模式 |
| 🔌 MCP | 管理模型上下文协议集成 |

### 🖋️ 内联编辑

选中文本 → 直接与 AI 讨论 → 一键应用到原段落

![inline-edit](asserts/edit-inline.gif)

### 💬 对话式改写

与单个笔记进行智能对话，轻松修改或重写原文内容

![chat-with-select](asserts/chat-with-select.gif)

### 📝 智能自动补全

输入时获取上下文感知的写作建议

![autocomplte](asserts/autocomplete.gif)

### 🔍 全库问答 (RAG)

针对整个 Vault 提问，跨笔记检索并整合答案

![rag](asserts/rag.gif)

🖼️ **图片识别**

支持 Vault 内或本地图片上传→AI 智能识别并分析（v0.1.7+）

## 开始使用

> **⚠️ 重要提示：安装程序版本要求**
> Infio-Copilot 需要较新版本的 Obsidian 安装程序。如果您遇到插件无法正常加载的问题：
>
> 1. 首先，尝试在 `设置 > 通用 > 检查更新` 中正常更新 Obsidian。
> 2. 如果问题仍然存在，手动更新您的 Obsidian 安装程序：
>
>    - 从 [Obsidian 下载页面](https://obsidian.md/download) 下载最新安装程序
>    - 完全关闭 Obsidian
>    - 运行新的安装程序

1. 打开 Obsidian 设置
2. 导航至"社区插件"并点击"浏览"
3. 搜索 "Infio Copilot" 并点击安装
4. 在社区插件中启用该插件
5. 在插件设置中配置您的 API 密钥
   - SiliconFlow : [SiliconFlow API Keys](https://cloud.siliconflow.cn/account/ak)
   - OpenRouter : [OpenRouter API Keys](https://openrouter.ai/settings/keys)
	 - Alibaba Bailian : [Bailian API Keys](https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key)
   - DeepSeek：[DeepSeek API Keys](https://platform.deepseek.com/api_keys/)
   - OpenAI：[ChatGPT API Keys](https://platform.openai.com/api-keys)
   - Anthropic：[Claude API Keys](https://console.anthropic.com/settings/keys)
   - Gemini：[Gemini API Keys](https://aistudio.google.com/apikey)
   - Groq：[Groq API Keys](https://console.groq.com/keys)
6. 设置快捷键以快速访问：
   - 转到 设置 > 快捷键
   - 搜索 "Infio Copilot"
   - 推荐的快捷键绑定：
     * Infio Copilot: Infio add selection to chat -> cmd + shift + L
     * Infio Copilot: Infio Inline Edit -> cmd + shift + K
![autocomplte](asserts/doc-set-hotkey.png)
7. 如果需要 跟文档聊天 , 需要配置 embedding 模型
	 - 目前之后 SiliconFlow Alibaba Google OpenAI 平台支持嵌入模型

## 反馈与支持
我们重视您的意见，并希望确保您能轻松分享想法和报告问题：

- **错误报告**：如果您遇到任何错误或意外行为，请在我们的 [GitHub Issues](https://github.com/infiolab/infio-copilot/issues) 页面提交问题。请确保包含尽可能多的细节，以帮助我们重现和解决问题。
- **功能请求**：对于新功能想法或改进建议，请使用我们的 [GitHub Discussions - Ideas & Feature Requests](https://github.com/infiolab/infio-copilot/discussions/categories/ideas) 页面。创建新的讨论来分享您的建议。

## 交流
![wx- group](https://github.com/user-attachments/assets/b6b8f982-bca2-4819-8b43-572fefcacf2e)

## 致谢

本项目站在巨人的肩膀上。我们要向以下开源项目表示感谢：

- [obsidian-copilot-auto-completion](https://github.com/j0rd1smit/obsidian-copilot-auto-completion) - 提供自动补全实现和 TypeScript 架构灵感
- [obsidian-smart-composer](https://github.com/glowingjade/obsidian-smart-composer) - 提供聊天/应用 UI 模式和 PgLite 集成示例
- [continue](https://github.com/continuedev/continue) & [cline](https://github.com/cline/cline) - 提供提示工程和 LLM 交互模式
- [pglite](https://github.com/electric-sql/pglite) - 提供对话/向量数据存储和示例代码

## 许可证

本项目采用 [MIT 许可证](LICENSE) 授权。
