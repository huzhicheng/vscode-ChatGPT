
<div align="center">
<img src="https://raw.githubusercontent.com/huzhicheng/vscode-ChatGPT/main/resources/icon.png" alt="mini ChatGPT" width="128"/>

# 一个 ChatGPT 插件

**mini ChatGPT** —— 直接在 VSCode 里像 ChatGPT 提问，让 ChatGPT 更直接的当我们的开发助手。


[![ChatGPT](https://img.shields.io/badge/ChatGPT-green.svg?label=ChatGPT-3.5&style=for-the-badge&logo=openai)](https://platform.openai.com/docs/api-reference/chat)
[![VS Code](https://img.shields.io/badge/插件安装-Install-blue.svg?&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=fengzheng.code-chatgpt-assistant)
[![GITHUB](https://img.shields.io/badge/源码-green.svg?label=GitHub&style=for-the-badge&logo=github)](https://github.com/huzhicheng/vscode-ChatGPT/tree/main)

**注意需要科学上网哦！**

</div>

# 功能特点

- 界面简洁，没有多余的干扰；
- 支持 GPT-3.5 和 GPT-4；
- 像 ChatGPT 官网输出效果一致，打字效果实时输出；
- 支持两轮上下文（太多了浪费 tokens），大致等于支持上下文；
- 代码美化+格式化，并且可以一键复制，直接粘贴到 vscode 中；

# 使用方式

1. 安装好本插件，[安装](https://marketplace.visualstudio.com/items?itemName=fengzheng.code-chatgpt-assistant) 

2. 点击查看->命令面板，或者使用快捷键（MacOS: Shift + Command + P，Windows:Shift + Control + P

3. 输入 `Chat` 并回车。 
![](https://hexo.moonkite.cn/blog/20230509111926.png)

4. 如果是首次使用，会弹出提示输入框，在此输入 ChatGPT 的 API。[如何获取ChatGPT API key](#获取-chatgpt-api-key)
![](https://hexo.moonkite.cn/blog/20230509112123.png)

5. 之后就可以使用啦
![](https://hexo.moonkite.cn/blog/20230509112311.png)

6. 如果之后想更换 ChatGPT 的 API key，在命令面板中输入 `ChatGPT API` 即可。

## 一点点使用建议

此插件只有一个 webview 实现，打开之后独占一个 tab，可以设置向左或向右拆分，然后在左侧使用此插件向 ChatGPT 提问，右侧是代码文件，这样就不用来回切换了，而且可以将代码片段一键复制，然后直接运行， 

![](https://hexo.moonkite.cn/blog/chatgpt.gif)

## 获取 ChatGPT API key
1. 先准备好科学上网，不要用亚洲节点。

2. 之后到 [OpenAI 官网](https://platform.openai.com/)注册账号。

3. 到[个人中心](https://platform.openai.com/account/api-keys) 创建一个 API key。

![](https://hexo.moonkite.cn/blog/20230509133206.png)



# 一起交流

一个程序员，可以加我微信或公众号一起交流插件问题，或者单纯交个朋友。

![](https://hexo.moonkite.cn/blog/%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%20(1).png)