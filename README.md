# gasVanillaWebAppTemplate

## GASWebApplication を LOCAL で構築する為のテンプレートです

### 使用しているソフト等

- VsCode(editor)
  - VsCode Extension: more(debug)
- TypeScript(js is also fine)
- Nodejs(npm or yarn)
  - @types/google-apps-script
  - Google/Clasp(global)
- git(use git bash)

### ざっくりとした流れ

src フォルダで開発 → clasp push で 反映

### 使い方

Vscode をインストール（User インストールの場合は管理者権限は不要です）  
[Vscode](https://code.visualstudio.com/)  
nodejs(npm) をインストール(要管理者権限)  
[nodejs](https://nodejs.org/ja/)  
nodejs と一緒にインストールされますが一応  
[npm](https://www.npmjs.com/)  
git をインストール(要管理者権限)  
[git](https://git-scm.com/)  
3 点をインストール後に

1. このプロジェクトをテンプレートに github 上に Repository を作成
1. Repository の URL をコピー

```bash
#bash or powershell
# git bash を開いて下記のコマンドを打ち込みして下さい（コピペＯＫ）
git clone コピーしたURLを貼り付け
cd  yourRepoName
npm install
code ./
#ここでVsCodeが開くのでそこから開発
# clasp コマンドをGlobalにインストールした状態で
#Googleアカウントへログイン
clasp login
#ログイン成功後にプロジェクトのScriptIDを.clasp.jsonのscriptIdに記入して
clasp open
# .clasp.jsonに記載されたIdを開くので確認後
clasp push
# ウェブアプリとしてデプロイ
clasp deploy --description "description"
# open webapp
clasp open --webapp
# version を聞かれるので適宜

#.clasp.jsonをRepositoryにPUSHしたくないので
#パスは適宜変更してください
git rm --cached .clasp.json
#開発をRemoteへ保存
git add ./
# initial commit
git commit -m "this development commit message"
git push origin main
```
