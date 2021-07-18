let form = document.getElementById("register-email-form");
let count = 1;
let check = false;


checkExistEmail = (email) =>{
	for (let i = 0; i < localStorage.length; i++){
		let key = localStorage.key(i);
		if(localStorage.getItem(key) === email) {
			alert("Email already registered. Stay tuned for more updates!!");
			return true;
		}
	}
}


registerEmail = (event) => {
	event.preventDefault();
	let email = document.getElementById("email").value;
	let check = checkExistEmail(email);	
	if (check != true){
		localStorage.setItem(`Email ${count}:`, email);
		count += 1;
		alert("Email successfully registered!");
	}
}


form.addEventListener("submit", registerEmail);
