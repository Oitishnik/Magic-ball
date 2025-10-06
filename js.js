    const input = document.createElement('input');
    input.placeholder = 'Введіть своє питання...';

    const ball = document.createElement('div');
    ball.className = 'ball';

    const answer = document.createElement('div');
    answer.id = 'answer';
    ball.appendChild(answer);

    document.body.append(input, ball);

    const answers = ['Так', 'Ні', 'Можливо', 'Звісно', 'Мабуть ні'];

    ball.addEventListener('click', () => {
      const question = input.value.trim();
      if (question === '') {
        answer.textContent = 'Введіть питання!';
      } else {
        const random = Math.floor(Math.random() * answers.length);
        answer.textContent = answers[random];
      }
    });