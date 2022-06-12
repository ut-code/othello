async function get(putting, pass) {
    const response = await fetch(`/get`);
    const json = await response.text();
    const list = JSON.parse(json)
    const othello_map_before = list[0];
    const color_before = list[1];
    color_change(othello_map_before)
    putable = check_putable(othello_map_before, color_before)
    for(let i=1; i<9; i++){
        for(let j=1; j<9; j++){
            if(putable[j][i]===false){
                button[i-1][j-1].disabled=true;
            }else{
                button[i-1][j-1].disabled=false;
            }
        }
    }
    if(pass===true){
        const response = await fetch(`/pass`);
    }
    let black = 0;
    let white = 0;
    for(let i=1; i<9; i++){
        for(let j =1; j<9; j++){
            if(othello_map[i][j]===1){
                black++;
            }else if(othello_map[i][j]===2){
                white++;
            }
        }
    }
    if(white===0){
        clearInterval(putting);
        alert("黒の勝ちです")
    }else if(black===0){
        clearInterval(putting);
        alert("白の勝ちです")
    }else if(turn === 60){
        clearInterval(putting);
        if(black>white){
            alert("黒の勝ちです")
        }else if(black<white){
            alert("白の勝ちです")
        }else{
            alert("引き分けです")
        }
    }
}
//おく処理
async function put(putting) {
    const number= max_index(count);
    if(number){
        const response = await fetch(`/put?position=${number}`);
        turn++;
        await get(putting, false);
    }else{
        await get(putting, true);
    }
    for(let i=0; i<8; i++){
        for(let j = 0; j < 8; j++){
            if(button[i][j].disabled===true){
                count[i][j] = -1;
            }else{
                count[i][j] = 0;
            }
        }
    }
    console.log(turn);
}
let button=[]
for(let i=0; i<8; i++){
    button.push([])
    for(let j=0; j<8; j++){
        number=i*10+j+11;
        button[i][j]=document.getElementById(`${number}`);
    }
}
let count=[]
for(let i=0; i<8; i++){
    count.push([])
}
let othello_map = [
    [3,3,3,3,3,3,3,3,3,3],
    [3,3,3,1,1,1,0,3,3,3],
    [3,3,1,0,0,0,0,1,3,3],
    [3,2,0,0,0,0,0,0,1,3],
    [3,1,0,0,1,2,0,0,1,3],
    [3,1,0,0,2,1,0,0,1,3],
    [3,1,0,0,0,0,0,0,1,3],
    [3,3,1,0,0,0,0,1,3,3],
    [3,3,3,1,2,1,1,3,3,3],
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
];
let putable = [
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
let flag = 0;
let cnt = 0;
let turn = 0;
//繰り返しを行う関数
const main=async() =>{
    await get();
    for(let i=0; i<8; i++){
        for(let j = 0; j < 8; j++){
            if(button[i][j].disabled===true){
                count[i][j] = -1;
            }else{
                count[i][j] = 0;
            }
        }
    }
    for(let i=1; i<9; i++){
        for(let j=1; j<9; j++){
            let number=10*i+j;
            button[i-1].push(document.getElementById(`${number}`));
            button[i-1][j-1].onclick = async () => {
                button_click(i-1,j-1)
            }
        }
    }
    let putting = setInterval(function(){
        put(putting)
    },500)
}
main()

//ボタンを押された時
function button_click(i,j){
    count[i][j]++;
    for(let k=0; k<8; k++){
        for(let l=0; l<8; l++){
            if(button[k][l].disabled===false){
                button[k][l].disabled=true;
            }
        }
    }
}
//最大値のインデックスを取得
function max_index(count_map){
    let index = [];
    let value = 0;
    for(let i = 0; i < 8; i ++){
        for(let j = 0; j < 8; j ++){
            if(value < count_map[i][j]){
                index = [10*i+j+11];
                value = 10*i+j+11;
            }else if(value === count_map[i][j]){
                index.push(10*i+j+11);
            }
        }
    }
    console.log(index)
    let rand = Math.floor(Math.random()*index.length);
    return index[rand];
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
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x >= 1 && used_map[pos_x-1][pos_y] == 0){
        reverse_up(pos_x-1, pos_y, color);
    }
    if(pos_x >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1) cnt+=1;
    console.log(cnt);
    return cnt;
}
function reverse_down(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x <= 8 && used_map[pos_x+1][pos_y] == 0){
        reverse_down(pos_x+1, pos_y, color);
    }
    if(pos_x <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1)cnt+=1;
    return cnt;
}
function reverse_right(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_y <= 8 && used_map[pos_x][pos_y+1] == 0){
        reverse_right(pos_x, pos_y+1, color);
    }
    if(pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1) cnt+=1;
    return cnt;
}
function reverse_left(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_y >= 1 && used_map[pos_x][pos_y-1] == 0){
        reverse_left(pos_x, pos_y-1, color);
    }
    if(pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1)cnt+=1;
    return cnt;
}

function reverse_up_right(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x - 1][pos_y + 1] == 0){
        reverse_up_right(pos_x - 1, pos_y + 1, color);
    }
    if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1)cnt+=1;
    return cnt;
}

function reverse_up_left(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x - 1][pos_y - 1] == 0){
        reverse_up_left(pos_x - 1, pos_y - 1, color);
    }
    if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1) cnt+=1;
}

function reverse_down_left(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x + 1][pos_y - 1] == 0){
        reverse_down_left(pos_x + 1, pos_y - 1, color);
    }
    if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1) cnt+=1;
    return cnt;
}

function reverse_down_right(pos_x, pos_y, color){
    used_map[pos_x][pos_y] = 1;
    opposite_color = 1;
    if(color == 1) opposite_color = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x + 1][pos_y + 1] == 0){
        reverse_down_right(pos_x + 1, pos_y + 1, color);
    }
    if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1)cnt+=1;
    return cnt;
}
function common_reversing(pos_x, pos_y, color){
    cnt = 0;
    initialize();
    reverse_up(pos_x - 1, pos_y, color, cnt); 
    initialize();
    reverse_down(pos_x + 1, pos_y, color, cnt);
    initialize();
    reverse_right(pos_x, pos_y + 1, color, cnt);
    initialize();
    reverse_left(pos_x, pos_y - 1, color, cnt);
    initialize();
    reverse_up_right(pos_x - 1, pos_y + 1, color, cnt); 
    initialize();
    reverse_down_right(pos_x + 1, pos_y + 1, color, cnt);
    initialize();
    reverse_down_left(pos_x + 1, pos_y - 1, color, cnt);
    initialize();
    reverse_up_left(pos_x - 1, pos_y - 1, color, cnt);
    console.log(cnt);
    return cnt;
}

function check_putable(list,color){
    othello_map = list;
    for(let i = 0;i <= 9; i++){
        for(let j = 0;j <= 9;j++){
            if(othello_map[i][j] == 1 || othello_map[i][j] == 2 || othello_map[i][j] == 3){
                putable[i][j] = false;
            }else{
                console.log([i,j]);
                if(common_reversing(i, j, color) > 0){
                    putable[i][j] = true;
                }else{
                    putable[i][j] = false;
                }
            }
        }
    }
    console.log(color);
    return putable;
}