(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
            $counter.textContent = 0;
            $counter.style.color = `rgb(0, 0, 0)`; // 色
            $counter.style.fontSize = `${48}px`; // サイズアップ
            $counter.style.fontWeight = "normal"; // 太字切り替え
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);

})();