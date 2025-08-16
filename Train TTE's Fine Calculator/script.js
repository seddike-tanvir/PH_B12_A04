function totalFine(fare) {
    // Check if input is a number and positive
    if (typeof fare !== 'number' || fare <= 0 || isNaN(fare)) {
        return "Invalid";
    }

    // Calculate fine: fare + 20% surcharge + 30 BDT service charge
    let surcharge = fare * (20 / 100);
    let total = fare + surcharge + 30;

    return total;
}