document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('change-color-btn');

  if (!btn) {
    console.warn('Кнопка #change-color-btn не найдена');
    return;
  }
  const cards = document.querySelectorAll('.card');
  const colors = [
    '#FFF0F5', 
    '#FFE4E1', 
    '#F0E68C',
    '#E6E6FA',
    '#FAFAD2', 
    '#FFFACD', 
    '#DCDCDC', 
  ];
  btn.addEventListener('click', () => {
    cards.forEach(card => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      card.style.backgroundColor = randomColor;
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    });
  });
});
