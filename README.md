# hahow-hero
[Project Instruction](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)

[Hero Demo Page](https://crystalwang-hero.netlify.com)

**Nov 7th, 2019: added a [補充](#補充) section

## 目錄
* [頁面需求](#頁面需求)
* [細部需求](#細部需求)
    * [如何執行完成的 package](#如何執行完成的-package)
    * [專案架構邏輯](#專案架構邏輯)
    * [第三方 library 的理解跟功能簡介](#第三方-library-的理解跟功能簡介)
    * [程式碼中寫註解的原則](#程式碼中寫註解的原則)
    * [困難以及解決的方法](#困難以及解決的方法)
* [加分](#加分)
* [補充](#補充)

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
### 如何執行完成的 package
```
git clone https://github.com/crystalmaro/hero-redux.git
cd hero-redux
npm start 
// automatically opens http://localhost:3000
```

### 專案架構邏輯

```bash
.
├── build/               # Build for Deployment Purpose
├── node_modules/
├── public/
├── src/    
│  ├── ccs/              # CSS styling for corresponding JS components
│  │  ├── index.css
│  │  ├── list.css
│  │  └── profile.css
│  ├── js/
│  │  ├── actions/       # Redux actions
│  │  ├── components/    # React components
│  │  │  ├── App.js      # Entry wrapper
│  │  │  ├── List.js     # Hero List Display
│  │  │  └── Profile.js  # Individual Hero Profile Display
│  │  ├── constants/     # Redux action-type constants
│  │  ├── reducers/      # Redux reducers
│  │  └── store/         # Redux store and middlewares 
│  └──── index.js        # React root component
├── .gitignore
├── package.json    
├── package-lock.json
└── README.md
```

### 第三方 library 的理解跟功能簡介
#### --- React ---
- 一個 Facebook 開發，最多人用跟最大 developer community 的 JavaScript library 之一
- 使用 React Virtual DOM 來增加 DOM 重繪的效率，也提高使用者體驗
- 透過 React 本身 one-way data flow / binding 的思想，從資料端出發，資料一有異動，就通知 UI 端更新 (Model => View)
#### --- React DOM ---
- 因為重繪所有跟改變實際的 DOM 是很耗效能的動作，所以 React Virtual DOM 就像是一個中間人，幫助改變最小幅度的 DOM 
- 每當 state 有變化時，React 會重新構建整個 virtual DOM，然後把 current/latest DOM 和 previous DOM 做對比，看兩個 DOM 的差別，然後只把需要變化的部分更新到實際的瀏覽器 DOM
#### --- React Router ---
- 透過 React Router 實踐專案需要個兩個頁面（`/heroes`跟`/heroes/:heroId`），同時達到當切換連結，而不重新 render 的頁面
- 常跟 React 配合的 Routing Framework，讓 SPA (Single Page Application) 可以利用瀏覽器 history 功能（上一頁、下一頁）
#### --- JSX (JavaScript XML) ---
- 可以在 JavaScript 中寫類似 HTML 標籤的語法
- 不一定要搭配 React 用，但可以提升程式撰寫效率，讓 components 整個結構更加直觀，可讀性較高
- 方便產生 React Element -> 取代 `React.createElement()`
```javascript=
// with JSX
<a href="https://hahow.in/">Hello Henry and Freddie</a>
// without JSX
React.createElement('a', {href: 'https://hahow.in/'}, 'Hello Henry and Freddie')
```
#### --- Babel ---
- 透過 Babel 把 JSX 跟 ES6 轉換成瀏覽器看得懂的語法
#### --- Redux ---
- 很常跟 React 一起配合用的第三方狀態管理套件
- 透過 Redux 嚴格的編寫程序（Actions, Reducers, Store）
    - 只有一個 store，來管理 application 裡面全部的 state/status
    - actions 回傳 action type 跟要做的事情
    - reducer 像是 store 的守門員，也在 reducer 裡面定義 initial state
- 當 action 觸發 `store.dispatch()` 進入 reducer 去修改 store 裡面的 state 時候，因為 React components 有 subscribe 到 store，所以當傳進該 component 的 state/props 被更新時，該 components 會收到通知，然後接收新個 state/props 再改變自己的 UI
- my understanding is that you **dispatch** a function, the function returns an **action** (plain object including action type and payload), and the action type is matched with the action.type defined within **reducer**, in order for the reducer to modify the desired state inside the **store**
<img src="https://i.imgur.com/3aIxHAh.png" width="400x" />

#### --- Axios ---
- 用來處理 request API 的函式庫（eg. HTML methods `GET` `PATCH` ）
#### --- Redux Thunk ---
- 因為 Redux actions 本身都是同步的，每次觸發 action 時，state 都會馬上被更新，所以透過 Redux-Thunk 這個 middleware 來協助 Redux 處理 action 函數裡 request 非同步的問題
- 原本 action creator 都是回傳一個action object，透過 redux-thunk，action creator 可以傳回一個 function，而這個 function 就是 thunk
- (eg. 抓 Hero List and Profile 的 HTML request)
#### --- Redux Logger ---
- 透過 redux logger 在開發過程中協助測試觸發的 actions，可以看 `prev state` 跟 `next state`
- 當 applyMiddleware 傳入多個 middlewares 時，logger 必須放在最後一個，這表示在 dispatch 後會先做 log，而不會受到其他 middleware 影響
```javascript=
const store = createStore(rootReducer, (applyMiddleware(thunk,logger));
```

### 程式碼中寫註解的原則
因為這是算是個人開發的專案，我也把每次的個人專案當作練習的機會，所以在程式碼中寫註解的原則：
1.  這次比較特別的是，是我第一次用 Redux 來管理 React 的狀態，所以會用一寫註解，來提醒自己 code 的原理，也幫助我更深入了解整個 Redux 的 flow
2.  每種 coding 的寫法都有該命名，我會加入一行簡單的註解，提醒自己這種寫法的名字
```javascript=
// ES6 destructure to increase readability
const { setID, remoteHeroes, currentHeroID } = this.props;
```
```javascript=
// pass state/status from reducer, 
// so this componenet can access it as props
function mapStateToProps(state) {
  return {
    remoteHeroes: state.remoteHeroes
  }
}
```
3. 在 CSS 裡面，我會加一個 `media query` 的分隔線，增加檔案的可讀性，不然 CSS 裡面太多行數，很容易眼花撩亂
```CSS=
/* ================
media query
================ */
```

### 困難以及解決的方法
#### --- Redux: steep learning curve
- 之前用 React 開發個人專案的時候，就在掙扎應該要用 Redux 還是 Reaxt 自己官方的 Context API/Hooks，同時看到 **Redux** 創辦人之一 **Dan Abramov** 發表了 [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) 的文章跟他對於 [Context API 的看法](https://twitter.com/dan_abramov/status/1046151145796890624)，我判斷說以我 [eyesSee](https://github.com/crystalmaro/eyesSee) 專案的規模，Context API 綽綽有餘（*説實話：我當初在學 Redux 的過程，看了兩天覺得學習曲線好高，時程也很趕，~~就先放棄~~ 就直接用 Context API 來管理狀態*）:sweat_smile:
- 但那時候跟 Henry 聊的時候，得知 Redux 更適合大型的開發，內部公司的分工方式也會有人專門管理 state、有人專門管理 components。在談話過程中我說了兩三遍（我是認真的）：
    > 我今天晚上回去學 Redux！
- 一開始起步就花了三天（我禮拜四、禮拜五、禮拜天都在研究 Redux）在過程中還把架好的環境砍掉重練兩次
    1. `create-react-app` 
    2. 把之前專案自己裝的 webpack `package.json` 拿來 `npm init`
- 透過這個 hero 專案，我是抱著我要把 Redux 學起來的精神在完成的，不只是為了自己，也是為了如果有機會進入 [Hahow](https://hahow.in/)，可以更快跟內部銜接上
#### --- Deployment
- 因為 repo 都 push 到 GitHub 上，就想說直接用它們提供的 GitHub Page 來呈現 Demo，但是 `npm build` push 到 gh-pages 之後，[畫面都是白色的](https://crystalmaro.github.io/hero-redux/public/index.html)，上網看了 [將create-react-app佈署到GitHub Pages](https://medium.com/@aaa24295234/%E5%B0%87create-react-app%E4%BD%88%E7%BD%B2%E5%88%B0github-pages-1a7ba468861a) 後，重新測試，[畫面還是白色的](https://crystalmaro.github.io/hero-redux/public/index.html) 
- 後來因為覺得自己在 deploy 上花了兩個小時太久了，就利用 **Netlify** 來部署 demo page 
- 部署到 Netlify 上後，一開始還抓不到 hero profile，打開 developer tool console 看了之後發現 api url 一定要 https 不能 http。回去看[文件](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)，發現在 [我們所提供的資料及 API](https://github.com/hahow/hahow-recruit/blob/master/frontend.md#%E6%88%91%E5%80%91%E6%89%80%E6%8F%90%E4%BE%9B%E7%9A%84%E8%B3%87%E6%96%99%E5%8F%8A-API) 那邊只有`Patch Hero's Profile [PATCH]` 是 https，其他的都是 http。但往上看 [頁面需求](https://github.com/hahow/hahow-recruit/blob/master/frontend.md#%E9%A0%81%E9%9D%A2%E9%9C%80%E6%B1%82) 卻又都是 https。（**請問這是陷阱還是打錯字？**）


- 其實當我有時間的時候，我真的要來研究 GitHub Page 部署怎麼回事，我在想有可能是我寫程式的方法，或是 build 跟 deploy 的方法有問題，但目前先到這裡。
#### --- CSS Flexbox 
- 因為 hero 能力值 object 裡面的 key 是英文，然後 value 的數字有個位數也有單位數，造成大家的寬度不一樣（INT vs. LUK）（10 vs. 5），所以不管用 Flexbox 的 `justify-content` : `space-around`, `space-evenly`, `space-between`, 都沒有辦法讓東西完美地垂直對齊
（如圖一：當藍色的尺對其到第一個`-`，下面三個`-`都會跟尺有一點點空隙）

<img src="https://i.imgur.com/NWT2wyJ.png" width="300x" />

- **Solution**: 幫 key (STR) 跟 value (10) 在 CSS 裡面都加固定的`width` and `text-align: center`, 這樣 `justify-content` 就會公平的對待每個 child element

<img src="https://i.imgur.com/d8Qo7Pk.png" width="300x" />


```CSS=
width: 50px;
text-align: center;
border: 1px solid blue;  /*這裡的 border 只是用來 debug 的*/
```

---

## 加分
- [x] 程式的可讀性與可維護性
- [ ] 使用 CSS framework（*這次把精力全神貫注在 Redux 上面，但是 [styled-components](https://www.styled-components.com/) 是我下一個想要 pick up 的技術*）
- [x] 任何你覺得可以讓網頁變得更 fancy 或是很酷的事情

| | 
|-|
|![](https://i.imgur.com/cOVJkoE.gif)| 
- Heroes 的個別入場
    - RWD 直排的入場就從 Daredevil 到 Hulk，剛好反過來
    - 每個 hero 是透過不同秒數的 animation entry delay
- 能力值從小到大的 render 呈現
- 非同步的 loading animation：
    - 切換不同 hero 能力值
    - 按 `儲存`  更新該 hero 能力值
- 當任何按鈕（`+` `-` `儲存` ）不能按的時候
    - 該按鈕會變灰色
    - cursor 從 `pointer` 變成 `not-allowed`
- 能按的東西，hover 到都會有相對的使用者回饋
    - scale bigger
    - cursor
    
    
## 補充
(這是我昨天睡覺想到的東西，但為了公平起見，不再改 code，但還是想表達我意識到的東西
### Hero 入場 Animation
- 在桌機上 hero 是從左排到右（hero ID 1 -> 4），但我的 animation 入場順序卻是從右到左（hero ID 1 <- 4）
- 問題：抓資料會是（hero ID 1 -> 4）這個順序抓，會造成畫面上原本預計應該第一個出場的 hero 4 會變成最後一個出場
- 解決方法：用 if 去判斷說，當 hero array length = 4 的時候，再開始跑 hero 們的入場動畫
### URL
- 雖然頁面需求只有說『並且不因切換連結重新render』，沒有說按 ’上一頁' 的時候要顯示前一個 hero profile 的生命值，但照理說以一個 SPA 為主，這還是應該要到的事情
- 問題：我現在換網址（heroes/1 -> heroes/2）的機制是直接把 hero ID 透過 React Router 硬塞到 url 裡面，所以按 '上一頁'，網址會是上一個網址沒錯，但 hero profile 就是空的
- 解決：點擊 hero card 的時候把該 hero ID 帶到網址裡面，然後抓 hero profile 的方式是先去抓 url heroes/ 後面的 param，再用那 param 的數字去抓 hero 生命值
