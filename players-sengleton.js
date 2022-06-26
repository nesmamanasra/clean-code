//     we need to create a singleton class name it is (board)
//     changeGate function change the gate mode from "open to close" or from "close to open"
// we need to create a player class this class
//     has a  board instance
//     changeGate this function call changeGate function from  board instance

class Board{
    instance;
    getStatus = true;

    static getTnstance(){
        if(this.instance){
            this.instance = new Board();
        }
        return this.instance
    }
    static changeGateStatuse(){
        if(Board.getTnstance.getStatus){
            console.log('the gate is opened');
        }else{
            console.log('the gate is closed')
        }

        Board.getTnstance.getStatus = !Board.getTnstance.getStatus;
    }
}
class Player{
    board;
    changeGateStatuse(){
        this.board = Board.changeGateStatuse();
    }
}

function boot (){
    const gateStatusChanger = new Player();
    gateStatusChanger.changeGateStatuse();
    gateStatusChanger.changeGateStatuse();
}
boot();