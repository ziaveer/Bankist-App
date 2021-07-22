"use strict";
const account1 = {
  owner: "Ziaul Haq",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDates: [
    "2019-11-18T23:31:17.178Z",
    "2019-12-23T09:42:02.383Z",
    "2020-11-28T01:15:04.904Z",
    "2021-04-01T12:17:24.185Z",
    "2020-05-08T11:11:59.604Z",
    "2020-07-26T18:01:17.194Z",
    "2020-07-28T21:36:17.929Z",
    "2015-08-01T10:51:36.790Z"
  ],
  interestRate: 1.2, // %
  pin: 1111,

  currency: "INR",
  locale: "en-IN"
};

const account2 = {
  owner: "Simnani Abbasi",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates: [
    "2019-10-01T14:15:13.035Z",
    "2019-12-30T09:48:26.867Z",
    "2019-10-25T06:04:33.907Z",
    "2020-08-25T08:18:16.235Z",
    "2020-03-05T16:33:36.386Z",
    "2020-02-10T11:43:46.374Z",
    "2019-12-23T09:42:02.383Z",
    "2020-11-28T01:15:04.904Z"
  ],
  currency: "USD",
  locale: "en-US",
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: "Adnan Javed",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movementsDates: [
    "2019-10-01T14:15:13.035Z",
    "2019-12-30T09:48:26.867Z",
    "2019-11-05T06:04:33.907Z",
    "2020-02-15T08:18:16.235Z",
    "2020-08-15T16:33:36.386Z",
    "2020-02-24T11:43:46.374Z",
    "2019-12-23T09:42:02.383Z",
    "2020-11-28T01:15:04.904Z"
  ],
  currency: "INR",
  locale: "en-IN",
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: "Ravi Pratap",
  movements: [430, 1000, 700, 50, 90],
  movementsDates: [
    "2020-10-01T14:15:13.035Z",
    "2011-12-30T09:48:26.867Z",
    "2013-10-25T06:04:33.907Z",
    "2019-08-25T08:18:16.235Z",
    "2012-03-05T16:33:36.386Z"
  ],
  currency: "USD",
  locale: "en-US",
  interestRate: 1,
  pin: 4444
};
const test = {
fir: 'zia',
cal: function(){
  console.log('func');
}
};

const account = [account1, account2, account3, account4];
// const xxx = new Date();
// console.log(new Date(1577094122383));
// console.log(xxx.);

// const xy = account.map((acc) => {return acc.mob = [new Date]});
// console.log(xy + 'ss');

// Elements
let loggedAccount;
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
let sorted = false;
//test timer


let timer;

const testTimer = function () {
  let count =100;
  const tick = function(){
    const min = Math.trunc(count / 60).toString().padStart(2, 0);
    const sec = Math.trunc(count % 60).toString().padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if(count === 0 ) {
      
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Lets gets started!'
      
    }
    count--;
  }
  tick();
  timer = setInterval(tick, 1000);
  
  // console.log(count);
};

// Timer

// Chnage footer Number Format and Infalte date on Header.
const intlNumberFormat = function (ele) {
  const labDate = new Date();
  labelDate.textContent = `${labDate.getFullYear()}/${(labDate.getMonth() + 1)
    .toString()
    .padStart(2, 0)}/${labDate.getDate().toString().padStart(2, 0)}, ${labDate
    .getHours()
    .toString()
    .padStart(2, 0)}:${labDate.getMinutes().toString().padStart(2, 0)}`;
  return new Intl.NumberFormat(loggedAccount.locale, {
    style: "currency",
    currency: `${loggedAccount.currency}`
  }).format(ele);
};
// display movements  Date
const datePrint = function (index) {
  const datePrint = new Date(loggedAccount.movementsDates[index]);
  const year = datePrint.getFullYear();
  const mont = (datePrint.getMonth() + 1).toString().padStart(2, 0);
  const day = datePrint.getDate().toString().padStart(2, 0);
  const currentDate = new Date();
  console.log(currentDate.toISOString());
  if (currentDate.getDate() - day == 0) {
    return "Today";
  } else if (currentDate.getDate() - day == 1) {
    return `Yesterday`;
  } else if (currentDate.getDate() - day == 2) {
    return `2 days ago`;
  } else if (currentDate.getMonth() - mont == 1) {
    return `1 months ago`;
  } else {
    return `${year}/${mont}/${day}`;
  }
};

