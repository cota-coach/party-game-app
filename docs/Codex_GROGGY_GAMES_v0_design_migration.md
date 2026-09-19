# GROGGY GAMES｜v0デザイン移植 Codex実装指示

## 目的
既存の `party-game-app` に、`v0-reference/` に保存したv0 v3のUI・グラフィック・モーションを移植する。

**v0-referenceはデザイン／演出の参照実装であり、本番アプリではない。既存ゲームをv0アプリで置き換えないこと。**

## 最初に読む
- `/AGENTS.md`
- `/docs/01_REQUIREMENTS.md`
- `/docs/02_ARCHITECTURE.md`
- `/docs/03_UI_FLOW.md`
- 現在のHOME/Bomb/Ultimate Choice/参加者/履歴/localStorage/audio/tests
- `/v0-reference/app/page.tsx`
- `/v0-reference/app/globals.css`

## 絶対に維持する既存機能
Bombのゲーム進行、爆発時刻決定、absolute explosion deadline、タイマー、特殊指令と抽選・重み・間隔、repeat2/repeat3保護、フェイク音、start-holder roulette、AudioManager、ticking/timer/explosion/fail-trombone、参加者管理、出題履歴、localStorage、早口言葉データ、Ultimate Choiceのレベル選択・通常進行・決定戦・履歴。

`lib/bomb-game.ts` 等のコアロジックはUI移植だけを理由に変更しない。

## アートディレクション
- HOME = UV NIGHT PARTY。暗い紫＋ピンク＋蛍光グリーン、UVペイント、ステッカー、落書き、テープ、ノイズ、インク飛沫。v0 v3の高密度なイベントフライヤー感を基準にする。
- BOMB = RED / BLACK PSYCHEDELIC DANGER。赤黒白、波形、錯視、distortion、warning、pulse、shake。早口言葉の可読性を最優先。
- ULTIMATE CHOICE = ACID YELLOW / BLACK / WHITE PUNK POP COLLAGE。蛍光黄、黒、白、ピンク、傾いたA/Bカード、VS、スタンプ、紙のズレ、コピー機的質感。

3画面を同じデザインに統一しない。同じGROGGY GAMESの別々の部屋として扱う。

## HOME
v0 HOMEのデザインを既存HOMEへ移植。ただしBomb/Ultimate Choice/参加者管理/履歴管理など既存導線を削除しない。

## BOMB
既存フローを維持し、遊び方・設定・早口言葉・roulette・ゲーム中・特殊指令・fake・爆発へ赤黒デザインを適用。説明/設定は操作性優先。

### 爆発時刻を絶対に漏らさない
禁止：countdown、progress bar、時間で短くなる導火線、残り時間連動の色・波形速度・pulse速度・激しさ等。v0の波形は残り時間と無関係なループまたはイベント反応にする。

### 特殊指令
既存イベントにwarning overlay、短いshake/flash/distortion等を接続してよい。ただし早口言葉を長時間隠さない。repeat2/repeat3の意味補助表示は維持。

### 爆発
v0のBANG、flash、screen shake、radial graphics、shockwave、fragments、distortionを**既存explosion event**へ接続する。v0の`TRIGGER SIGNAL`はデモ用なので本番へ持ち込まない。既存explosion.mp3/fail-trombone等のタイミングを不必要に変更しない。

## Ultimate Choice
既存FAMILY/ADULT/HARD、複数選択、prompt data、`usedUltimateChoices`、通常出題、「次の究極の2択」「決定戦に行く」、決定戦、人間による多数/少数判断を維持。v0のダミー文言は本番データへ置換。A/BカードとVSに短いcard-slap系モーションを接続してよい。

## v0素材
v0 page.tsx内の外部Vercel Blob画像は参考画像依存なので、そのまま恒久依存として採用しない。CSS/SVGで再現可能な装飾はCSS/SVG優先。必要な正当なローカル素材だけpublicへ整理。参考画像そのものをコピーしない。

## 性能
スマホ前提。CSS transform/opacity/gradient/SVG/短命DOMを優先。大量blur/filter、巨大画像、大量particle DOM、不要なRAF、別画面の常時animationを避ける。爆発DOMは必要時だけ生成し終了後片付ける。`prefers-reduced-motion`も考慮。

## UX
スマホをテーブル中央に置き複数人が見る。主要文字を大きく、早口言葉/A/Bを遠くから読めるようにし、強いcontrast、大きいtap領域、誤タップ防止、状態の即時認識を優先。

## 禁止
v0で既存アプリ丸ごと置換、Bombコア再実装、deadline変更、AudioManagerの不要な再設計、Ultimate Choiceルール変更、自動投票追加、参加者/履歴削除、localStorageの不要変更、ダミーデータ本番採用、大規模リファクタ、不要依存大量追加。

## 実装順
1. repo/AGENTS/docs/v0-referenceを調査
2. 必要最小限の共通CSS/装飾/animation基盤
3. HOME
4. Ultimate Choice
5. Bomb
6. existing explosion eventへ爆発演出接続
7. mobile/performance
8. regression

## Bomb音声
現在の `public/sounds/bomb/` 構成とAudioManagerをUI移植だけを理由に変更しない。未解決の音声問題を見つけた場合は今回と混ぜて大規模修正せず報告する。

## 検証
存在する場合：
- `npm test`
- `npm run typecheck`
- `npm run build`
- `git diff --check`

HOME全導線、Bomb全フロー/音声/cleanup、Ultimate Choice level/prompt/next/final/history/exhaustion、participants/usedTongueTwisters/usedUltimateChoices永続化を回帰確認。

## 完了報告
変更ファイル、各画面へ移植したv0表現、爆発演出接続、素材処理、追加依存、性能対策、既存ロジック変更有無、テスト結果、残課題、実機確認ポイントを報告。

## 完成条件
派手なv0の世界観と既存ゲーム機能が同時成立し、爆発時刻は漏れず、スマホで重すぎず、Vercelへデプロイ可能であること。

**完成済みのゲームへGROGGY GAMESの皮膚と動きを与える。ゲームを作り直さない。**
