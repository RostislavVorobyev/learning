const calcTips = function (sum) {
  if (sum > 300 || sum < 50) return sum * 0.2;
  else return sum * 0.15;
};

const bills = [125, 555, 44, 22, 124, 100, 0];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

function calcAaverage(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

calcAaverage([2, 2, 4, 4]);
