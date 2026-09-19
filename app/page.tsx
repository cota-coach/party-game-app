"use client";
import Link from "next/link";
import { useState } from "react";
import { storage } from "@/lib/storage";

export default function Home() {
 const [message,setMessage]=useState("");
 const reset=()=>{if(confirm("出題履歴をリセットしますか？\n参加者の名前は削除されません。")){storage.resetPromptHistory();setMessage("出題履歴をリセットしました。");}};
 return <main className="shell"><p className="eyebrow">TABLETOP PARTY APP</p><h1 className="title">PARTY<br/>GAME</h1><p className="lead">スマホはテーブルに置いたまま。みんなで声を出して遊ぼう！</p><div className="stack section"><Link className="card game-card" href="/bomb"><small>GAME 01</small><strong>💣 爆弾ゲーム</strong><span>早口言葉を言ってボールを回せ！</span></Link><div className="card game-card" aria-disabled="true"><small>COMING NEXT</small><strong>😈 究極の2択</strong><span>次回実装予定</span></div></div><div className="stack section"><Link className="button secondary" href="/players">👥 参加者管理</Link><button className="button secondary" onClick={reset}>🔄 出題履歴をリセット</button>{message&&<p className="notice" role="status">{message}</p>}</div></main>;
}
