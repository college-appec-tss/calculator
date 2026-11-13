const inputs = document.querySelectorAll('input');

function calculateRates() {
  const goal = parseFloat(document.getElementById('goal').value) || 0;
  const expenses = parseFloat(document.getElementById('expenses').value) || 0;
  const taxRate = parseFloat(document.getElementById('tax').value) || 0;
  const hoursPerWeek = parseFloat(document.getElementById('hours').value) || 1;
  const weeksPerYear = parseFloat(document.getElementById('weeks').value) || 1;

  const taxMultiplier = 1 - (taxRate / 100);
  const grossNeeded = taxMultiplier > 0 ? (goal + expenses) / taxMultiplier : 0;

  const totalHours = hoursPerWeek * weeksPerYear;
  const hourlyRate = totalHours > 0 ? grossNeeded / totalHours : 0;
  const dailyRate = hourlyRate * 8;
  const projectRate = hourlyRate * (hoursPerWeek * 2);

  document.getElementById('hourly-result').textContent = `$${hourlyRate.toFixed(2)}`;
  document.getElementById('daily-result').textContent = `$${dailyRate.toFixed(2)}`;
  document.getElementById('project-result').textContent = `$${projectRate.toFixed(2)}`;
}

inputs.forEach(input => input.addEventListener('input', calculateRates));
calculateRates();
