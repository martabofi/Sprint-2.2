
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value.trim() === "" || fName.value.length < 3 || !fName.value.match(/^[A-Za-z]/,)) {
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if (fLastN.value.trim() === "" || fLastN.value.length < 3 || !fLastN.value.match(/^[A-Za-z]/,)) {
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	if (fAddress.value.trim() === "" || fAddress.value.length < 3 || !fAddress.value.match(/^[A-Za-z]/,)) {
		fAddress.classList.add("is-invalid");
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	if (fPassword.value.trim() === "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[\w\d]*$/)) {
		fPassword.classList.add("is-invalid");
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	if (fPhone.value.trim() === "" || fPhone.value.length !== 9 || !fPhone.value.match(/^\d/,)) {
		fPhone.classList.add("is-invalid");
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}

	if (fEmail.value.trim() === "" || fEmail.value.length <3 || !fEmail.value.match(/\S+@\S+.\S+/,)) {
		fEmail.classList.add("is-invalid");
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}


	if (error > 0) {
		alert("Error");
		return false;
	} else {
		alert("OK");
		return true;
	}

}
