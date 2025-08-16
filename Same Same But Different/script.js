function isSame(arr1, arr2) {
    // Check if both inputs are arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // Check if lengths are the same
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each element at every index
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements match
    return true;
}