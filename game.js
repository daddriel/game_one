var player;
var moveMachine = ["piedra", "papel", "tijera"];
var machine;

function game(player){
    
    machine = moveMachine[Math.round(Math.random()*2)];
    if(player != "piedra" || player != "papel" || player != "tijera"){
        console.log("Jugada no valida 😡")
    }else if(player === machine){
        console.log("Empate 🙃")
    }else if(player == "piedra" && machine == "tijera"){
        console.log("Ganaste 🥳");
        print(player, machine);
    }else if(player == "papel" && machine == "piedra"){
        console.log("Ganaste 🥳");
        print(player, machine);
    }else if(player == "tijera" && machine == "papel"){
        console.log("Ganaste 🥳");
        print(player, machine);
    }else
        console.log("Perdiste 💩");

}

function print(player,machine){
if(player==="papel"){
    console.log("Player 🖐");
}else if(player==="piedra"){
    console.log("Player ✊");
}else
    console.log("Player 🖖");

if(machine==="papel"){
   console.log("Machine 🖐");
}else if(machine==="piedra"){
    console.log("Machine ✊");
}else
    console.log("Machine 🖖");  
}
