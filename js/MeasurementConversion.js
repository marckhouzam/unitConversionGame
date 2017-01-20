/*******************************************************************************
 * Copyright (c) 2017 Marc Khouzam.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *******************************************************************************/
const units = [ "meter(m)", "decimiter(dm)", "centimeter(cm)", "milimiter(mm)" ];
var correctAnswer;

function askQuestion() {
	var startingUnit = Math.floor(Math.random() * units.length);
	var endingUnit;
	do {
		endingUnit = Math.floor(Math.random() * units.length);
	} while (startingUnit == endingUnit);

	var amount = Math.floor(Math.random() * 3000);
	if (endingUnit > startingUnit) {
		correctAnswer = amount * Math.pow(10, endingUnit - startingUnit);
	} else {
		correctAnswer = amount / Math.pow(10, startingUnit - endingUnit);
	}

	var question = document.getElementById("question");
	question.innerHTML = "Convert " + amount + " " + units[startingUnit] + " to " + units[endingUnit];
}

function verifyAnswer() {
	var answerField = document.getElementById("answer");
	var answer = answerField.value;
	// Clear whatever the user typed as we have read it
	answerField.value = "";
	var feedback = document.getElementById("feedback");

	if (parseInt(answer) != parseInt(correctAnswer)) {
		feedback.innerHTML = "Sorry, try again!";
	} else {
		feedback.innerHTML = "You are right! How about this new one?";
		askQuestion();
	}
}

