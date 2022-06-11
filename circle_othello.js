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
    if(pos_x >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_x <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_x >= 1 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_x >= 1 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_x <= 8 && pos_y >= 1 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
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
    if(pos_x <= 8 && pos_y <= 8 && used_map[pos_x][pos_y] == 1 && flag == 1){
        othello_map[pos_x][pos_y] = color;
    }
}
let que = [ [1,6], [2,7], [3,8], [4,8], [5,8], [6,8], [7,7], [8,6], [8,5], [8,4],
             [8,3], [7,2], [6,1], [5,1], [4,1], [3,1], [2,2], [1,3], [1,4], [1,5]];
let que2 = [ [1,5], [1,4], [1,3], [2,2], [3,1], [4,1], [5,1], [6,1], [7,2], [8,3],
             [8,4], [8,5], [8,6], [7,7], [6,8], [5,8], [4,8], [3,8], [2,7], [1,6]];
function circular_right(pos, color){
    let pos_x = que[pos][0];
    let pos_y = que[pos][1];
    opposite = 1;
    used_map[pos_x][pos_y] = 1;
    if(color == 1) opposite = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    let next_pos = (pos + 1) % 20;
    let next_x = que[next_pos][0];
    let next_y = que[next_pos][1];
    if(used_map[next_x][next_y] == 0){
        circular_right(next_pos, color);
    }
    if(used_map[next_x][next_y] == 1 && flag == 1){
        othello_map[next_x][next_y] = color;
    }
}
function circular_left(pos, color){
    let pos_x = que2[pos][0];
    let pos_y = que2[pos][1];
    opposite = 1;
    used_map[pos_x][pos_y] = 1;
    if(color == 1) opposite = 2;

    if(othello_map[pos_x][pos_y] == 0 || othello_map[pos_x][pos_y] == 3) return;
    else if(othello_map[pos_x][pos_y] == color){
        flag = 1;
        return;
    }
    let next_pos = (pos + 1) % 20;
    let next_x = que2[next_pos][0];
    let next_y = que2[next_pos][1];
    if(used_map[next_x][next_y] == 0){
        circular_left(next_pos, color);
    }
    if(used_map[next_x][next_y] == 1 && flag == 1){
        othello_map[next_x][next_y] = color;
    }
}
function reversing(pos_x, pos_y, color){
    othello_map[pos_x][pos_y] = color;
    let num = -1;
    for(let i = 0;i < 20;i++){
        if(que[i][0] == pos_x && que[i][1] == pos_y) num = i;
    }
    if(num != -1){
        initialize();
        console.log((num + 1)%20);
        circular_right((num+1)%20, color);
    }
    num = -1;
    for(let i = 0;i < 20;i++){
        if(que2[i][0] == pos_x && que2[i][1] == pos_y) num = i;
    }
    if(num != -1){
        initialize();
        console.log((num + 1)%20);
        circular_left((num+1)%20, color);
    }
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