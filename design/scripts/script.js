const rates = document.querySelectorAll('.rate');
const submitBtn = document.getElementById('submit');
const ratingCard = document.getElementById('rating-card');
const thankYou = document.getElementById('thank-you');
const result = document.getElementById('result');

let selected = null;

rates.forEach(btn => {
  btn.addEventListener('click', () => {
    rates.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selected = btn.textContent;
  });
});

// submit
submitBtn.addEventListener('click', () => {
  if (!selected) {
    alert("1");
    return;
  }

  ratingCard.classList.add('hidden');
  thankYou.classList.remove('hidden');
  result.textContent = `You selected ${selected} out of 5`;
});