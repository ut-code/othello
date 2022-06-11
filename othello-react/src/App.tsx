import { useState } from "react";
import './App.css';


function initialize(used_map,flag){
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
function reverse_up(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && used_map[pos_x-1][pos_y] == 0){
      reverse_up(pos_x-1, pos_y, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_x >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_down(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && used_map[pos_x+1][pos_y] == 0){
      reverse_down(pos_x+1, pos_y, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_x <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_right(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_y <= 8 && used_map[pos_x][pos_y+1] == 0){
      reverse_right(pos_x, pos_y+1, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}
function reverse_left(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_y >= 1 && used_map[pos_x][pos_y-1] == 0){
      reverse_left(pos_x, pos_y-1, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_up_right(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x - 1][pos_y + 1] == 0){
      reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_up_left(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x - 1][pos_y - 1] == 0){
      reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_down_left(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x + 1][pos_y - 1] == 0){
      reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,used_map,flag,opposite_color);
  }
  if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function reverse_down_right(pos_x, pos_y, color,othello_map,used_map,flag,opposite_color){
  used_map[pos_x][pos_y] = 1;
  opposite_color = 1;
  if(color == 1) opposite_color = 2;

  if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
  else if(othello_map[pos_x][pos_y] == color){
      flag = 1;
      return;
  }
  if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x + 1][pos_y + 1] == 0){
      reverse_down_right(pos_x + 1, pos_y + 1, othello_map,used_map,flag,color,opposite_color);
  }
  if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
      othello_map[pos_x][pos_y] = color;
  }
}

function common_reversing(pos_x:number, pos_y:number, color:number,othello_map,used_map,flag,opposite_color){
  othello_map[pos_x][pos_y] = color;
  initialize(used_map,flag);
  reverse_up(pos_x - 1, pos_y, color,othello_map,used_map,flag,opposite_color); 
  initialize(used_map,flag);
  reverse_down(pos_x + 1, pos_y, color,othello_map,used_map,flag,opposite_color);
  initialize(used_map,flag);
  reverse_right(pos_x, pos_y + 1, color,othello_map,used_map,flag,opposite_color);
  initialize(used_map,flag);
  reverse_left(pos_x, pos_y - 1, color,othello_map,used_map,flag,opposite_color);
  initialize(used_map,flag);
  reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,used_map,flag,opposite_color); 
  initialize(used_map,flag);
  reverse_down_right(pos_x + 1, pos_y + 1, color,othello_map,used_map,flag,opposite_color);
  initialize(used_map,flag);
  reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,used_map,flag,opposite_color);
  initialize(used_map,flag);
  reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,used_map,flag,opposite_color);
  return othello_map;
}

export default function App() {
  const [board, setBoard] = useState([
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
  ]);

  const [used_board,setUsed]=useState([
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
  ]);
  
  const [flag,setFlag]=useState()
  const [opposite_color,setOpposite]=useState()
  return (
    <>
      <div className="title"><h1>無料オンラインオセロゲーム</h1></div>
      {/* <button onClick={() => {
        const old = board.map(row => row.slice());

        const newMap = [...board];
        const newRow = [...board[0]];
        newRow[0] = 4;
        newMap[0] = newRow;
        setBoard(newMap);

        setBoard(board.map((row, y) =>
          row.map((cell, x) =>
            x === 0 && y === 0 ? 4 : cell
          )
        ))
      }}>
        Click me
      </button> */}
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
          {board.map((item, index) => {
            return (
              <tr>
                {item.map((subItem,subIndex) => {
                  return(
                    <td><button className="othellobutton" type="button" onClick={() => {
                      const old = board.map(row => row.slice());
                      const used=used_board.map(row => row.slice());
                      console.log("Hey!");
                      const newBoard = common_reversing(index,subIndex,subItem,old,used,flag,opposite_color);
                      setBoard(newBoard);
                    }}>{subItem}</button></td>
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

