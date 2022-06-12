import { useState } from "react";
import'./kusoge-othello.css';



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

function two_reversing(pos_x:number, pos_y:number, color:number,othello_map,opposite_color,i){
    const old=othello_map.map(row => row.slice());
    if(othello_map[pos_x][pos_y]==0&&othello_map[pos_x-1][pos_y]==0){
      othello_map[pos_x][pos_y] = color;
      othello_map[pos_x-1][pos_y]=color;
      console.log(i);
      [i,othello_map]=reverse_up(pos_x - 1, pos_y, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x + 1, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x + 1, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,opposite_color,i);
      //up
      [i,othello_map]=reverse_up(pos_x - 2, pos_y, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x-1, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x-1, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 2, pos_y + 1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 2, pos_y - 1, color,othello_map,opposite_color,i);
      console.log(i);
      if(i==16){
        othello_map=old;
      }
      else{
        color*=-1;
      }
      return [color,othello_map];
    }
    else{
      return [color,othello_map];
    }
  }

  function neotwo_reversing(pos_x:number, pos_y:number, color:number,othello_map,opposite_color,i){
    const old=othello_map.map(row => row.slice());
    if(othello_map[pos_x][pos_y]==0&&othello_map[pos_x][pos_y+1]==0){
      othello_map[pos_x][pos_y] = color;
      othello_map[pos_x][pos_y+1]=color;
      console.log(i);
      [i,othello_map]=reverse_up(pos_x - 1, pos_y, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x + 1, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x + 1, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,opposite_color,i);
      //right
      [i,othello_map]=reverse_up(pos_x - 1, pos_y+1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x + 1, pos_y+1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x, pos_y + 2, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 1, pos_y + 2, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x + 1, pos_y + 2, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x + 1, pos_y , color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 1, pos_y , color,othello_map,opposite_color,i);
      console.log(i);
      if(i==16){
        othello_map=old;
      }
      else{
        color*=-1;
      }
      return [color,othello_map];
    }
    else{
      return [color,othello_map];
    }
  }

  function three_reversing(pos_x:number, pos_y:number, color:number,othello_map,opposite_color,i){
    const old=othello_map.map(row => row.slice());
    if(othello_map[pos_x][pos_y]==0&&othello_map[pos_x-1][pos_y]==0&&othello_map[pos_x-1][pos_y+1]==0){
      othello_map[pos_x][pos_y] = color;
      othello_map[pos_x-1][pos_y]=color;
      othello_map[pos_x-1][pos_y+1]=color;
      console.log(i);
      [i,othello_map]=reverse_up(pos_x - 1, pos_y, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x + 1, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 1, pos_y + 1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x + 1, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x + 1, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 1, pos_y - 1, color,othello_map,opposite_color,i);
      //up
      [i,othello_map]=reverse_up(pos_x - 2, pos_y, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x-1, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x-1, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 2, pos_y + 1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x, pos_y + 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x, pos_y - 1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 2, pos_y - 1, color,othello_map,opposite_color,i);
      console.log(i);
      //up_right
      [i,othello_map]=reverse_up(pos_x - 2, pos_y+1, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down(pos_x, pos_y+1, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_right(pos_x-1, pos_y + 2, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_left(pos_x-1, pos_y , color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_right(pos_x - 2, pos_y + 2, color,othello_map,opposite_color,i); 
      [i,othello_map]=reverse_down_right(pos_x, pos_y + 2, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_down_left(pos_x, pos_y, color,othello_map,opposite_color,i);
      [i,othello_map]=reverse_up_left(pos_x - 2, pos_y, color,othello_map,opposite_color,i);
      if(i==24){
        othello_map=old;
      }
      else{
        color*=-1;
      }
      return [color,othello_map];
    }
    else{
      return [color,othello_map];
    }
  }

export default function App() {
  const [board, setBoard] = useState([
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,-1,1,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,1,-1,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
  ]);
  
  const [opposite_color,setOpposite]=useState(1);
  const [color,setColor]=useState(1);
  const [i,setI]=useState(0);
  const [block_id,setId]=useState(Number);
  const [block,setBlock]=useState([
    [["●","\n"],["\n","\n"]],
    [["●","\n"],["●","\n"]],
    [["●","●"],["●","\n"]],
    [["●","●"],["\n","\n"]]
  ])
  const [string_board,setString]=useState<string[][]>([])
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
        <a href="https://othello-bg0r.onrender.com">メインページに戻る</a>
      </div>
      <p><div className="turn">{color==1?<span className="kuromaru">●の手番</span>:<span className="siromaru">●の手番</span>}</div></p>
      <p><button className="pass" onClick={()=>{
        const pass_color=color*(-1);
        setColor(pass_color);
      }}>パス</button></p>
      <p><button className="reset" onClick={()=>{setBoard([
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,-1,1,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,1,-1,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
  ])}}>リセット</button></p>
      <p>
       <table className="next">
         <tbody>
            {block[block_id].map((item,index)=>{
                return(
                    <tr>
                        {item.map((subItem,subIndex)=>{
                            return (
                                <td>{color==1?<span className="kuromaru">{subItem}</span>:<span className="siromaru">{subItem}</span>}</td>
                            )
                        })}
                    </tr>
                );
            })}
         </tbody>
       </table>
      </p>
      <table className="board">
        <tbody>
          {board.map((item, index) => {
            return (
              <tr>
                {item.map((subItem,subIndex) => {
                  return(
                    <td><button className="othellobutton" type="button" onClick={() => {
                      const old = board.map(row => row.slice());
                      console.log("Hey!");                      
                      const [newcolor,newBoard] = block_id==0?common_reversing(index,subIndex,color,old,opposite_color,i):block_id==1?two_reversing(index,subIndex,color,old,opposite_color,i):block_id==2?three_reversing(index,subIndex,color,old,opposite_color,i):neotwo_reversing(index,subIndex,color,old,opposite_color,i);
                      console.log(newBoard);
                      setI(0);
                      setBoard(newBoard);
                      setColor(newcolor);
                      const random_number=Math.floor(Math.random()*4);
                      console.log(random_number);
                      setId(random_number);
                    //   setString(board.map((row,y)=>
                    //     row.map((cell,x)=>{
                    //         if(cell==0){
                    //             return "\n";
                    //         }
                    //         else if(cell==1){
                    //             return "●";
                    //         }
                    //         else if(cell==-1){
                    //             return "○";
                    //         }
                    //         else{
                    //             return "⋄";
                    //         }
                    //     })
                    //   ))
                    }}>{subItem==0?"\n":subItem==1?<span className="kuromaru">●</span>:subItem==-1?<span className="siromaru">●</span>:"⋄"}</button></td>
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

