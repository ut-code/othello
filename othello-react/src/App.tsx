import { useState } from "react";
import './App.css';

let othello_map = [
  [3,3,3,3,3,3,3,3,3,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,0,0,0,1,2,0,0,0,3],
  [3,0,0,0,2,1,0,0,0,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,0,0,0,0,0,0,0,0,3],
  [3,3,3,3,3,3,3,3,3,3]
];
let used_map = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
function initialize(){
  flag = 0;
  used_map = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
  ];
}
function reverse_up(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && used_map[pos_x-1][pos_y] == 0){
      reverse_up(pos_x-1, pos_y, color);
  }
  if(pos_x >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_down(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && used_map[pos_x+1][pos_y] == 0){
      reverse_down(pos_x+1, pos_y, color);
  }
  if(pos_x <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_right(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_y <= 8 && used_map[pos_x][pos_y+1] == 0){
      reverse_right(pos_x, pos_y+1, color);
  }
  if(pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_left(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_y >= 1 && used_map[pos_x][pos_y-1] == 0){
      reverse_left(pos_x, pos_y-1, color);
  }
  if(pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_up_right(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x - 1][pos_y + 1] == 0){
      reverse_up_right(pos_x - 1, pos_y + 1, color);
  }
  if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_up_left(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x - 1][pos_y - 1] == 0){
      reverse_up_left(pos_x - 1, pos_y - 1, color);
  }
  if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_down_left(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x + 1][pos_y - 1] == 0){
      reverse_down_left(pos_x + 1, pos_y - 1, color);
  }
  if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_down_right(pos_x, pos_y, color){
  used_map[pos_x][pos_y] = 1;
  let opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x + 1][pos_y + 1] == 0){
      reverse_down_right(pos_x + 1, pos_y + 1, color);
  }
  if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function common_reversing(pos_x, pos_y, color){
  othello_map[pos_x][pos_y] = color;
  initialize();
  reverse_up(pos_x - 1, pos_y, color); 
  initialize();
  reverse_down(pos_x + 1, pos_y, color);
  initialize();
  reverse_right(pos_x, pos_y + 1, color);
  initialize();
  reverse_left(pos_x, pos_y - 1, color);
  initialize();
  reverse_up_right(pos_x - 1, pos_y + 1, color); 
  initialize();
  reverse_down_right(pos_x + 1, pos_y + 1, color);
  initialize();
  reverse_down_left(pos_x + 1, pos_y - 1, color);
  initialize();
  reverse_up_left(pos_x - 1, pos_y - 1, color);
}

export default function App() {
  let a=othello_map;
  
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

      <table className="board">
        <tbody>
          {a.map((item, index) => {
            return (
              <tr>
                {item.map((subItem,subIndex) => {
                  return(
                    <td><button className="othellobutton" type="button" onClick={() => {a=common_reversing(index,subIndex,subItem)}}>{subItem}</button></td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  );
}

