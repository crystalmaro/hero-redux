# hahow-hero

[Hero Demo Page](https://crystalwang-hero.netlify.com)

## 目錄
* [頁面需求](#頁面需求)
* [細部需求](#細部需求)
    * [我們該如何執行完成的 package](#我們該如何執行完成的-package)
    * [專案的架構，Web 的架構邏輯](#專案的架構，Web-的架構邏輯)
    * [你對於所有使用到的第三方 library 的理解，以及他們的功能簡介](#你對於所有使用到的第三方-library-的理解，以及他們的功能簡介)
    * [你在程式碼中寫註解的原則，遇到什麼狀況會寫註解](#你在程式碼中寫註解的原則，遇到什麼狀況會寫註解)
    * [在這份專案中你遇到的困難、問題，以及解決的方法](#在這份專案中你遇到的困難、問題，以及解決的方法)
* [加分建議](#加分建議)

---

## 頁面需求
- [x] 整個專案會需要兩個頁面
    - Hero List Page (網址: `/heroes`)
    - Hero Profile Page (網址: `/heroes/:heroId`)
- [x] "Hero List Page" 、 "Hero Profile Page" 都有一個 "Hero List" 在頁面上水平置中 (API: `GET https://hahow-recruit.herokuapp.com/heroes`)
- [x] "Hero List" 上的元素我們稱為 "Hero Card"，在 "Hero List" 中由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
- [x] "Hero Card" 必須包含圖片和名字，且是可以點擊的連結
- [x] "Hero Card" 連結會連到單一Hero的 "Hero Profile Page" ，"Hero List" 依然在相同位置，並且不因切換連結重新render
- [x] 當在 "Hero Profile Page" 時要將現在所選中的 "Hero Card" 用不同的顏色或圖案標示出來
- [x] "Hero Profile Page" 中，在"Hero List" 底下會有一個 "Hero Profile"
- [x] "Hero Profile" 會顯示 Hero 的能力值 (API: `GET https://hahow-recruit.herokuapp.com/heroes/:heroId/profile`) ，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
- [x] "Hero Profile" 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料 (API: `PATCH https://hahow-recruit.herokuapp.com/heroes/1/profile`)，送出的能力值總和必須與拿到的時候相同
- [x] Hero 能力值不能小於零

---

## 細部需求
### 我們該如何執行完成的 package
1. clone the github repo
2. npm start (to run the server and it should open in the browser automatically)

### 專案的架構，Web 的架構邏輯
1. directory tree
2. react component structure
3. redux ?

### 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介
#### React
#### JSX
- being able to write html-like and JavaScript-like languages
#### Babel
- compile React and JSX into pure JS
#### Redux
- 3rd party state management library, that's being widely used with React
#### Redux-Thunk
- It handles asynchronous action within Redux


### 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
1. since it's my first major project with Redux, I write comments along the way, to help me understand the action flow of Redux


### 在這份專案中你遇到的困難、問題，以及解決的方法
#### Redux: steep learning curve
#### Deployment
- Github Page
- Netlify
#### CSS Flexbox 
- since the width of the key (eg. STR) and value (eg. 10) are different from each other, when using Flexbox's`justify-content` : `space-around`, `space-evenly`, nor `space-between`, none of them can perfectly center the `+` and `-` buttons vertically
<img src="https://i.imgur.com/NWT2wyJ.png" width="300x" />

- **Solution**: adding `width` and `text-align: center`, so `justify-content` treats every child element equally

<img src="https://i.imgur.com/d8Qo7Pk.png" width="300x" />

<img style="border: 1px solid black" src="https://i.imgur.com/uOwy5jO.png" width="250x" />

---

## 加分建議

程式的可讀性與可維護性
使用 CSS framework
任何你覺得可以讓網頁變得更 fancy 或是很酷的事情

