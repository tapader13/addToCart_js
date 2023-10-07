function increment(value, price1, item1) {
  let input1 = document.querySelector(value);
  let price = document.querySelector(price1);
  let item = document.querySelector(item1);
  let amount = document.querySelector('#amount');
  let delivary = document.querySelector('#deliv');
  let total = document.querySelector('#tot');
  if (input1.value >= 5) {
    input1.innerHTML = 5;
    alert('highest 5');
  } else {
    input1.value++;
    let result = parseInt(price.innerHTML) + parseInt(item.innerHTML);
    document.querySelector(item1).innerHTML = result;
    let result1 = parseInt(price.innerHTML) + parseInt(amount.innerHTML);
    document.querySelector('#amount').innerHTML = result1;
    let result2 = result1 + parseInt(delivary.innerHTML);
    total.innerHTML = result2;
  }
}

function decrement(value, price1, item1) {
  let input1 = document.querySelector(value);
  let price = document.querySelector(price1);
  let item = document.querySelector(item1);
  let amount = document.querySelector('#amount');
  let delivary = document.querySelector('#deliv');
  let total = document.querySelector('#tot');
  if (input1.value <= 0) {
    return (input1.innerHTML = 0);
  } else {
    input1.value--;
    let result = parseInt(item.innerHTML) - parseInt(price.innerHTML);
    document.querySelector(item1).innerHTML = result;
  }
  let result1 = parseInt(amount.innerHTML) - parseInt(price.innerHTML);
  if (result1 <= 0) {
    total.innerHTML = '00';
    return (document.querySelector('#amount').innerHTML = 0);
  }
  document.querySelector('#amount').innerHTML = result1;
  let result2 = result1 + parseInt(delivary.innerHTML);
  total.innerHTML = result2;
}
