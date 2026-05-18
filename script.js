let turn ="❌";
let gameover=false;

const changeturn=()=>{
    return turn==="❌"?"🔵":"❌"
}

const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let win=[[0,1,2],
        [3,4,5],
        [6,7,8],
        [2,4,6],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach(e=>
    {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && ((boxtext[e[2]].innerText===boxtext[e[1]].innerText)) && (boxtext[e[0]].innerText!==''))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"  Won";
            gameover=true;
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
            }

        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="❌";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
})
