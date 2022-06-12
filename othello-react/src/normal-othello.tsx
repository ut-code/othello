import { useState } from "react";
import './App.css';


function reverse_up(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x-=1;
  } 
  
}
function reverse_down(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x+=1;
  } 
}
function reverse_right(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_y+=1;
  } 
}
function reverse_left(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_y-=1;
  } 
}

function reverse_up_right(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x-=1;
    pos_y+=1;
  } 
}

function reverse_up_left(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x-=1;
    pos_y-=1;
  } 
}

function reverse_down_left(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }  
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x+=1;
    pos_y-=1;
  } 
}

function reverse_down_right(pos_x:number, pos_y:number, color:number,othello_map,opposite_color:number,i:number){
  const old = othello_map.map(row => row.slice());
  opposite_color=color*(-1);
  if(othello_map[pos_x][pos_y]==color){
    i+=1;
    return [i,othello_map];
  }
  for(;;){
    if(othello_map[pos_x][pos_y]==opposite_color){
      othello_map[pos_x][pos_y]=color;
    }
    else if(othello_map[pos_x][pos_y]==color){
      return [i,othello_map];
    }
    else if(othello_map[pos_x][pos_y]==0||othello_map[pos_x][pos_y]==3){
      othello_map=old;
      i+=1;
      return [i,othello_map];
    }
    pos_x+=1;
    pos_y+=1;
  } 
}

function common_reversing(pos_x:number, pos_y:number, color:number,othello_map,opposite_color,i){
  const old=othello_map.map(row => row.slice());
  if(othello_map[pos_x][pos_y]==0){
    othello_map[pos_x][pos_y] = color;
    console.log(i);
    [i,othello_map]=reverse_up(pos_x - 1, pos_y, color,othello_map,opposite_color,i); 
    [i,othello_map]=reverse_down(pos_x + 1, pos_y, color,othello_map,opposite_color,i);
    [i,othello_map]=reverse_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
    [i,othello_map]=reverse_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
    [i,othello_map]=reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,opposite_color,i); 
    [i,othello_map]=reverse_down_right(pos_x + 1, pos_y + 1, color,othello_map,opposite_color,i);
    [i,othello_map]=reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,opposite_color,i);
    [i,othello_map]=reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,opposite_color,i);
    console.log(i);
    if(i==8){
      othello_map=old;
    }
    else{
      color*=-1;
    }
    i=0;
    return [color,othello_map];
  }
  else{
    return [color,othello_map];
  }
}

export default function App() {
  const [board, setBoard] = useState([
    [3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,1,-1,0,0,0,3],
    [3,0,0,0,-1,1,0,0,0,3],
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
  
  const [opposite_color,setOpposite]=useState(1);
  const [color,setColor]=useState(1);
  const [i,setI]=useState(0);
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
      <p>{color}の手番です</p>
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
                      const copied_color=color;
                      console.log("Hey!");
                      const [newcolor,newBoard] = common_reversing(index,subIndex,color,old,opposite_color,i);
                      console.log(newBoard);
                      setI(0);
                      setBoard(newBoard);
                      setColor(newcolor);
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

