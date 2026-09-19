"use client";
import Link from "next/link";

export default function Home() {
 return <main className="shell"><p className="eyebrow">TABLETOP PARTY APP</p><h1 className="title">GROGGY<br/>GAMES</h1><p className="brand-subtitle">グロッキーゲーム</p><p className="lead">スマホはテーブルに置いたまま。みんなで声を出して遊ぼう！</p><div className="stack section"><Link className="card game-card" href="/bomb"><small>GAME 01</small><strong>💣 爆弾ゲーム</strong><span>早口言葉を言ってボールを回せ！</span></Link><Link className="card game-card" href="/ultimate-choice"><small>GAME 02</small><strong>😈 究極の2択</strong><span>少数派だけが生き残る！</span></Link></div><div className="stack section"><Link className="button secondary" href="/players">👥 参加者管理</Link><Link className="button secondary" href="/history">🗂️ 出題履歴</Link></div></main>;
}
