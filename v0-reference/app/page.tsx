'use client'

import { useState } from 'react'
import { ArrowLeft, Volume2, Zap } from 'lucide-react'

type View = 'home' | 'bomb' | 'choice' | 'blast'

const posterImages = {
  yellow: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%9B%8D%E5%85%89%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC%E7%99%BD%E9%BB%92-JoEPWlQmPc6NtxiEOCGIHEEobgJ6xN.jpg',
  purple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%B4%AB%E3%83%8D%E3%82%AA%E3%83%B3-Nb9tjNT8aHcwV9efx9Lypx1GAw8ier.jpg',
  red: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B5%A4%E9%BB%92%E3%81%97%E3%81%BE%E3%81%97%E3%81%BE-t4rjplXYGnZ1jHzFl3nup9xY8EjmB0.jpg',
}

const navItems: { id: View; label: string }[] = [
  { id: 'home', label: 'HOME' },
  { id: 'bomb', label: 'BOMB GAME' },
  { id: 'choice', label: 'ULTIMATE CHOICE' },
]

export default function Page() {
  const [view, setView] = useState<View>('home')
  return <main className={`app-shell view-${view}`}>
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <button className="wordmark" onClick={() => setView('home')} aria-label="Go to home"><span>GROGGY</span><b>GAMES</b></button>
      <nav aria-label="Game navigation">{navItems.map((item) => <button key={item.id} className={view === item.id ? 'active' : ''} onClick={() => setView(item.id)}>{item.label}</button>)}</nav>
      <button className="sound" aria-label="Sound on"><Volume2 size={17} /></button>
    </header>
    {view === 'home' && <Home onOpen={setView} />}
    {view === 'bomb' && <Bomb onBlast={() => setView('blast')} onBack={() => setView('home')} />}
    {view === 'blast' && <Blast onRestart={() => setView('bomb')} />}
    {view === 'choice' && <Choice onBack={() => setView('home')} />}
  </main>
}

function Home({ onOpen }: { onOpen: (view: View) => void }) {
  return <section className="home-screen">
    <div className="home-burst burst-one" aria-hidden="true">PLAY<br />LOUD</div><div className="home-burst burst-two" aria-hidden="true">NO<br />RULES</div><div className="uv-splatter splatter-one" aria-hidden="true" /><div className="uv-splatter splatter-two" aria-hidden="true" /><div className="scribble-wall wall-one" aria-hidden="true">WARNING<br />∞ #?! ///</div><div className="scribble-wall wall-two" aria-hidden="true">DON&apos;T<br />BEHAVE</div><div className="tape tape-one" aria-hidden="true" /><div className="tape tape-two" aria-hidden="true" />
    <div className="poster-rail" aria-hidden="true"><img src={posterImages.purple} alt="" /><img src={posterImages.red} alt="" /></div>
    <div className="home-copy"><p className="eyebrow"><span className="pulse-dot" /> TONIGHT&apos;S PLAYGROUND / 01:47 AM</p><h1><span>GROGGY</span><strong>GAMES</strong></h1><p className="tagline">Play hard. Laugh harder.<br /><em>Get groggy.</em></p></div>
    <div className="home-games">
      <button className="game-tile bomb-tile" onClick={() => onOpen('bomb')}><span className="tile-no">01 / DANGER ZONE</span><b>BOMB<br />GAME</b><small>生麦生米生卵を言い切るまで、爆発は待っている。</small><span className="enter">ENTER ↗</span></button>
      <button className="game-tile choice-tile" onClick={() => onOpen('choice')}><span className="tile-no">02 / NO WRONG ANSWERS</span><b>ULTIMATE<br />CHOICE</b><small>究極の2択。答えはひとつ。たぶん。</small><span className="enter">ENTER ↗</span></button>
    </div>
    <div className="yellow-card"><img src={posterImages.yellow} alt="蛍光イエローと黒のクラブイベントポスター" /><span>REFERENCE WALL / 03</span></div>
    <div className="home-footer"><span>GROGGY GAMES SYSTEM / MADE FOR THE TABLE</span><span>∞ PLAY UNTIL YOU CAN&apos;T</span></div>
  </section>
}

function Bomb({ onBlast, onBack }: { onBlast: () => void; onBack: () => void }) {
  return <section className="bomb-screen"><div className="bomb-lines" aria-hidden="true" /><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> EXIT ZONE</button><div className="danger-label"><span>●</span> LIVE / UNSTABLE SIGNAL <span>●</span></div><div className="bomb-center"><div className="wireframe-bomb"><img src="/bomb-graphic.png" alt="赤い導火線の黒い爆弾イラスト" /><div className="bomb-core">?</div><div className="fuse" /></div><p className="round-label">ROUND 04 / SAY IT OR PAY IT</p><h2>生麦生米<br /><span>生卵</span></h2><p className="reading">なまむぎ　なまごめ　なまたまご</p><button className="signal-button" onClick={onBlast}><Zap size={20} fill="currentColor" /> TRIGGER SIGNAL</button></div><div className="bomb-side side-left">KEEP<br />GOING<span>///</span></div><div className="bomb-side side-right">NO<br />COUNTDOWN<span>///</span></div><div className="bomb-bottom"><span>WARNING : THE SIGNAL IS NOT A TIMER</span><span>PASS THE PHONE / STAY LOUD</span></div></section>
}

function Blast({ onRestart }: { onRestart: () => void }) { return <section className="blast-screen"><div className="blast-shock" aria-hidden="true" /><div className="blast-rays" aria-hidden="true" /><div className="blast-shards" aria-hidden="true" /><p className="blast-kicker">SIGNAL LOST / SIGNAL LOST / SIGNAL LOST</p><div className="blast-word">BANG<span>!</span></div><div className="blast-stamp">YOU<br />GOT<br /><b>GROGGY</b></div><p className="blast-sub">THE TABLE HAS SPOKEN</p><button className="restart-button" onClick={onRestart}>RUN IT BACK ↗</button></section> }

function Choice({ onBack }: { onBack: () => void }) { return <section className="choice-screen"><img className="choice-reference" src={posterImages.red} alt="赤と黒の波形を使ったクラブポスター" /><div className="choice-paper paper-one" /><div className="choice-paper paper-two" /><button className="choice-back" onClick={onBack}><ArrowLeft size={16} /> BACK TO LOBBY</button><div className="choice-head"><span>ROUND 07</span><b>CHOOSE YOUR DAMAGE</b><i>✳</i></div><div className="versus-stage"><div className="choice-half choice-a"><span className="choice-stamp">STAMPED</span><span className="choice-letter">A</span><p>毎日パンツだけ<br /><strong>ビショビショ</strong></p><span className="scribble">NO<br />WAY</span></div><div className="vs">VS</div><div className="choice-half choice-b"><span className="choice-letter">B</span><span className="card-ribbon">OR<br />THIS?</span><p>毎日靴下だけ<br /><strong>ビショビショ</strong></p><span className="sticker">PICK<br />ONE</span></div></div><div className="choice-footer"><span>POINT AT YOUR ANSWER</span><button>LOCK IT IN ↗</button><span>NO BACKSIES</span></div></section> }
