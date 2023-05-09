// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import chatUI from './webview/chat';
import {Global} from './constant'
import { ThemeColor } from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

let statusBarItem: vscode.StatusBarItem;
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	let disposable = vscode.commands.registerCommand('fengzheng.chatgpt', () => {
        const apiKey = context.globalState.get<string>(Global.ChatGPT_KEY) || '';
        if(apiKey.trim()==='') {
            vscode.window.showInputBox({
                ignoreFocusOut: true, // 当焦点移动到编辑器的另一部分或另一个窗口时, 保持输入框打开
                password: false, // 为 true 就表示是密码类型
                prompt: "请输入 ChatGPT API key", // 文本输入提示
                value: apiKey // 默认值, 默认全部选中
            }).then(value => {
                if (!value || !value?.trim()) {
                    vscode.window.showErrorMessage("你输入的文本无效");
                    return;
                };
                context.globalState.update(Global.ChatGPT_KEY, value);
                chatUI(context);
            }) 
        }else {
            chatUI(context);
        }
        
    });
	context.subscriptions.push(disposable);

    // 创建一个状态栏按钮
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBarItem.text = '$(console) ChatGPT';
    statusBarItem.tooltip = '开始在 VS Code 中使用 ChatGPT';
    statusBarItem.command = 'fengzheng.chatgpt';

    // 添加状态栏按钮
    statusBarItem.show();

	const inputKey = vscode.commands.registerCommand("fengzheng.chatgpt.inputKey", () => {
		
		const apiKey = context.globalState.get<string>(Global.ChatGPT_KEY) || '';
        // 打开一个 input
        vscode.window.showInputBox({
            ignoreFocusOut: true, // 当焦点移动到编辑器的另一部分或另一个窗口时, 保持输入框打开
            password: false, // 为 true 就表示是密码类型
            prompt: "请输入 ChatGPT API key", // 文本输入提示
            value: apiKey // 默认值, 默认全部选中
        }).then(value => {
            if (!value || !value?.trim()) {
                vscode.window.showErrorMessage("你输入的文本无效");
                return;
            };
			context.globalState.update(Global.ChatGPT_KEY, value);
            vscode.window.showInformationMessage(`输入命令 Chat 开始使用啦`);
        })
    });
	context.subscriptions.push(inputKey);


}

// This method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
    // 注册插件被销毁时的清理操作
//   context.subscriptions.push({
//     dispose: () => {
//       statusBarItem.dispose();
//     }
//   });
 }
