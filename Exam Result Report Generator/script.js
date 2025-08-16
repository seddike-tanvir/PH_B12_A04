function resultReport(marks) {
    // Check if input is an array
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    // If array is empty, return 0 for all values
    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }

    // Count pass and fail (pass mark is 40)
    let pass = 0;
    let fail = 0;
    let total = 0;

    for (let mark of marks) {
        // Check if each mark is a valid number
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

    // Calculate average and round to nearest integer
    const finalScore = Math.round(total / marks.length);

    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
}