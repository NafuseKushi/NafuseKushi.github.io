fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);
fetch("right-navi.html")
    .then((response) => response.text())
   .then(html => {
    document.getElementById("right-navi").innerHTML = html;
   const renderSearch = () => {
      if (window.google && google.search && google.search.cse && google.search.cse.element) {
        google.search.cse.element.render({
          div: 'gcse-search-container', // 描画させる親要素のID
          tag: 'search'                 // 検索ボックスと結果を表示 ('searchbox-only' でも可)
        });
      }
    };
    // 3. すでにGoogleのオブジェクトが存在する場合は即時描画、まだなら準備完了後に実行
    if (window.google && google.search && google.search.cse) {
      renderSearch();
    } else {
      // 描画コールバックをグローバルに登録
      window.__gcse = {
        parsetags: 'explicit', // 自動パースを無効化し、手動描画に切り替える
        callback: renderSearch
      };

      // スクリプト未読み込みの場合のみ動的読み込み
      if (!document.querySelector('script[src*="cse.google.com"]')) {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=f4580689ba19f4b9b';
        script.async = true;
        document.head.appendChild(script);
      }
    }
  });
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);
