import type { UltimateChoice } from "../types/ultimate-choice";
// 動作確認用の仮データ。本番のお題は、この配列へ同じ形式で追加・差し替えできる。
export const ULTIMATE_CHOICES: UltimateChoice[] = [
 {id:"family-01",optionA:"一生 夏",optionB:"一生 冬",categories:["季節","生活"],level:"family"},
 {id:"family-02",optionA:"空を飛べる",optionB:"海の中で暮らせる",categories:["能力","冒険"],level:"family"},
 {id:"family-03",optionA:"毎日 カレー",optionB:"毎日 ラーメン",categories:["食べ物"],level:"family"},
 {id:"family-04",optionA:"犬と話せる",optionB:"猫と話せる",categories:["動物","能力"],level:"family"},
 {id:"family-05",optionA:"透明人間になる",optionB:"時間を止める",categories:["能力"],level:"family"},
 {id:"adult-01",optionA:"給料は高いが休みなし",optionB:"給料は低いが週休4日",categories:["仕事","生活"],level:"adult"},
 {id:"adult-02",optionA:"一生 お酒禁止",optionB:"一生 甘い物禁止",categories:["飲食"],level:"adult"},
 {id:"adult-03",optionA:"過去の失敗を1つ消す",optionB:"未来を1日だけ見る",categories:["人生","時間"],level:"adult"},
 {id:"adult-04",optionA:"都会の狭い家",optionB:"田舎の大きな家",categories:["住まい","生活"],level:"adult"},
 {id:"adult-05",optionA:"本音しか言えない",optionB:"建前しか言えない",categories:["人間関係"],level:"adult"},
 {id:"hard-01",optionA:"自分だけ真実を知る",optionB:"みんなと同じ嘘を信じる",categories:["価値観"],level:"hard"},
 {id:"hard-02",optionA:"才能はあるが努力できない",optionB:"才能はないが努力を続けられる",categories:["人生","価値観"],level:"hard"},
 {id:"hard-03",optionA:"嫌われても正直に生きる",optionB:"好かれるために自分を隠す",categories:["人間関係","価値観"],level:"hard"},
 {id:"hard-04",optionA:"結果だけ評価される",optionB:"努力だけ評価される",categories:["仕事","価値観"],level:"hard"},
 {id:"hard-05",optionA:"大切な記憶を失う",optionB:"新しい思い出を作れない",categories:["人生","記憶"],level:"hard"},
];
