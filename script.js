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
  let rowLabel = document.createElement("td");
  let rowValue = document.createElement("td");

  rowLabel.innerHTML = "total";
  rowValue.innerHTML = sum;

  lastRow.append(rowLabel, rowValue);
  table.append(lastRow);
};

getSumBtn.addEventListener("click", getSum);
