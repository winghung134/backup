class Robot {
coor:Array<number>=[0,0];
direction:string|undefined
}
let input = "RALAR"




function init(props:Robot){
for(let i of input){
if(i=="L"){props.direction="Left"
console.log("it turns left!");
}
if(i=="R"){props.direction="Right"
console.log("it turns right!");
}

if(i=="A"){
    let f:number;
    if(props.direction =="Left"){f=1}else{f=0}
    props.coor[f] = props.coor[f]+1
console.log(`it moves 1 block from ${props.direction}`);
}
}
}

function walk(props:Robot){

// 1 report position
console.log("old one",props.direction,props.coor);

init(props)
// 2 report new position
console.log("new one",props.direction,props.coor);

}
walk({coor:[1,1],direction:""})