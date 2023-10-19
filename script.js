let name =
{
	username: "john",
	password: "guessmypassword"
}

let database = [
	{
		username: "john",
		password: "guessmypassword"
	},
	{
		username: "kevin",
		password: "accounting"
	},
	{
		username: "jim",
		password: "pambeasley"
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
function isUserValid(username, password){
	for(let i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return true;
			}
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsFeed)
	}else {
		alert("Sorry, incorrect username and password.")
	}
}

signIn(userNamePrompt, passwordPrompt)

