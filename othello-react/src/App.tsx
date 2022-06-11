import { useState } from "react";


export default function App() {
  
  return (
    <>
      <div className="title"><h1>無料オンラインオセロゲーム</h1></div>
      <div className="main">
        <p >これは無料でオンライン上の世界の人々と自由にオセロの対戦を楽しむことのできるサイトです。</p>
        <p>遊び方
          <ul>
            <li>自分の手番になったらマス目をクリックして、相手の駒を挟みましょう</li>
            <li>もし、駒をおける場所がなくなったら、"パス"ボタンを押して相手に手番を譲りましょう</li>
          </ul>
        </p>
      </div>

      <table>
        <tbody>
          
        </tbody>
      </table>
    </>
  );
}