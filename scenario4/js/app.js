// delcare state of the form
let state = {
    price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
    loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
    down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
    interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
    property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
    home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
    hoa: document.querySelectorAll('[name="hoa"]')[0].value,
}

// declare variables
let totalLoan,
totalMonths,
monthlyPrincipalInterest,
monthlyPropertyTaxes,
monthlyHomeInsurance,
monthlyHoa,
labels = ["Principal & Interest","Property Tax","Home Insurance","HOA"], 
backgroundColor = [
"rgba(255,99,132,1)",
"rgba(54,162,235,1)",
"rgba(255,206,86,1)",
"rgba(75,192,192,1)",
"rgba(153,102,255,1)",
"rgba(255,159,64,1)",
];
borderColor = [
"rgba(255,99,132,1)",
"rgba(54,162,235,1)",
"rgba(255,206,86,1)",
"rgba(75,192,192,1)",
"rgba(153,102,255,1)",
"rgba(255,159,64,1)",
];

// removes characters and returns only numbers
function getNumber(str) {
    return Number(str.replace(/[^0-9\.-]+/g, ""));
}

// initialize chartJS instance
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: "# of votes",
      data: [
        monthlyPrincipalInterest,
        monthlyPropertyTaxes,
        monthlyHomeInsurance,
        monthlyHoa,
      ],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
myChart.options.animation = false;

// add event listener to inputs

let i;
let inputText = document.getElementsByClassName("form-group__textInput");

for(i = 0; i < inputText.length; i++)
{
  inputTexts[i].addEventListener('input', updateInputsState());
}

function updateInputsState(event){
  let name = event.target.name;
  let value = event.target.value;
  if (name == 'price'){
    value == getNumber(value);
  }
  state = {
    ...state,
    [name]: value
  }
}

console.log(state);