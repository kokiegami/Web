document.addEventListener("DOMContentLoaded", function () {
    // 監督情報を追加（公式サイトから選手名とURLを取得）
    const players = {
        "三浦 大輔": "https://www.baystars.co.jp/players/detail/11034",
        "阿部 慎之助": "https://www.giants.jp/players/detail/2001006/",
        "藤川 球児": "https://hanshintigers.jp/data/staff/2025/22.html",
        "新井 貴浩": "https://www.carp.co.jp/team25/member/k25.html",
        "井上 一樹": "https://www.dragons.jp/teamdata/coach/coach.php?num=99",
        "髙津 臣吾": "https://www.yakult-swallows.co.jp/players/detail/10906",
        "小久保 裕紀": "https://www.softbankhawks.co.jp/team/player/detail/2025_00001497.html",
        "新庄 剛志": "https://media.fighters.co.jp/player/1/",
        "吉井 理人": "https://www.marines.co.jp/team/player/detail/2025_00001092.html",
        "西口 文也": "https://www.seibulions.jp/team/player/detail/2025_00001604.html",
        "岸田 護": "https://www.buffaloes.co.jp/team/player/detail/2025_00001069.html",
        "三木 肇": "https://www.rakuteneagles.jp/team/player/detail/2025_00001280.html",

    };

    // プルダウンメニューに監督を追加
    const dropdown = document.getElementById("player-dropdown");
    for (let player in players) {
        let option = document.createElement("option");
        option.value = players[player];
        option.textContent = player;
        dropdown.appendChild(option);
    }

    // 監督ページに遷移する関数
    window.goToPlayerPage = function () {
        const selectedValue = dropdown.value;

        if (selectedValue) {
            window.location.href = selectedValue;
        } else {
            alert("選手を選択してください！");
        }
    };
});
