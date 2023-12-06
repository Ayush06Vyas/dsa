function numberOfMatches(n: number): number {
    // Start with zero matches played.
    let totalMatches = 0;

    // Keep doing the following as long as there is more than one team.
    while (n > 1) {
        // If the number of teams is even (like 6 or 8), each team plays with another team.
        if (n % 2 === 0) {
            // Count the matches played (each pair plays a match).
            totalMatches += n / 2;
            // Half of the teams advance to the next round.
            n /= 2;
        } else {
            // If the number of teams is odd (like 7), one team gets a free pass to the next round.
            // The rest play matches, and one team will be left without a match, which is okay.
            // Count the matches played (excluding the team with a free pass).
            totalMatches += (n - 1) / 2;
            // Calculate the number of teams advancing to the next round (including the one with a free pass).
            n = (n - 1) / 2 + 1;
        }
    }

    // Return the total number of matches played.
    return totalMatches;
};

numberOfMatches(7);
console.log(numberOfMatches(3));
console.log(numberOfMatches(7));
console.log(numberOfMatches(14));