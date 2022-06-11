const express = require("express");
const fs = require("fs");
const app = express();

let flag;
let color = 1;
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
    return othello_map;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/put", (request, response) => {
    const position = request.query.position;
    const pos_x = position%10;
    const pos_y = Math.floor(position/10);
    othello_map = common_reversing(pos_x, pos_y, color);
    if(color===1){
        color = 2;
    }else{
        color = 1;
    }
    response.send(othello_map);
});
app.listen(3000);

