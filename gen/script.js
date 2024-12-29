function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}

function getSeverity(roll) {
	if (roll === 1) return "Re-Roll";
	if (roll >= 2 && roll <= 9) return "Heavy Injury";
	if (roll >= 10 && roll <= 15) return "Medium Injury";
	if (roll >= 16 && roll <= 19) return "Light Injury";
	if (roll === 20) return "No Injury";
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

