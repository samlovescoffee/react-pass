import Form from './form';

let currentUser = localStorage.getItem("LoggedIn");
let formTitle;

if (!currentUser) {
	formTitle = "Sign Up"
} else {
	formTitle = "Sign In"
}

function LargeLogin() {
	return Form(formTitle);
}

export default LargeLogin
