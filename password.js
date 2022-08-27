let password = "A2!!!"
nums = [0,1,2,3,4,5,6,7,8,9]
function containsNumber (str){return /\d/.test(str)} 
function containsLetter (str){return /[a-z]/.test(str)}

if (containsNumber(password)===false){console.log ("Need to add a number")}
else if (containsLetter(password)===false){console.log("Need to add a lower-case letter")}
else if (password.length < 10 || password.length >20)
{console.log ("Password must be between 10 and 20 characters")}
else [console.log("Acceptable")]


