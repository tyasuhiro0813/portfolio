# 【Vue.js, Nuxt.js, Firebase】お気に入りの飲食店を簡単に記録できるアプリ

![Image top](/material/top.png)

## はじめに

こちらでは、Vue.js, Nuxt.js, Firebaseを用いて開発したポートフォリオについて説明します。
機能の追加や修正は随時対応中です。（2022年11月16日現在）

## アプリの概要

自分のお気に入りの飲食店を簡単に記録し、他のユーザーとシェアできるサービスです。


## 想定ユーザー

* 自分が行って気に入った飲食店を記録しておきたい方
* 他の人と美味しい飲食店の情報をシェアしたい方
* 食を通じて他の人と繋がりたい方


## アプリの制作背景

私の妻は食べることが好きで、美味しいお店を見つけると、Google Mapでお気に入り登録し、リンクを私に送ってくれます。
リンクを開くと最初にGoogle Mapが起動し、そのお店の位置情報が表示されます。
「人気メニューは何か？」「メニューは何があるのか？」「評価はどれくらいか？」などを見るには、
位置情報と一緒に記載の情報から各情報を探す必要があり、面倒だと感じることが多々あります。
そこで、
「お店の情報が簡単に記録できる」「あとで見返したときに、一目で欲しい情報がわかる」「他の人にも簡単にシェアできる」
そんなアプリが欲しいと思い、制作いたしました。


## 使用技術

* nuxt 2.15.8
* Vue 2.6.14
* Buefy
* CSS
* Firebase（Firestore, Authentication, Functions, Storage, Hosting）  


## アプリの操作方法

### `1.トップページ`

![Image top to login](/material/top-to-login.gif)

* トップページにアクセスすると、上記の画面が表示されます
* 「新規登録/ログインして始める」のボタンを押すと、新規登録/ログイン画面に遷移します

### `2.ユーザー登録, ログイン`

**2-1. メールアドレス/パスワードによるユーザー登録/ログイン**  
![Image login](/material/login.gif)  
* 動画のように、ユーザーネーム, メールアドレス, パスワードを入力し、「SignUp」ボタンを押す
* 既にユーザー登録が完了している場合は、入力完了後に「Login」ボタンを押す
* ユーザー登録/ログインに成功すると、動画のようにお店登録のページに遷移
* ログインすると、ヘッダー部分に登録したユーザーネームが表示されます

**2-2. Googleアカウントを利用したユーザー登録/ログイン**  
![Image login google](/material/login-google.gif)  
* Googleアカウントでユーザー登録/ログインする場合は、「SignUp・Login with Google」ボタンを押す
* ユーザー登録/ログインに成功すると、動画のようにお店登録のページに遷移
* ログインすると、ヘッダー部分にGoogleアカウントで登録しているユーザーネームが表示されます

### `3.お店の登録`
![Image register](/material/register.gif)
* ヘッダーメニューの「お店を登録」から登録画面に遷移。
* 登録に必要なお店の情報を入力したら、「お店を登録」ボタンを押す。  
  他のユーザーにお店の情報をシェアする場合は、「タイムラインで他のユーザーにシェア」スイッチをONにする。
* 画像は無くてもお店の登録は可能
* 登録が完了すると、Myページに遷移する

### `4.登録した飲食店の情報を見る`
![Image mypage](/material/mypage.gif)
* ヘッダーメニューの「Myページ」から自分が登録したお店の情報を見ることができる
* 見たいお店の条件でソートや並び替えをすることができ、複数条件でのソート/並び替えも可能。  
  ソート/並び替えを解除したい場合は、「ソート・並べ替え解除」ボタンを押すと解除される。

### `5.他のユーザーが登録した情報を見る`
![Image timeline](/material/timeline.gif)
* ヘッダーメニューの「タイムライン」から他のユーザーが登録したお店の情報を見ることができる
* Myページと同様、見たいお店の条件でソートや並び替えをすることができ、複数条件でのソート/並び替えも可能。  
  ソート/並び替えを解除したい場合は、「ソート・並べ替え解除」ボタンを押すと解除される。

### `6.問い合わせ`
![Image timeline](/material/contact.gif)
* ヘッダーメニューの「お問合わせ」からサービス管理者に問い合わせることができます。
* お名前、メールアドレス、お問い合わせ内容を入力し、「送信」ボタンを押す。
* 送信が完了されると、「送信しました。」とメッセージが表示されます

### `7.ログアウト`
![Image timeline](/material/logout.gif)
* ヘッダーメニューの「ログアウト」からログアウトすることができます。
* ログアウトするとトップページが表示されます。


## 機能一覧

| # | 機能 |
| :------------------: | :----------------------------: |
| 1 | ユーザー登録機能 | 
| 2 | ユーザーネーム/メールアドレス/パスワードログイン機能 |
| 3 | Googleログイン機能 |
| 4 | ログアウト機能 |
| 5 | お店登録 |
| 6 | 画像登録 |
| 7 | ソート/並べ替え |
| 8 | 他のユーザーとのシェア |
| 9 | お問い合わせ |


## 今後の修正・アップデート（予定）
* 全体的なデザインの修正
* お店情報に場所を追加し、マップで表示させる機能の追加
* レスポンシブ対応
* その他（良い機能があれば）