//配列を作る
let othello_map=[[3,3,3,3,3,3,3,3,3,3],[3,3,3,0,0,0,0,3,3,3],[3,3,0,0,0,0,0,0,3,3],[3,0,0,0,0,0,0,0,0,3],[3,0,0,0,1,2,0,0,0,3],[3,0,0,0,2,1,0,0,0,3],[3,0,0,0,0,0,0,0,0,3],[3,3,0,0,0,0,0,0,3,3],[3,3,3,0,0,0,0,3,3,3],[3,3,3,3,3,3,3,3,3,3]];

//置けるかどうか判定
function check_putable(othello_map, turn){
    const putable=[];
    for(let number=0; number<8; number++){
        putable.push([])
    }
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            const left_top_putable=left_top(othello_map, turn, i+1, j+1)
            if(left_top_putable===true){
                putable[i][j]=true;
                continue
            }
            const top_putable=top(othello_map, turn, i+1, j+1)
            if(top_putable===true){
                putable[i][j]=true;
                continue
            }
            const right_top_putable=right_top(othello_map, turn, i+1, j+1)
            if(right_top_putable===true){
                putable[i][j]=true;
                continue
            }
            const left_putable=left(othello_map, turn, i+1, j+1)
            if(left_putable===true){
                putable[i][j]=true;
                continue
            }
            const right_putable=right(othello_map, turn, i+1, j+1)
            if(right_putable===true){
                putable[i][j]=true;
                continue
            }
            const left_down_putable=left_down(othello_map, turn, i+1, j+1)
            if(left_down_putable===true){
                putable[i][j]=true;
                continue
            }
            const down_putable=down(othello_map, turn, i+1, j+1)
            if(down_putable===true){
                putable[i][j]=true;
                continue
            }
            const right_down_putable=right_down(othello_map, turn, i+1, j+1)
            if(right_down_putable===true){
                putable[i][j]=true;
                continue
            }
            putable[i][j]=false;
        }
    }
    return putable;
}

//左上の判定
function left_top(othello_map, turn, i, j){
    if(othello_map[i-1][j-1]===0 || othello_map[i-1][j-1]===3){
        return false;
    }else if(othello_map[i-1][j-1]!==turn){
        if(othello_map[i-2][j-2]===0 || othello_map[i-2][j-2]===3){
            return false;
        }else if(othello_map[i-2][j-2]!==turn){
            left_top(othello_map, turn, i-1, j-1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//上の判定
function top(othello_map, turn, i, j){
    if(othello_map[i-1][j]===0 || othello_map[i-1][j]===3){
        return false;
    }else if(othello_map[i-1][j]!==turn){
        if(othello_map[i-2][j]===0 || othello_map[i-2][j]===3){
            return false;
        }else if(othello_map[i-2][j]!==turn){
            top(othello_map, turn, i-1, j);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//右上の判定
function right_top(othello_map, turn, i, j){
    if(othello_map[i-1][j+1]===0 || othello_map[i-1][j+1]===3){
        return false;
    }else if(othello_map[i-1][j+1]!==turn){
        if(othello_map[i-2][j+2]===0 || othello_map[i-2][j+2]===3){
            return false;
        }else if(othello_map[i-2][j+2]!==turn){
            right_top(othello_map, turn, i-1, j+1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//左の判定
function left(othello_map, turn, i, j){
    if(othello_map[i][j-1]===0 || othello_map[i][j-1]===3){
        return false;
    }else if(othello_map[i][j-1]!==turn){
        if(othello_map[i][j-2]===0 || othello_map[i][j-2]===3){
            return false;
        }else if(othello_map[i][j-2]!==turn){
            left(othello_map, turn, i, j-1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//右の判定
function right(othello_map, turn, i, j){
    if(othello_map[i][j+1]===0 || othello_map[i][j+1]===3){
        return false;
    }else if(othello_map[i][j+1]!==turn){
        if(othello_map[i][j+2]===0 || othello_map[i][j+2]===3){
            return false;
        }else if(othello_map[i][j+2]!==turn){
            right(othello_map, turn, i, j+1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//左下の判定
function left_down(othello_map, turn, i, j){
    if(othello_map[i+1][j-1]===0 || othello_map[i+1][j-1]===3){
        return false;
    }else if(othello_map[i+1][j-1]!==turn){
        if(othello_map[i+2][j-2]===0 || othello_map[i+2][j-2]===3){
            return false;
        }else if(othello_map[i+2][j-2]!==turn){
            left_down(othello_map, turn, i+1, j-1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//下の判定
function down(othello_map, turn, i, j){
    if(othello_map[i+1][j]===0 || othello_map[i+1][j]===3){
        return false;
    }else if(othello_map[i+1][j]!==turn){
        if(othello_map[i+2][j]===0 || othello_map[i+2][j]===3){
            return false;
        }else if(othello_map[i+2][j]!==turn){
            down(othello_map, turn, i+1, j);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//右下の判定
function right_down(othello_map, turn, i, j){
    if(othello_map[i+1][j+1]===0 || othello_map[i+1][j+1]===3){
        return false;
    }else if(othello_map[i+1][j+1]!==turn){
        if(othello_map[i+2][j+2]===0 || othello_map[i+2][j+2]===3){
            return false;
        }else if(othello_map[i+2][j+2]!==turn){
            right_down(othello_map, turn, i+1, j+1);
        }else{
            return true;
        }
    }else{
        return false;
    }
}

const putable = check_putable(othello_map, 1);
