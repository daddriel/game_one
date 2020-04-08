var player;
var moveMachine = ["piedra", "papel", "tijera"];
var machine;
var playerMachine;
function game(player){
    machine = moveMachine[Math.round(Math.random()*2)];
    playerMachine = player + machine;

    if(player != "piedra" && player != "papel" && player != "tijera"){
        console.log("Jugada no valida 😡")
        print(player, machine);

    }else{
        switch(playerMachine){
            case "piedrapiedra":
                console.log("Empate 😅");
                print(player,machine);
                break;
            case "papelpapel":
                console.log("Empate 😅");
                print(player,machine);
                break;
            case "tijeratijera":
                console.log("Empate 😅");
                print(player,machine);
                break;     
            case "piedratijera":
                console.log("Ganaste 🥳");
                print(player,machine);
                break;
            case "papelpiedra":
                console.log("Ganaste 🥳");
                print(player,machine);
                break;
            case "tijerapapel":
                console.log("Ganaste 🥳");
                print(player,machine);
                break;
            default:
                console.log("Perdiste 💩");
                print(player,machine);
                break;
        }
    }    
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
