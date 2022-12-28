import React from "react";
import { Header } from "./Header";
import { KanaComponent } from "./KanaComponent";
import { KanaTable } from "./KanaTable";
import { KanaToggle } from "./KanaToggle";

function App() {
  const [showKana, setShowKana] = React.useState("");
  const [kana, setKana] = React.useState("ひらがな");

  function katakanaToHiragana(str: string): string {
    return str.replace(/[\u30a1-\u30f6]/g, function (match) {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
  }

  const onKanaClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.dataset.value) {
      const kana = e.currentTarget.dataset.value;
      setShowKana(kana);
      let audioFile;
      kana == "ひらがな"
        ? (audioFile = kana)
        : (audioFile = katakanaToHiragana(kana));
      const audio = new Audio(`./audio/${audioFile}.mp3`);
      audio.play();
    }
  };

  const hiraganaGyoList = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "ゆ", "よ"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "を", "ん"],
  ];
  const katakanaGyoList = [
    ["ア", "イ", "ウ", "エ", "オ"],
    ["カ", "キ", "ク", "ケ", "コ"],
    ["サ", "シ", "ス", "セ", "ソ"],
    ["タ", "チ", "ツ", "テ", "ト"],
    ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    ["マ", "ミ", "ム", "メ", "モ"],
    ["ヤ", "ユ", "ヨ"],
    ["ラ", "リ", "ル", "レ", "ロ"],
    ["ワ", "ヲ", "ン"],
  ];
  let kanaGyoList = kana == "ひらがな" ? hiraganaGyoList : katakanaGyoList;

  return (
    <div className="App">
      <Header />
      <div className="p-2">
        <KanaToggle
          onHiraganaClick={() => {
            setKana("ひらがな");
          }}
          onKatakanaClick={() => {
            setKana("カタカナ");
          }}
          kana={kana}
        />
        <KanaTable
          kanaGyoList={kanaGyoList}
          showKana={showKana}
          onKanaClick={onKanaClick}
        />
        <KanaComponent showKana={showKana} kana={kana} />
      </div>
    </div>
  );
}

export default App;
