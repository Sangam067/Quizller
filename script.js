const RANKS= [

];

function getStats(){
    const saved =localStorage.getItem("quizzlerStats");
    return saved ? JSON.parse(saved) : { totalCorrect: 0, totalAnswered: 0 };
}