const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const submitExpenseBtn = document.getElementById("submitExpense");
const expensesList = document.getElementById("expensesList");
const expenseForm = document.getElementById("expenseForm");

class Expense {
  constructor(description, amount, category, date) {
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}

const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function saveExpensesToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addOrUpdateExpense(event) {
  event.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const date = dateInput.value;

  const editIndex = document.getElementById("editIndex").value;

  if (editIndex === "") {
    const expense = new Expense(description, amount, category, date);
    expenses.push(expense);
  } else {
    expenses[editIndex] = new Expense(description, amount, category, date);
    document.getElementById("editIndex").value = "";
    submitExpenseBtn.innerText = "Submit Expense";
  }

  saveExpensesToLocalStorage();
  renderExpenses();
  expenseForm.reset();
}

function renderExpenses() {
  let htmlString = "";
  expenses.forEach((expense, index) => {
    htmlString += `<tr>
      <td>${expense.description}</td>
      <td>${expense.category}</td>
      <td>$${expense.amount.toFixed(2)}</td>
      <td>${expense.date}</td>
      <td>
        <button onclick="editExpense(${index})" class="btn btn-primary">Edit</button>
        <button onclick="deleteExpense(${index})" class="btn btn-danger">Delete</button>
      </td>
    </tr>`;
  });
  expensesList.innerHTML = htmlString;
}

function editExpense(index) {
  const expense = expenses[index];
  descriptionInput.value = expense.description;
  amountInput.value = expense.amount;
  categoryInput.value = expense.category;
  dateInput.value = expense.date;
  document.getElementById("editIndex").value = index;

  submitExpenseBtn.innerText = "Update Expense";
}

function deleteExpense(index) {
  if (confirm("Are you sure you want to delete this expense?")) {
    expenses.splice(index, 1);
    saveExpensesToLocalStorage();
    renderExpenses();
  }
}

function sortExpenses(property, order) {
  expenses.sort((a, b) => {
    if (order === "asc") {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
  renderExpenses();
}

expenseForm.addEventListener("submit", addOrUpdateExpense);
renderExpenses();
