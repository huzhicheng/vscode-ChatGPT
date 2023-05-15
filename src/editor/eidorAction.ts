import * as vscode from 'vscode';

async function editorAction(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('fengzheng.editor.getSelectedText', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No editor is active');
            return;
        }

        const selection = editor.selection;
    
        const selectedText = editor.document.getText(selection);
        // vscode.window.showInformationMessage(`Selected Text: ${selectedText}`);
        const range = new vscode.Range(selection.start, selection.end);
        const position = selection.active;

        const hover = new vscode.Hover('This is a hover message');
        vscode.Hover
    });

    context.subscriptions.push(disposable);

    vscode.commands.registerCommand('fengzheng.bitGPT.explain', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No editor is active');
            return;
        }

        const selection = editor.selection;
    
        const selectedText = editor.document.getText(selection);
        //vscode.window.showInformationMessage(`Selected Text: ${selectedText}`);

        const panel = vscode.window.createWebviewPanel(
            'myCustomPanel', // 标识面板的唯一 ID
            'My Custom Panel', // 面板的标题
            vscode.ViewColumn.Active, // 面板打开的位置
            {
              enableScripts: true // 启用 webview 中的脚本
            }
          );
          
          // 设置面板的 HTML 内容
          panel.webview.html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>My Custom Panel</title>
            </head>
            <body>
              <h1>Hello, World!</h1>
            </body>
            </html>
          `;
          
    });
}

export default editorAction;