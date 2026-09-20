import type { DifficultySetting, TongueTwister } from "../types/bomb";

export const TONGUE_TWISTERS: TongueTwister[] = [
  { id: "TT001", text: "炙りカルビ 炙りカルビ 炙りカルビ", reading: "あぶりかるび あぶりかるび あぶりかるび", difficulty: "family" },
  { id: "TT002", text: "生麦 生米 生卵", reading: "なまむぎ なまごめ なまたまご", difficulty: "family" },
  { id: "TT003", text: "赤巻紙 青巻紙 黄巻紙", reading: "あかまきがみ あおまきがみ きまきがみ", difficulty: "family" },
  { id: "TT004", text: "隣の客は よく柿食う客だ", reading: "となりのきゃくは よくかきくうきゃくだ", difficulty: "family" },
  { id: "TT005", text: "バナナの謎は まだ謎なのだぞ", reading: "ばななのなぞは まだなぞなのだぞ", difficulty: "family" },
  { id: "TT006", text: "カエルぴょこぴょこ 三ぴょこぴょこ 合わせてぴょこぴょこ 六ぴょこぴょこ", reading: "かえるぴょこぴょこ みぴょこぴょこ あわせてぴょこぴょこ むぴょこぴょこ", difficulty: "family" },
  { id: "TT007", text: "ママ豆まみれ、パパごままみれ", reading: "まままめまみれ ぱぱごままみれ", difficulty: "family" },
  { id: "TT008", text: "すももも桃も桃のうち", reading: "すもももももももものうち", difficulty: "family" },
  { id: "TT009", text: "パパ バナナ、ママ 生バナナ", reading: "ぱぱ ばなな まま なまばなな", difficulty: "family" },
  { id: "TT010", text: "子ガモも小ガメも米かむ子", reading: "こがももこがめもこめかむこ", difficulty: "family" },
  { id: "TT011", text: "にゃんこ 子にゃんこ 孫にゃんこ", reading: "にゃんこ こにゃんこ まごにゃんこ", difficulty: "family" },
  { id: "TT012", text: "赤カピバラ 青カピバラ 黄カピバラ", reading: "あかかぴばら あおかぴばら きかぴばら", difficulty: "family" },
  { id: "TT013", text: "この子なかなか カタカナ書けなかった", reading: "このこなかなか かたかなかけなかった", difficulty: "family" },
  { id: "TT014", text: "この寿司 少し酢がききすぎ", reading: "このすし すこしすがききすぎ", difficulty: "family" },
  { id: "TT015", text: "キャサリン キャラメル絡める", reading: "きゃさりん きゃらめるからめる", difficulty: "family" },
  { id: "TT016", text: "佐々木さん ササミ三皿", reading: "ささきさん ささみさんさら", difficulty: "family" },
  { id: "TT017", text: "ピザ屋のリサ リサ用ピザをピザ屋で予約", reading: "ぴざやのりさ りさようぴざをぴざやでよやく", difficulty: "family" },
  { id: "TT018", text: "カリフォルニアのカリカリカリフラワー", reading: "かりふぉるにあのかりかりかりふらわー", difficulty: "family" },
  { id: "TT019", text: "田中さん 高菜と魚を棚からとった", reading: "たなかさん たかなとさかなをたなからとった", difficulty: "family" },
  { id: "TT020", text: "奈良の奈々ちゃん 生なら奈良漬け", reading: "ならのななちゃん なまならならづけ", difficulty: "family" },
  { id: "TT021", text: "パン壁 パン壁 パン壁", reading: "ぱんかべ ぱんかべ ぱんかべ", difficulty: "family" },
  { id: "TT022", text: "赤炙りカルビ 青炙りカルビ 黄炙りカルビ", reading: "あかあぶりかるび あおあぶりかるび きあぶりかるび", difficulty: "family" },
  { id: "TT023", text: "すごい具合悪い ズワイガニ", reading: "すごいぐあいわるい ずわいがに", difficulty: "family" },
  { id: "TT024", text: "投げやりな やり投げ", reading: "なげやりな やりなげ", difficulty: "family" },
  { id: "TT025", text: "ブタがブタをぶったら、ぶたれたブタがぶったブタをぶった", reading: "ぶたがぶたをぶったら ぶたれたぶたがぶったぶたをぶった", difficulty: "family" },
  { id: "TT026", text: "右耳にミニニキビ、左耳にもミニニキビ", reading: "みぎみみにみににきび ひだりみみにもみににきび", difficulty: "standard" },
  { id: "TT027", text: "東京特許許可局", reading: "とうきょうとっきょきょかきょく", difficulty: "standard" },
  { id: "TT028", text: "赤パジャマ 青パジャマ 黄パジャマ", reading: "あかぱじゃま あおぱじゃま きぱじゃま", difficulty: "standard" },
  { id: "TT029", text: "バスガス爆発", reading: "ばすがすばくはつ", difficulty: "standard" },
  { id: "TT030", text: "坊主が屏風に上手に坊主の絵を描いた", reading: "ぼうずがびょうぶにじょうずにぼうずのえをかいた", difficulty: "standard" },
  { id: "TT031", text: "七人の忍者、七人とも新人忍者", reading: "しちにんのにんじゃ しちにんともしんじんにんじゃ", difficulty: "standard" },
  { id: "TT032", text: "新春シャンソンショー", reading: "しんしゅんしゃんそんしょー", difficulty: "standard" },
  { id: "TT033", text: "打者 走者 勝者", reading: "だしゃ そうしゃ しょうしゃ", difficulty: "standard" },
  { id: "TT034", text: "裏庭には二羽、庭には二羽ニワトリがいる", reading: "うらにわにはにわ にわにはにわにわとりがいる", difficulty: "standard" },
  { id: "TT035", text: "赤アロエ飴 青アロエ飴 黄アロエ飴", reading: "あかあろえあめ あおあろえあめ きあろえあめ", difficulty: "standard" },
  { id: "TT036", text: "この釘は引き抜きにくい釘だ", reading: "このくぎはひきぬきにくいくぎだ", difficulty: "standard" },
  { id: "TT037", text: "青巻紙 赤巻紙 黄巻紙", reading: "あおまきがみ あかまきがみ きまきがみ", difficulty: "standard" },
  { id: "TT038", text: "シャワー中の車掌が シャツを着る", reading: "しゃわーちゅうのしゃしょうが しゃつをきる", difficulty: "standard" },
  { id: "TT039", text: "シチュー死守しつつ 試食中", reading: "しちゅーししゅしつつ ししょくちゅう", difficulty: "standard" },
  { id: "TT040", text: "除雪車 除雪作業中", reading: "じょせつしゃ じょせつさぎょうちゅう", difficulty: "standard" },
  { id: "TT041", text: "シェフのジェフ シーフードシチュー試食中", reading: "しぇふのじぇふ しーふーどしちゅーししょくちゅう", difficulty: "standard" },
  { id: "TT042", text: "お綾や 親にお謝り", reading: "おあやや おやにおあやまり", difficulty: "standard" },
  { id: "TT043", text: "地図帳でチェジュ島さがし", reading: "ちずちょうでちぇじゅとうさがし", difficulty: "standard" },
  { id: "TT044", text: "社長、車掌に車庫で謝罪", reading: "しゃちょう しゃしょうにしゃこでしゃざい", difficulty: "hard" },
  { id: "TT045", text: "魔術師、手術中に手術室で魔術中", reading: "まじゅつし しゅじゅつちゅうにしゅじゅつしつでまじゅつちゅう", difficulty: "hard" },
  { id: "TT046", text: "この竹垣に竹立てかけたのは、竹立てかけたかったから", reading: "このたけがきにたけたてかけたのは たけたてかけたかったから", difficulty: "hard" },
  { id: "TT047", text: "生なまず 生なまこ 生なめこ", reading: "なまなまず なまなまこ なまなめこ", difficulty: "hard" },
  { id: "TT048", text: "骨粗しょう症 訴訟勝訴", reading: "こつそしょうしょう そしょうしょうそ", difficulty: "hard" },
  { id: "TT049", text: "ブラジル人のミラクルビラ配り", reading: "ぶらじるじんのみらくるびらくばり", difficulty: "hard" },
  { id: "TT050", text: "老若男女 骨粗しょう症", reading: "ろうにゃくなんにょ こつそしょうしょう", difficulty: "hard" },
  { id: "TT051", text: "赤いマグカップ 青い紙コップ 黄色い紙パック", reading: "あかいまぐかっぷ あおいかみこっぷ きいろいかみぱっく", difficulty: "hard" },
  { id: "TT052", text: "魔術師 魔術修業中", reading: "まじゅつし まじゅつしゅぎょうちゅう", difficulty: "hard" },
  { id: "TT053", text: "マサチューセッツ工科大学", reading: "まさちゅーせっつこうかだいがく", difficulty: "hard" },
  { id: "TT054", text: "キャバ嬢キャサリン キャラメルカクテル", reading: "きゃばじょうきゃさりん きゃらめるかくてる", difficulty: "adult" },
  { id: "TT055", text: "ラブホテルで ラブラブラブラドール", reading: "らぶほてるで らぶらぶらぶらどーる", difficulty: "adult" }
];

export function getAvailableTongueTwisters(difficulty: DifficultySetting, includeAdult: boolean, usedIds: readonly string[]) {
  return TONGUE_TWISTERS.filter((twister) => {
    if (usedIds.includes(twister.id)) return false;
    if (twister.difficulty === "adult") return includeAdult;
    return difficulty === "random" || twister.difficulty === difficulty;
  });
}
