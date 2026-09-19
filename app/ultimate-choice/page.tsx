"use client";
import Link from "next/link";
import { useState } from "react";
import { ULTIMATE_CHOICES } from "@/data/ultimate-choices";
import { storage } from "@/lib/storage";
import { drawUltimateChoice } from "@/lib/ultimate-choice";
import type { UltimateChoice, UltimateChoiceLevel } from "@/types/ultimate-choice";

type Phase="rules"|"settings"|"playing"|"final"|"exhausted";
const LEVELS:UltimateChoiceLevel[]=["family","adult","hard"];

export default function UltimateChoicePage(){
 const [phase,setPhase]=useState<Phase>("rules"),[levels,setLevels]=useState<UltimateChoiceLevel[]>(["family"]),[choice,setChoice]=useState<UltimateChoice>();
 const toggle=(level:UltimateChoiceLevel)=>setLevels(current=>current.includes(level)?current.length===1?current:current.filter(item=>item!==level):[...current,level]);
 const draw=(nextPhase:"playing"|"final")=>{const next=drawUltimateChoice(ULTIMATE_CHOICES,levels,storage.getUsedUltimateChoices());if(!next){setChoice(undefined);setPhase("exhausted");return}storage.addUsedUltimateChoice(next.id);setChoice(next);setPhase(nextPhase)};
 const cards=choice&&<div className="choice-stage"><div className="choice-card a"><span className="choice-letter">A</span><span className="choice-text">{choice.optionA}</span></div><p className="versus">VS</p><div className="choice-card b"><span className="choice-letter">B</span><span className="choice-text">{choice.optionB}</span></div></div>;
 return <main className="shell">
  {phase==="rules"&&<><p className="eyebrow">ULTIMATE CHOICE</p><h1>😈 究極の2択</h1><ol className="rules"><li>全員でAかBを選ぶ</li><li>多数派は抜ける</li><li>少数派だけ残る</li><li>残った人でもう一度</li><li>最後は決定戦！</li></ol><p className="notice">投票入力は不要です。人数と少数派は、みんなで確認してください。</p><section className="card section"><h2>🔥 決定戦</h2><p className="muted">抜けた人も全員回答に復帰。決勝対象者のうち、全体の少数派側を選んだ1人が罰ゲーム対象です。決まらなければ新しいお題でもう一度！</p></section><div className="stack section"><button className="button" onClick={()=>setPhase("settings")}>設定へ進む</button><Link className="button secondary" href="/">HOMEへ戻る</Link></div></>}
  {phase==="settings"&&<><p className="eyebrow">ULTIMATE CHOICE / SETUP</p><h1>出題レベル</h1><p className="muted">遊びたいレベルを選んでください。複数選択できます。</p><div className="stack section">{LEVELS.map(level=><label className="check level-label" key={level}><input type="checkbox" checked={levels.includes(level)} onChange={()=>toggle(level)}/>{level}</label>)}</div><p className="game-help">最低1つは選択してください。</p><div className="stack section"><button className="button" onClick={()=>draw("playing")}>究極の2択 START</button><button className="button secondary" onClick={()=>setPhase("rules")}>遊び方へ戻る</button></div></>}
  {phase==="playing"&&<><p className="eyebrow">ULTIMATE CHOICE</p><h1 className="center">究極の2択</h1>{cards}<p className="game-help">全員で選び、少数派だけ残ろう！</p><div className="stack section"><button className="button" onClick={()=>draw("playing")}>次の究極の2択</button><button className="button danger" onClick={()=>draw("final")}>🔥 決定戦に行く</button><Link className="button secondary" href="/">HOMEへ戻る</Link></div></>}
  {phase==="final"&&<><p className="eyebrow">ULTIMATE CHOICE / FINAL</p><h1 className="final-banner">🔥 決定戦 🔥</h1><p className="game-help">抜けた人も含めて、全員参加！</p>{cards}<p className="notice center">決勝対象者のうち、全体の少数派側を選んだ1人が罰ゲーム対象！</p><div className="stack section"><button className="button" onClick={()=>draw("final")}>もう一度、決定戦</button><Link className="button secondary" href="/">ゲーム終了</Link></div></>}
  {phase==="exhausted"&&<><p className="eyebrow">NO MORE PROMPTS</p><div className="card center section"><h1>この設定のお題を<br/>すべて出題しました。</h1><p className="muted">レベルを変更するか、HOMEの出題履歴からリセットしてください。履歴は自動ではリセットされません。</p></div><div className="stack section"><button className="button" onClick={()=>setPhase("settings")}>条件を変更する</button><Link className="button secondary" href="/history">出題履歴へ</Link><Link className="button secondary" href="/">HOMEへ戻る</Link></div></>}
 </main>
}