// print movements.
const printMovements = function (movement) {
  containerMovements.innerHTML = "";
  // const moves = sort?loggedAccount.movements.slice("").sort((a, b) => a - b):acc.movements;

  movement.forEach((element, index) => {
    // console.log(element, index);
    const dateAndTime = datePrint(index);

    const type = element < 0 ? `withdrawal` : `deposit`;

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}
          </div>
          <div class="movements__date">${dateAndTime}</div>
          <div class="movements__value">${intlNumberFormat(element)}</div>
        </div>

    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// console.log(containerMovements.innerHTML);

// Compute User Name from object
const computeUserName = function (accs) {
  accs.forEach(acc => {
    // console.log(xm.owner);
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(un => un[0])
      .join("");
  });
};
// Calculate Balance
const calculateBalance = function (acc) {
  acc.totalBalance = acc.movements.reduce(
    (acc, curMov) =>
      // console.log(acc);
      acc + curMov,
    0
  );
  labelBalance.textContent = `${new Intl.NumberFormat(loggedAccount.locale, {
    style: "currency",
    currency: `${loggedAccount.currency}`
  }).format(loggedAccount.totalBalance)}`;
};

// Display Summary.
const diplaySummary = function (currentAccount) {
  const income = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, inMov) => acc + inMov, 0);
  labelSumIn.textContent = `${intlNumberFormat(income)}`;
  // console.log(income);

  const out = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((acc, outMov) => acc + outMov, 0);
  // console.log(out);
  labelSumOut.textContent = `${intlNumberFormat(out)}`;

  const interest = currentAccount.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * currentAccount.interestRate) / 100)
    .filter((int, index, arr) => {
      // console.log(arr + 'd');
      return int > 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // console.log(interest);
  labelSumInterest.textContent = `${intlNumberFormat(interest)}`;
};
// Update UI.
const updateUi = function (loggedAccount) {
  calculateBalance(loggedAccount);
  diplaySummary(loggedAccount);
  printMovements(loggedAccount.movements);
};

// Login function
const login = function () {
  loggedAccount = account.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(inputLoginPin.value);
  if (loggedAccount?.pin === Number(inputLoginPin.value)) {
    console.log(loggedAccount);
    //ui  & message
    labelWelcome.textContent = `Hi! ${loggedAccount.owner.split(" ")[0]}`;
    if(timer){
      clearInterval(timer);
    }
    testTimer();
    updateUi(loggedAccount);
    
    containerApp.style.opacity = 100;

    inputLoginPin.value = "";
    inputLoginUsername.value = "";
    inputLoginPin.blur();
  } else {
    alert("incorrect user name or password ");
    inputLoginPin.value = "";
    inputLoginUsername.value = "";
    inputLoginPin.blur();
  }
  // console.log(account.findIndex((arr) => arr.username === loggedAccount.username));
  //  else{
  //    console.log('incorrect');
  //  }
};
// Login Button.
btnLogin.addEventListener("click", e => {
  e.preventDefault();
  login();
});
// console.log(loggedAccount);
// calling to create user name.
computeUserName(account);

// Transfer Button.
btnTransfer.addEventListener("click", e => {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  // console.log(transferAmount);
  const currentDate = new Date();
  const toTransfer = account.find(
    toAccount => toAccount.username === inputTransferTo.value
  );
  console.log(toTransfer);
  if (
    transferAmount > 0 &&
    toTransfer &&
    toTransfer?.username !== loggedAccount.username &&
    transferAmount <= loggedAccount.totalBalance
  ) {
    toTransfer.movements.push(transferAmount);
    toTransfer.movementsDates.push(currentDate.toISOString());
    loggedAccount.movementsDates.push(currentDate.toISOString());
    loggedAccount.movements.push(-transferAmount);
    // close timer
    clearInterval(timer);
    testTimer();

    updateUi(loggedAccount);
    // console.log(loggedAccount.movements);
    // console.log(toTransfer.movements);
    inputTransferAmount.value = inputTransferTo.value = "";
  } else {
    inputTransferAmount.value = inputTransferTo.value = "";
    alert(`incorrect user name`);
    inputTransferAmount.blur();
  }

  // if(toTransfer)
  // console.log(inputTransferAmount.value);
});

// account closed button.
btnClose.addEventListener("click", e => {
  e.preventDefault();
  const closeUser = inputCloseUsername.value;
  const accPos = account.findIndex(acc => acc.username === closeUser);
  // inputLoginPin.value;
  if (
    loggedAccount.username === closeUser &&
    loggedAccount.pin === Number(inputClosePin.value) &&
    accPos >= 0
  ) {
    account.splice(accPos, 1);
    console.log("deleted");
    containerApp.style.opacity = 0;
  } else {
    console.log("incorrect");
  }
});

// Loan button
btnLoan.addEventListener("click", e => {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  const currentDate = new Date();
  // console.log(Boolean(loanAmount));
  if (loanAmount && loggedAccount.movements.some(am => am > loanAmount * 0.1)) {
    loggedAccount.movements.push(loanAmount);
    loggedAccount.movementsDates.push(currentDate.toISOString());
    clearInterval(timer);
    testTimer();
    updateUi(loggedAccount);
    inputLoanAmount.value = "";
  } else {
    alert("With In Limit");
  }
});

console.log(
  account
    .map(e => e.movements)
    .flat()
    .reduce((acc, s) => acc + s, 0)
);
// const x =[1,2,3,[21,[55,[21,54],43], 32], [3,12,23]];
// console.log(x.flat(3));

// Sort Button
btnSort.addEventListener("click", e => {
  e.preventDefault();

  // sorte = true;
  const sortMovements = loggedAccount.movements.slice("").sort((a, b) => a - b);
  if (!sorted) {
    printMovements(sortMovements);
    sorted = !sorted;
  } else {
    printMovements(loggedAccount.movements);
    sorted = !sorted;
  }
  // sorted =true
  // sorted != sorted;
  // console.log(sortMovements.sort((a, b) => a-b));
  // !sorted ? printMovements(sortMovements): printMovements(loggedAccount.movements);

  // printMovements(loggedAccount, !sorted);
  //   sorted = !sorted;
  console.log("sortMovements");
  // console.log(sortMovements.splice(2,1));
  // console.log(sortMovements);
});

