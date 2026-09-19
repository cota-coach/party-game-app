# 爆弾ゲームで使用する音源

音源がなくてもゲームロジックは停止しません。以下のMP3を用意すると音声が有効になります。

| 用途 | 推奨ファイル名 | 保存先 | 用意する音 |
| --- | --- | --- | --- |
| 導火線・ticking | `ticking.mp3` | `bomb/ticking/ticking.mp3` | 継ぎ目なくループできる一定テンポの導火線・時計音 |
| 時限タイマー | `timer.mp3` | `bomb/ticking/timer.mp3` | tickingと同時にループする、主張しすぎないカチカチ音 |
| 爆発 | `explosion.mp3` | `bomb/explosion/explosion.mp3` | 短く明確で、敗者が分かる大きな爆発音 |
| 爆発後の敗者演出 | `fail-trombone.mp3` | `bomb/explosion/fail-trombone.mp3` | 「ファン、ファン、ファ〜ン」と音程が下がるsad trombone音 |
| リバース指令 | `reverse.mp3` | `bomb/commands/reverse.mp3` | 「リバース！」という聞き取りやすい声 |
| 1人飛ばし指令 | `skip-one.mp3` | `bomb/commands/skip-one.mp3` | 「1人飛ばし！」という聞き取りやすい声 |
| 2人飛ばし指令 | `skip-two.mp3` | `bomb/commands/skip-two.mp3` | 「2人飛ばし！」という聞き取りやすい声 |
| 2回指令 | `repeat-two.mp3` | `bomb/commands/repeat-two.mp3` | 「お前は2回じゃ！」という聞き取りやすい声 |
| 3回指令 | `repeat-three.mp3` | `bomb/commands/repeat-three.mp3` | 「お前は3回じゃ！」という聞き取りやすい声 |
| フェイク・おなら1 | `fart-1.mp3` | `bomb/fake/fart-1.mp3` | 短いおなら系の効果音 |
| フェイク・おなら2 | `fart-2.mp3` | `bomb/fake/fart-2.mp3` | 1とは違う短いおなら系の効果音 |
| フェイク・パフパフ | `fanfare.mp3` | `bomb/fake/fanfare.mp3` | 短くコミカルな「パフパフ」音 |
| ルーレット | `drumroll.mp3` | `bomb/roulette/drumroll.mp3` | ドラムロールから最後の「ダン！」まで入った音（決定表示は約5.2秒） |

すべてのパスは `public/sounds/` からの相対パスです。
