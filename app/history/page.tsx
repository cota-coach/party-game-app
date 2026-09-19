"use client";

import Link from "next/link";
import { useState } from "react";
import { storage } from "@/lib/storage";

export default function HistoryPage() {
  const [message, setMessage] = useState("");

  const reset = (kind: "bomb" | "choice" | "all") => {
    const labels = { bomb: "爆弾ゲーム", choice: "究極の2択", all: "すべてのゲーム" };
    if (!confirm(`${labels[kind]}の出題履歴をリセットしますか？\n参加者の名前は削除されません。`)) return;
    if (kind === "bomb") storage.resetTongueTwisterHistory();
    if (kind === "choice") storage.resetUltimateChoiceHistory();
    if (kind === "all") storage.resetPromptHistory();
    setMessage(`${labels[kind]}の出題履歴をリセットしました。`);
  };

  return <main className="shell">
    <p className="eyebrow">PROMPT HISTORY</p>
    <h1>🗂️ 出題履歴</h1>
    <p className="muted">使用済みのお題だけをリセットします。参加者データは削除されません。</p>
    <div className="stack section">
      <button className="button secondary" onClick={() => reset("bomb")}>💣 爆弾ゲームの履歴をリセット</button>
      <button className="button secondary" onClick={() => reset("choice")}>😈 究極の2択の履歴をリセット</button>
      <button className="button danger" onClick={() => reset("all")}>すべての出題履歴をリセット</button>
      {message && <p className="notice" role="status">{message}</p>}
      <Link className="button secondary" href="/">HOMEへ戻る</Link>
    </div>
  </main>;
}
