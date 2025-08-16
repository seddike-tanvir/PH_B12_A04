// Problem-01 : Train TT's Fine Calculator 
function totalFine(fare){
    if (typeof fare !== 'number' || fare <= 0 || isNaN(fare)){
        return "Invalid";
    }

    let surcharge = fare * (20 / 100);
    let total = fare + surcharge + 30;

    return total;
}






// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str){
    if (typeof str !== 'string'){
        return "Invalid";
    }

    let cleaned = str.replace(/[^a-zA-Z]/g, '').toUpperCase();

    return cleaned;
}






// Problem-03 : FIFA Best Team Award 
function bestTeam(player1, player2){
    if (typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null){
        return "Invalid";
    }

    let { name: name1, foul: foul1, cardY: yellow1, cardR: red1 } = player1;
    let { name: name2, foul: foul2, cardY: yellow2, cardR: red2 } = player2;

    if (
        typeof foul1 !== 'number' || typeof foul2 !== 'number' ||
        typeof yellow1 !== 'number' || typeof yellow2 !== 'number' ||
        typeof red1 !== 'number' || typeof red2 !== 'number' ||
        typeof name1 !== 'string' || typeof name2 !== 'string'
    ){
        return "Invalid";
    }

    let score1 = foul1 + yellow1 + red1;
    let score2 = foul2 + yellow2 + red2;

    if (score1 < score2){
        return name1;
    } else if (score2 < score1) {
        return name2;
    } else{
        return "Tie";
    }
}







// Problem-04: Same Same But Different  😕
function isSame(arr1, arr2){
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }

    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}








// Problem-05: Exam Result Report Generator
function resultReport(marks){
    if (!Array.isArray(marks)){
        return "Invalid";
    }

    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }

    let pass = 0;
    let fail = 0;
    let total = 0;

    for (let mark of marks) {
        if (typeof mark !== 'number' || isNaN(mark)) {
            return "Invalid";
        }

        total += mark;
        if (mark >= 40) {
            pass++;
        } else {
            fail++;
        }
    }

    const finalScore = Math.round(total / marks.length);

    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
}