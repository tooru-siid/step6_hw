(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        console.log(e);
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
        currentCount = parseInt($counter.textContent);
        if(currentCount > 10){
            $counter.style.color = `rgb(${currentCount * 20 % 255}, 100, 150)`; // 色変化
            $counter.style.fontSize = `${24 + currentCount * 1}px`; // サイズアップ
            $counter.style.fontWeight = (currentCount % 2 === 0) ? "bold" : "normal"; // 太字切り替え
        }
        else if(currentCount < -10){
            $counter.style.color = `rgb(150, 100, ${currentCount * 20 % 255})`; // 色変化
            $counter.style.fontSize = `${24 - currentCount * 1}px`; // サイズアップ
            $counter.style.fontWeight = (currentCount % 2 === 0) ? "bold" : "normal"; // 太字切り替え
        }
    }
    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }

})();