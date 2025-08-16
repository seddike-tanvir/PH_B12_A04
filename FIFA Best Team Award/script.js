function bestTeam(player1, player2) {
    // Check if both inputs are objects
    if (typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null) {
        return "Invalid";
    }

    // Extract values for team 1
    let { name: name1, foul: foul1, cardY: yellow1, cardR: red1 } = player1;
    let { name: name2, foul: foul2, cardY: yellow2, cardR: red2 } = player2;

    // Validate required properties exist and are of correct type
    if (
        typeof foul1 !== 'number' || typeof foul2 !== 'number' ||
        typeof yellow1 !== 'number' || typeof yellow2 !== 'number' ||
        typeof red1 !== 'number' || typeof red2 !== 'number' ||
        typeof name1 !== 'string' || typeof name2 !== 'string'
    ) {
        return "Invalid";
    }

    // Calculate total misconduct score for each team
    let score1 = foul1 + yellow1 + red1;
    let score2 = foul2 + yellow2 + red2;

    // Compare and return result
    if (score1 < score2) {
        return name1;
    } else if (score2 < score1) {
        return name2;
    } else {
        return "Tie";
    }
}