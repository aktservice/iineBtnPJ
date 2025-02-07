# モチベーションを上げる PJ

## ウェブアプリのリンクを使ってスプレッドシートにハートを送る

### whats is this?

ウェブアプリをデプロイしてウェブアプリにアクセスすると
スプレッドシートにハートを送る

### webapp のパラメータ

```
https://script.google.com/a/macros/aktio.co.jp/s/ランダム文字列/exec?
//pram1
status=(ok or ng)
//pram2
row={1,2.........N}
//exmple
https://script.google.com/a/macros/aktio.co.jp/s/ランダム文字列/exec?status=ok&row=1

```

### 使用方法と準備

- スプレッドシートの準備
  1. シート名称はそのままのシート 1 に対応
  1. １列目には行番号等集計に必要ない文字を入れる
  1. アプリにアクセスがあると１列目にハートが追加される
  1. アプリのステータス部分と row 部分に下記のように追加
  ```
  configシートA1セルにURLを貼り付け
  =HYPERLINK(config!$A$1&"?status=ok&row="&row(),"OKの場合")
  ```
