# 爆弾ゲームで使用する音源

音源がなくてもゲームロジックは停止しません。以下のMP3を用意すると音声が有効になります。

| 用途 | 推奨ファイル名 | 保存先 | 用意する音 |
| --- | --- | --- | --- |
| 導火線・ticking | `ticking.mp3` | `bomb/ticking/ticking.mp3` | 継ぎ目なくループできる一定テンポの導火線・時計音 |
| 爆発 | `explosion.mp3` | `bomb/explosion/explosion.mp3` | 短く明確で、敗者が分かる大きな爆発音 |
| リバース指令 | `reverse.mp3` | `bomb/commands/reverse.mp3` | 「リバース！」という聞き取りやすい声 |
| 1人飛ばし指令 | `skip-one.mp3` | `bomb/commands/skip-one.mp3` | 「1人飛ばし！」という聞き取りやすい声 |
| 2人飛ばし指令 | `skip-two.mp3` | `bomb/commands/skip-two.mp3` | 「2人飛ばし！」という聞き取りやすい声 |
| 2回指令 | `repeat-two.mp3` | `bomb/commands/repeat-two.mp3` | 「お前は2回じゃ！」という聞き取りやすい声 |
| 3回指令 | `repeat-three.mp3` | `bomb/commands/repeat-three.mp3` | 「お前は3回じゃ！」という聞き取りやすい声 |
| フェイク・おなら | `fart.mp3` | `bomb/fake/fart.mp3` | 短いおなら系の効果音 |
| フェイク・不発 | `dud.mp3` | `bomb/fake/dud.mp3` | 不発、スカッとした短い効果音 |
| フェイク・ラッパ | `fanfare.mp3` | `bomb/fake/fanfare.mp3` | 短いラッパまたはパフパフ系の効果音 |
| ルーレット抽選中 | `drumroll.mp3` | `bomb/roulette/drumroll.mp3` | ループ可能な「ダララララ……」というドラムロール |
| ルーレット決定 | `decision.mp3` | `bomb/roulette/decision.mp3` | 発表の瞬間に鳴る短い「ダン！」という決定音 |

すべてのパスは `public/sounds/` からの相対パスです。
