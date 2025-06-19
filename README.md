<h1 align="center">Infio-Copilot</h1>

**Infio-Copilot is a Cursor-inspired AI assistant for Obsidian that offers smart autocomplete and interactive chat with your selected notes**

<a href="README.md" target="_blank"><b>English</b></a>  |  <a href="README_zh-CN.md" target="_blank"><b>中文</b></a>

## Latest Version
[0.6.15](https://github.com/infiolab/infio-copilot/releases/tag/0.6.15) – Update chat view style, bug fixes, and new features (June 18, 2025)

## Recent Updates
[0.6.15](https://github.com/infiolab/infio-copilot/releases/tag/0.6.15) Update chat view style

[0.6.14](https://github.com/infiolab/infio-copilot/releases/tag/0.6.14) Fix search view user select text error, fix model select error

[0.6.13](https://github.com/infiolab/infio-copilot/releases/tag/0.6.13) Fix and update settings migration

[0.6.12](https://github.com/infiolab/infio-copilot/releases/tag/0.6.12) Fix settings migration

[0.6.11](https://github.com/infiolab/infio-copilot/releases/tag/0.6.11) Update settings migration, update regex search result, add crash reporter (thanks @travertexs)

[0.6.10](https://github.com/infiolab/infio-copilot/releases/tag/0.6.10) Update chat history view, add vector search view

[0.6.8](https://github.com/infiolab/infio-copilot/releases/tag/0.6.8) Fixed vector embedding memory leak, update chat view style

[0.6.7](https://github.com/infiolab/infio-copilot/releases/tag/0.6.7) Fixed pdf & md content null byte error, fixed vector embedding memory leak

[0.6.6](https://github.com/infiolab/infio-copilot/releases/tag/0.6.6) Fixed pdf content null byte error

[0.6.5](https://github.com/infiolab/infio-copilot/releases/tag/0.6.5) Fixed openai provider test error

[0.6.4](https://github.com/infiolab/infio-copilot/releases/tag/0.6.4) Added batch embedding for siliconflow

[0.6.0](https://github.com/infiolab/infio-copilot/releases/tag/0.6.0) Added Infio built-in MCP support, optimized startup performance, support Infio provider MCP tools

[0.5.2](https://github.com/infiolab/infio-copilot/releases/tag/0.5.2) Added Infio provider, added Infio embedding models

[0.5.1](https://github.com/infiolab/infio-copilot/releases/tag/0.5.1) Fix current file content prompt

[0.5.0](https://github.com/infiolab/infio-copilot/releases/tag/0.5.0) Enhanced performance and stability improvements, added MCP support

## Features

| Feature | Description |
|---------|-------------|
| 💬 Chat & Edit | Get instant AI assistance and apply suggested improvements with a single click |
| 📝 Autocomplete | Receive context-aware writing suggestions as you type |
| ✏️ Inline Editing | Edit your notes directly within the current file |
| 🔍 Vault Chat | Interact with your entire Obsidian vault using AI |
| 🖼️ Image Analysis | Upload and analyze images from your vault or local system |
| ⌨️ Commands | Create and manage custom commands for quick actions |
| 🎯 Custom Mode | Define personalized AI modes with specific behaviors |
| 🔌 MCP | Manage Model Context Protocol integrations |

### Chat & Edit Flow

Get instant AI assistance and apply suggested improvements with a single click, all within Obsidian

![chat-with-select](asserts/chat-with-select.gif)

### Autocomplete

Receive context-aware writing suggestions as you type

![autocomplte](asserts/autocomplete.gif)

### Inline Editing

Edit your notes directly within the current file

![inline-edit](asserts/edit-inline.gif)

### Chat with Vault

Leverage the power of AI to interact with your entire Obsidian vault, gaining insights and connections across your notes

![rag](asserts/rag.gif)

## Getting Started
> **⚠️ Important: Installer Version Requirement**Infio-Copilot requires a recent version of the Obsidian installer. If you experience issues with the plugin not loading properly:
>
> 1. First, try updating Obsidian normally at `Settings > General > Check for updates`.
> 2. If issues persist, manually update your Obsidian installer:
>
>    - Download the latest installer from [Obsidian&#39;s download page](https://obsidian.md/download)
>    - Close Obsidian completely
>    - Run the new installer

1. Open Obsidian Settings
2. Navigate to "Community plugins" and click "Browse"
3. Search for "Infio Copilot" and click Install
4. Enable the plugin in Community plugins
5. Set up your API key in plugin settings
   - SiliconFlow : [SiliconFlow API Keys](https://cloud.siliconflow.cn/account/ak)
   - OpenRouter : [OpenRouter API Keys](https://openrouter.ai/settings/keys)
	 - Alibaba Bailian : [Bailian API Keys](https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key)
   - DeepSeek : [DeepSeek API Keys](https://platform.deepseek.com/api_keys/)
   - OpenAI : [ChatGPT API Keys](https://platform.openai.com/api-keys)
   - Anthropic : [Claude API Keys](https://console.anthropic.com/settings/keys)
   - Gemini : [Gemini API Keys](https://aistudio.google.com/apikey)
   - Groq : [Groq API Keys](https://console.groq.com/keys)
6. Set up hotkeys for quick access:
   - Go to Settings > Hotkeys
   - Search for "Infio Copilot"
   - Recommended keybindings:
     * Infio Copilot: Infio add selection to chat -> cmd + shift + L
     * Infio Copilot: Infio Inline Edit -> cmd + shift + K
![autocomplte](asserts/doc-set-hotkey.png)
7. If you need to chat with documents, you must configure an embedding model.
   - Currently, only SiliconFlow, Alibaba, Google, and OpenAI platforms support embedding models.

## Feedback and Support
We value your input and want to ensure you can easily share your thoughts and report any issues:

- **Bug Reports**: If you encounter any bugs or unexpected behavior, please submit an issue on our [GitHub Issues](https://github.com/infiolab/infio-copilot/issues) page. Be sure to include as much detail as possible to help us reproduce and address the problem.
- **Feature Requests**: For new feature ideas or enhancements, please use our [GitHub Discussions - Ideas & Feature Requests](https://github.com/infiolab/infio-copilot/discussions/categories/ideas) page. Create a new discussion to share your suggestions.

[Chat with me on Twitter](https://x.com/buyiyouxi)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/felixduan)

## Acknowledgments

This project stands on the shoulders of giants. We would like to express our gratitude to the following open-source projects:

- [obsidian-copilot-auto-completion](https://github.com/j0rd1smit/obsidian-copilot-auto-completion) - For autocomplete implementation and TypeScript architecture inspiration
- [obsidian-smart-composer](https://github.com/glowingjade/obsidian-smart-composer) - For chat/apply UI patterns and PgLite integration examples
- [continue](https://github.com/continuedev/continue) & [cline](https://github.com/cline/cline) - For prompt engineering and LLM interaction patterns
- [pglite](https://github.com/electric-sql/pglite) - For conversation/vector data storage and sample code

## License

This project is licensed under the [MIT License](LICENSE).
