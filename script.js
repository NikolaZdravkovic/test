const form1 = document.getElementById("form1");

const showForm1 = document.getElementById("showForm1");

const showEmail = document.getElementById("showEmail");
const showPhone = document.getElementById("showPhone");


const phone = document.getElementById("phone");
const email = document.getElementById("email");

const checked = document.getElementById("checked");

const loading = document.getElementById("loading");
const showEnd = document.getElementById("showEnd");

const currency = document.getElementById("currency");

const termsError = document.getElementById("showMessage");
const currencyError = document.getElementById("showCurrencyError");



// CLICK ON EMAIL


document.getElementById('1').addEventListener('click', (e) => {

  showEmail.style.display = 'block';
  showPhone.style.display = 'none';

  phone.value = '';

  showPhone.classList.remove("error");
  showPhone.classList.remove("success");

  termsError.innerHTML = "";
  currencyError.innerHTML = "";


  document.getElementById("checked").checked = false;

  document.getElementById("currency").value = "";



});



// CLICK ON PHONE

document.getElementById('2').addEventListener('click', (e) => {

  showEmail.style.display = 'none';

  email.value = '';
  showEmail.classList.remove("error");
  showEmail.classList.remove("success");


  showPhone.style.display = 'block';


  termsError.innerHTML = "";
  currencyError.innerHTML = "";


  document.getElementById("checked").checked = false;

  document.getElementById("currency").value = "";



});


const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const endMsg = () => {
  document.getElementById('loading').style.display = "none";
  document.getElementById('showEnd').style.display = "block";
}

const checkErrors = () => {
  document.getElementById('loading').style.display = "none";
  document.getElementById('showForm1').style.display = "block";
}


const ok = () => {
  showEnd.style.display = 'none';
  form1.style.display = "block"
  window.location.reload()
}




// FORM VALIDATION


form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const filter = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  termsError.innerHTML = "";
  currencyError.innerHTML = "";


  loading.style.display = 'block';
  showForm1.style.display = 'none';



  if (showEmail.style.display === "" || showEmail.style.display === "block") {
    if (!filter.test(email.value)) {
      showError(email, 'Email is not valid')
      setTimeout(checkErrors, 2000);
      return false;
    } else {
      showSuccess(email)
    }

  } else {

    if (phoneReg.test(phone.value)) {
      showSuccess(phone);
    } else {
      showError(phone, "Phone number is not valid");
      setTimeout(checkErrors, 2000);
      return false;


    }

  }


  if (currency.value === "") {
    setTimeout(checkErrors, 2000);
    text = "* Please select currency";
    currencyError.innerHTML = `<span class="showCurrency" style='color: red;'>${text}</span>`;
    return false;
  }


  if (checked.checked === false) {
    setTimeout(checkErrors, 2000);
    text = "* Please confirm that you have read the terms and conditions";
    termsError.innerHTML = `<span class="showMessage" style='color: red;'>${text}</span>`;
    return false;
  }

  setTimeout(endMsg, 2000);

  ;

});
















