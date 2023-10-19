let name =
{
	username: "john",
	password: "guessmypassword"
}

let database = [
	{
		username: "john",
		password: "guessmypassword"
	}
];

let newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is pretty cool!"
	}
];

let userNamePrompt = prompt("Whats your user name?");
let passwordPrompt = prompt("Whats your password?");

function signIn(user, pass) {
	if(user === database[0].username &&
	   pass === database[0].password) {
		console.log(newsFeed)
	}else {
		alert("Sorry, incorrect username and password.")
	}
}