import * as vscode from 'vscode';
import axios from 'axios';
import { Global } from '../constant';
import { Transform } from 'stream';
import path = require('path');


const getContent = (list: any[] = []) => {
  let html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self' https: data: blob: vscode-remote-resource:; media-src 'none'; frame-src 'self' vscode-webview: https://*.vscode-webview-test.com; object-src 'self'; script-src * 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self' https:; font-src 'self' https: vscode-remote-resource:;">
      <title>ChatGPT</title>
      <style>
        pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-class .hljs-title,.hljs-title.class_{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}
    
        .hljs-copy-wrapper{position:relative;overflow:hidden}.hljs-copy-wrapper:hover .hljs-copy-button,.hljs-copy-button:focus{transform:translateX(0)}.hljs-copy-button{position:absolute;transform:translateX(calc(100% + 1.125em));top:1em;right:1em;width:2rem;height:2rem;text-indent:-9999px;color:#fff;border-radius:.25rem;border:1px solid #ffffff22;background-color:#2d2b57;background-color:var(--hljs-theme-background);background-image:url('data:image/svg+xml;utf-8,<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H6Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7 1.89543 7.89543 1 9 1H15C16.1046 1 17 1.89543 17 3V5C17 6.10457 16.1046 7 15 7H9C7.89543 7 7 6.10457 7 5V3ZM15 3H9V5H15V3Z" fill="white"/></svg>');background-repeat:no-repeat;background-position:center;transition:background-color 200ms ease,transform 200ms ease-out}.hljs-copy-button:hover{border-color:#ffffff44}.hljs-copy-button:active{border-color:#ffffff66}.hljs-copy-button[data-copied="true"]{text-indent:0;width:auto;background-image:none}@media(prefers-reduced-motion){.hljs-copy-button{transition:none}}.hljs-copy-alert{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}
        </style>
    <script>
      
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>
    <style>
      body.vscode-light {
        color: black;
      }
      body.vscode-dark {
        color: white;
      }
      body.vscode-high-contrast {
        color: red;
      }
      body {
        height: 100%;
      }

      #input-box {
        position: fixed;
        bottom: 20px;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      #input {
        flex: 1;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      
      #send-button {
        height: 40px;
        width: 90px;
        margin-left: 10px;
        align-self: flex-end;
        background-color: #007bff;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
      }

      @keyframes dots {
        0% {
          content: ".";
        }
        33% {
          content: "..";
        }
        66% {
          content: "...";
        }
        100% {
          content: ".";
        }
      }
      
      #send-button.loading::after {
        content: ".";
        animation: dots 1s infinite;
      }
      
      
      
      #outer {
        max-width: 800px;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
          border-radius: 20px;
      
      
          min-width: 600px;
          min-height: 480px;
          max-width: 1200px;
          display: flex;
          box-sizing: border-box;
          width: 90vw;
          height: 90vh;
      }
      
      #container {
        margin-bottom:100px;
        overflow-y: auto;
        flex-grow: 1;
      }
      

      .item {
        margin-bottom: 10px;
        padding: 10px;
        backgroud:rgba(0,0,0,.05);
      }

      .item:nth-child(odd) {
        
      }

      .item > span {
        float: left;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 5px;
        background-size: cover;
      }
      .photo{
       width:30px;
       height:30px;
       border-radius: 5px;
       background:white;
      }

      .item > div {
        overflow: hidden;
      }

      .item > div > p {
        margin: 0;
        font-size: 16px;
        line-height: 1.4;
        border-radius: 10px;
        border:1px solid hsla(0,0%,100%,.192);
        margin-top: 10px;
        padding: 10px;
      }

      #scroll-to-bottom {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
      .write::after {
        content: "|";
        display: inline-block;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
        
      .input-dropdown {
        height: 40px;
        width: 90px;
        margin-left: 10px;
        margin-bottom:20px;
        align-self: flex-end;
        font-size: 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        padding: 0px 5px;
        border-radius: 4px;
      }
      
      .input-dropdown:focus {
        outline: none;
        box-shadow: 0 0 3px 3px rgba(0, 123, 255, 0.5);
      }
      
      .operation-wrapper {
        display: flex;
        flex-direction: column;
      }
      </style>
      <script>
        const vscode = acquireVsCodeApi();
      
        function send(){
          const input = document.getElementById('input');
          const text = input.value;
          addSelfInput(text);
          const button = document.getElementById("send-button");
          button.classList.add("loading");
          const modelType = document.querySelector("#model-type");
          const model = modelType.value;

          vscode.postMessage({
            command: 'alert',
            text: text,
            model: model
          })
        }

        let lastContentP = "";
        let fullAnswer = "";
        // Handle the message inside the webview
        window.addEventListener('message', event => {
            
            const message = event.data; 
   
            switch (message.command) {
                case 'showAnswer':
                  let anwser = "";
                  const dataArray = message.content.split('data: ');
                  if (dataArray.length > 1) {
                    const result = dataArray[1].trim(); // 去除前后空格
                    anwser = result;
                  } else {
                    anwser = message.content;
                  }
                  anwser = anwser.replace('\\n\\n"}', '"}');
                  const anwserObject = JSON.parse(anwser);
                  const chatSessionId = anwserObject.id;
                  const content = anwserObject.choices[0].delta.content;
                  if(content==undefined) {
                    fullAnswer += '';
                  }else{
                    fullAnswer += content;
                  }
                  
                  if(!message.isEnd) {
                    addContent(content,chatSessionId)
                   // console.log(JSON.stringify(anwserObject));
                  }
                  const input = document.getElementById('input');
                  const p = document.getElementById(lastContentP);
                  let currentText = fullAnswer;
                  if(message.isEnd) {
                    vscode.postMessage({
                      command: 'giveLastAnswer',
                      text: 'Q:' + input.value +'. A:' + fullAnswer + '.'
                    })
          
                    const button = document.getElementById("send-button");
                    button.classList.remove("loading");
                    console.log(lastContentP);
                    
                    p.classList.remove("write");

                    
                    input.value = "";
                    fullAnswer = "";

                    hljs.addPlugin(new CopyButtonPlugin());
                  }

                  var container = document.getElementById("container");
                  container.scrollTop = container.scrollHeight;
                
                  //console.log(currentText);
                  const html = marked.parse(currentText);


                  // 将转换后的 HTML 插入到页面中
                  p.innerHTML = html;
                  // 使用 highlight.js 高亮代码
                  hljs.highlightAll();
                  break;
            }
        });
  
        function addContent(content,id) {
          const pid = "div-p-"+id;
          const contentElementP = document.getElementById(pid);
          if(contentElementP!=null) {
            contentElementP.append(content);
            return;
          }

          // 获取容器元素
          const container = document.getElementById('container');

          // 创建 div 元素
          const div = document.createElement('div');
          div.className = 'item';

          // 创建 img 元素
          const img = document.createElement('img');
          img.className = 'photo';
          img.src="https://i.328888.xyz/2023/04/23/i5KOtZ.png";

          // 创建 section 元素
          const section = document.createElement('div');
          section.className = 'section';

          // 创建 p 元素
          const p = document.createElement('p');
          p.textContent = content;
          p.id= pid;
          p.classList.add("write");

          // 将 img 元素和 section 元素添加到 div 元素中
          div.appendChild(img);
          div.appendChild(section);

          // 将 p 元素添加到 section 元素中
          section.appendChild(p);
          // 将 div 元素添加到容器元素中
          container.appendChild(div);

          lastContentP = pid;
        }

        function addSelfInput(content) {
          // 获取容器元素
          const container = document.getElementById('container');

          // 创建 div 元素
          const div = document.createElement('div');
          div.className = 'item';

          // 创建 img 元素
          const img = document.createElement('img');
          img.className = 'photo';
          img.src = "https://i.328888.xyz/2023/04/23/i5KrGC.th.jpeg";

          // 创建 section 元素
          const section = document.createElement('div');
          section.className = 'section';

          // 创建 p 元素
          const p = document.createElement('p');
          p.textContent = content;

          // 将 img 元素和 section 元素添加到 div 元素中
          div.appendChild(img);
          div.appendChild(section);

          // 将 p 元素添加到 section 元素中
          section.appendChild(p);
          // 将 div 元素添加到容器元素中
          container.appendChild(div);
        }

    </script>
    </head>
    <body>
    <div id="outer">
    <div id="container">
        
    </div>

      <div id="input-box">
      <textarea id="input" placeholder="请输入你的问题"></textarea>
      <div class="operation-wrapper">
      <select class="input-dropdown" id="model-type">
        <option value="gpt-3.5-turbo" selected>gpt-3.5</option>
        <option value="gpt-4">gpt-4</option>
      </select>

      <button id="send-button" onclick="send()">发送</button>
      </div>
      </div>
      </div>
    </body>
  </html>`;
  return html;
};
let currentPanel: vscode.WebviewPanel | undefined = undefined;
async function chatUI(context: vscode.ExtensionContext) {

  if (currentPanel) {
    currentPanel.reveal(vscode.ViewColumn.One);
  } else {
    currentPanel = vscode.window.createWebviewPanel(
      'chatgpt', // Identifies the type of the webview. Used internally
      'ChatGPT', // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'resources'))],
      } // Webview options. More on these later.
    );

    const webview = currentPanel.webview;
    webview.html = getContent();
    currentPanel.onDidDispose(
      () => {
        currentPanel = undefined;
      },
      undefined,
      context.subscriptions
    );

    webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case 'alert':
            getDataFromHttps(message.text,message.model)
              .then(data => {
                const result = JSON.stringify(data);
                // console.log(`获取到的数据为：${result}`);
                // vscode.window.showErrorMessage(`${result}`);

                // webview.postMessage({ command: 'showAnswer', content: data });
              })
              .catch(err => {
                console.error(err);
              });

            return;
          case 'giveLastAnswer':
            setLastAnwser(message.text);
            return;
        }
      },
      undefined,
      context.subscriptions
    );

    const apiKey = context.globalState.get<string>(Global.ChatGPT_KEY) || '';

    let chatContext: {}[] = [];
    function setLastAnwser(context: String) {
      if (chatContext.length === 2) {
        chatContext.shift(); // 移除第一个元素
      }
      chatContext.push(context);
    }

    //let model = "gpt-4";
    async function getDataFromHttps(prompt: string,model: string) {
      const url = 'https://api.openai.com/v1/chat/completions';
      console.log("model = " + model);

      var processingQuestion = `前两轮的问题和回答:\`\`\``;
      if (chatContext != null) {
        chatContext.forEach(item => {
          processingQuestion += item
        });
      }
      processingQuestion += `\`\`\` Q："${prompt}"`
      let question = {
        //"model": "gpt-3.5-turbo",
        "model": model,
        "messages": [{ "role": "user", "content": processingQuestion }
          , { "role": "system", "content": "回答的开头不需要加A：" }],
        "stream": true
      };
      let postData = JSON.stringify(question);
      console.log(postData);

      const response = await axios.post(url, postData, {
        responseType: 'stream', headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      const transformStream = new Transform({
        transform(chunk, encoding, callback) {
          // 在这里进行数据转换
          const data = chunk.toString(); // 这里假设转换为字符串

          let json = data.replace(/^data: /, '');
          const doneString = '\n\ndata: \[DONE\]\n\n';
          let isEnd = false;
          if (json.endsWith(doneString)) {
            isEnd = true;
            json = json.replace(/\n\ndata: \[DONE\]\n\n$/, '');
          }
          json = json.replace(/\n\n"}/, '"}');
          //console.log(`ttt:` +json);
          //const chatResult = JSON.parse(json);
          //console.log(`ttt a :` +json);
          const sendData = { command: 'showAnswer', isEnd: isEnd, content: json };
          webview.postMessage(sendData);

          this.push(data);
          callback();
        }
      });

      response.data.pipe(transformStream);

      let responseData = '';
      transformStream.on('data', data => {

        //console.log(data);
        //webview.postMessage({ command: 'refactor', content: data });
      });

      await new Promise(resolve => {
        transformStream.on('end', () => {
          // setLastAnwser(responseData);
          console.log("读取结束");
        });
      });
    }


  }





}

export default chatUI;
