# 7aDy.bug 官方網站

淡江大傳系第 41 屆畢製行銷組「7aDy.bug」的對外形象網站。
概念：**「我們幫品牌 Debug」**——瓢蟲（ladybug）× Debug，找出問題、解決問題。
純靜態網站（HTML / CSS / vanilla JS），無任何框架、無需付費、無需伺服器。

## 🟢 已上線

- **網站名稱**：7aDy.bug
- **公開網址**：https://meganlin0000.github.io/7adybug/
- **原始碼 repo**：https://github.com/Meganlin0000/7adybug （GitHub Pages）

### 之後要改內容 / 更新網站

在 `7adybug-site/` 資料夾裡改好檔案後，執行：

```bash
git add -A
git commit -m "更新內容"
git push
```

推上去後 1–2 分鐘，網站會自動重新部署。

## 檔案結構

```
7adybug-site/
├── index.html      首頁（品牌主張、三步驟、數據）
├── about.html      團隊（故事、七位成員、技能、經歷）
├── works.html      作品（視覺 / 競賽 / 新聞 / 影音 / 社群）
├── services.html   服務與方案（六大服務、流程、三種預算方案）
├── contact.html    聯絡（表單 + Email/IG/電話）
├── styles.css      全站樣式（設計系統）
├── script.js       互動（游標、打字機、滾動浮現、數字跳動）
└── assets/         之後放照片 / logo 的資料夾
```

## 怎麼免費上線（三選一，都 0 元）

1. **Netlify Drop（最快，拖曳即可）**
   到 https://app.netlify.com/drop ，把整個 `7adybug-site` 資料夾拖進去，馬上得到一個網址。之後可在設定改成自訂網域。
2. **GitHub Pages**：把資料夾上傳到一個 GitHub repo → Settings → Pages → 選 main 分支 → 完成。
3. **Cloudflare Pages / Vercel**：連結 GitHub repo 或直接上傳，免費方案即可。

## 成員資料

- **照片**：已從你們的履歷 PDF 抽出七張原始人像，裁成統一比例放在 `assets/team/01.jpg`～`07.jpg`。要換照片，直接覆蓋同名檔即可（建議 4:5 直式）。
- **個人介紹 bio 是初稿**：全部寫在 `members.js`，每位成員的 `bio` 與 `focus`（專長）都能自由改寫成本人想呈現的版本。改完存檔、push 就更新。
- **點進成員**：團隊頁每張照片都可點進 `member.html`，看到大頭照＋角色＋介紹＋專長＋上一位/下一位。
- **作品圖 / 影片**：`works.html` 目前是文字列表。之後可加作品縮圖或 IG/YouTube 連結。
- **聯絡表單**：`contact.html` 的表單用 **formsubmit.co** 寄到 `77ady.bug@gmail.com`。
  ⚠️ **第一次有人送出表單時，Gmail 會收到一封 formsubmit 的啟用確認信，點一下啟用後，之後的訊息才會正常寄達。**

## 我為了「誠實」做的一個決定

履歷 PDF 裡的「預算方案」頁，是用其他組別（怪本室、七曜計劃、HERstory…）過去替品牌做的案例，來示意各價位能做到什麼。
放到你們自己的官網上，若直接把那些案例當成 7aDy.bug 的作品會造成誤解，所以我把「預算方案」改寫成**乾淨的三種價位級距 + 交付內容**（不掛別組的品牌/IG）。作品頁只放你們自己真正做過的東西。
（這跟我先前批評 STONE9「合作對象頁誤導」是同一個原則。）
```
