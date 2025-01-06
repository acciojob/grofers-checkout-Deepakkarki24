const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  let prices = document.querySelectorAll(".price");
  let table = document.querySelector("table");

  let sum = 0;
  prices.forEach((price) => {
    sum += parseInt(price.textContent);
  });

  let lastRow = document.createElement("tr");
  let rowValue = document.createElement("td");

  rowValue.id = "ans";
  rowValue.innerHTML = sum;

  lastRow.append(rowValue);
  table.append(lastRow);
};

getSumBtn.addEventListener("click", getSum);
