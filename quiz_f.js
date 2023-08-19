function submitQuiz() {
    // Get the selected options
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');

    // Check if all questions are answered
    if (!q1Answer || !q2Answer || !q3Answer) {
      alert("Please answer all questions!");
      return;
    }

    // Calculate the score
    let score = 0;
    if (q1Answer.value === 'b') {
      score++;
    }
    if (q2Answer.value === 'a') {
      score++;
    }
    if (q3Answer.value === 'b') {
      score++;
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerText = `You scored ${score} out of 3.`;
  }