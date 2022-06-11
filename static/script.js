const get = async () => {
    const response = await fetch(`/get`);
    const json = await response.text();
    const list = JSON.parse(json)
    const othello_map_before = list[0];
    const color_before = list[1];
    color_change(othello_map_before)
    const putable = check_putable(othello_map_before, color_before)
    let false_number=0;
    for(let i=1; i<9; i++){
        for(let j=1; j<9; j++){
            let number=10*i+j;
            const button=document.getElementById(`${number}`);
            if(putable[i-1][j-1]===false){
                button.disabled=true;
            }else{
                button.disabled=false;
                false_number++;
            }
        }
    }
    if(false_number===64){
        ;//パスの処理を記述する
    }
}
get()
for(let i=1; i<9; i++){
    for(let j=1; j<9; j++){
        let number=10*i+j;
        const button=document.getElementById(`${number}`);
        button.onclick = async () => {
            const response = await fetch(`/put?position=${number}`);
            const json = await response.text();
            const list = JSON.parse(json)
            const othello_map_after = list[0];
            const color_after = list[1];
            color_change(othello_map_after);
            get();
        }
    }
}

//色を変える
function color_change(othello_map){
    for(let i=1; i<9; i++){
        for(let j=1; j<9; j++){
            let number=10*i+j;
            const button=document.getElementById(`${number}`);
            if(othello_map[j][i]===0){
                button.className="none";
            }else if(othello_map[j][i]===1){
                button.className="black";
            }else if(othello_map[j][i]===2){
                button.className="white";
            }
        }
    }
}


//置けるかどうか判定
function check_putable(othello_map, turn){
    const putable=[];
    for(let number=0; number<8; number++){
        putable.push([])
    }
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(othello_map[i+1][j+1]===1 || othello_map[i+1][j+1]===2){
                putable[j][i]=false;
                continue
            }
            const left_top_putable=left_top(othello_map, turn, i+1, j+1)
            if(left_top_putable===true){
                putable[j][i]=true;
                continue
            }
            const top_putable=tops(othello_map, turn, i+1, j+1)
            if(top_putable===true){
                putable[j][i]=true;
                continue
            }
            const right_top_putable=right_top(othello_map, turn, i+1, j+1)
            if(right_top_putable===true){
                putable[j][i]=true;
                continue
            }
            const left_putable=left(othello_map, turn, i+1, j+1)
            if(left_putable===true){
                putable[j][i]=true;
                continue
            }
            const right_putable=right(othello_map, turn, i+1, j+1)
            if(right_putable===true){
                putable[j][i]=true;
                continue
            }
            const left_down_putable=left_down(othello_map, turn, i+1, j+1)
            if(left_down_putable===true){
                putable[j][i]=true;
                continue
            }
            const down_putable=down(othello_map, turn, i+1, j+1)
            if(down_putable===true){
                putable[j][i]=true;
                continue
            }
            const right_down_putable=right_down(othello_map, turn, i+1, j+1)
            if(right_down_putable===true){
                putable[j][i]=true;
                continue
            }
            putable[j][i]=false;
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
function tops(othello_map, turn, i, j){
    if(othello_map[i-1][j]===0 || othello_map[i-1][j]===3){
        return false;
    }else if(othello_map[i-1][j]!==turn){
        if(othello_map[i-2][j]===0 || othello_map[i-2][j]===3){
            return false;
        }else if(othello_map[i-2][j]!==turn){
            tops(othello_map, turn, i-1, j);
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