function onlyCharacter(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
        return "Invalid";
    }

    // Remove all non-alphabetic characters and spaces, then convert to uppercase
    let cleaned = str.replace(/[^a-zA-Z]/g, '').toUpperCase();

    return cleaned;
}