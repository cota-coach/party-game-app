"use client";

import Link from "next/link";

export default function Home() {
  return <main className="home-shell">
    <div className="texture" aria-hidden="true" />
    <div className="uv-splatter splatter-one" aria-hidden="true" />
    <div className="uv-splatter splatter-two" aria-hidden="true" />
    <div className="home-tape tape-one" aria-hidden="true" />
    <div className="home-tape tape-two" aria-hidden="true" />
    <span className="home-graffiti graffiti-one" aria-hidden="true">PLAY<br />LOUD</span>
    <span className="home-graffiti graffiti-two" aria-hidden="true">NO<br />RULES</span>
    <header className="home-hero">
      <p className="home-kicker"><span /> TONIGHT&apos;S PLAYGROUND / TABLE MODE</p>
      <h1><span>GROGGY</span><strong>GAMES</strong></h1>
      <p className="home-tagline">Play hard. Laugh harder.<br /><em>Get groggy.</em></p>
      <p className="home-lead">スマホはテーブルに置いたまま。<br />みんなで声を出して遊ぼう！</p>
    </header>
    <section className="home-games" aria-label="ゲームを選ぶ">
      <Link className="home-game bomb-tile" href="/bomb"><small>01 / DANGER ZONE</small><b>BOMB<br />GAME</b><span>早口言葉を言って、爆発する前にボールを回せ！</span><i>爆弾ゲームを始める ↗</i></Link>
      <Link className="home-game choice-tile" href="/ultimate-choice"><small>02 / NO WRONG ANSWERS</small><b>ULTIMATE<br />CHOICE</b><span>究極の2択。少数派だけが生き残る！</span><i>究極の2択を始める ↗</i></Link>
    </section>
    <nav className="home-tools" aria-label="管理メニュー"><Link href="/players"><span>PEOPLE</span>👥 参加者管理 ↗</Link><Link href="/history"><span>ARCHIVE</span>🗂️ 出題履歴 ↗</Link></nav>
    <footer className="home-footer"><span>GROGGY GAMES SYSTEM / MADE FOR THE TABLE</span><span>∞ PLAY UNTIL YOU CAN&apos;T</span></footer>
  </main>;
}
