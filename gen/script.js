function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}

function getSeverity(roll) {
    if (roll <= 6) return "Heavy Injury";
    if (roll <= 14) return "Medium Injury";
    return "Light Injury";
}

function generateInjury() {
    const roll = rollDice();
    const severity = getSeverity(roll);
    const bodyPart = document.getElementById("body-part").value;

    return `Roll: ${roll}\nSeverity: ${severity}\nAffected: ${bodyPart}`;
}

function displayResult() {
    const result = generateInjury();
    document.getElementById("result").innerHTML = `<pre>${result}</pre>`;
}

