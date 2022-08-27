let password = "aA2!!!!!!!!!!"
nums = [0,1,2,3,4,5,6,7,8,9]
function containsNumber (str){return /\d/.test(str)} 
function containsLowerLetter (str){return /[a-z]/.test(str)}
function containsUpperLetter (str){return /[A-Z]/.test(str)}
function contiansSpecialChar(str){const specialChar =["!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?~/"]; return specialChar.test(str)}

if (containsNumber(password)===false){console.log ("Need to add a number")}
else if (containsLowerLetter(password)===false){console.log("Need to add a lower-case letter")}
else if (containsUpperLetter(password)===false){console.log("Needs at least one upper-case letter")}
else if (contiansSpecialChar(password)===false){console.log("Needs at least one special character")}
else if (password.length < 10 || password.length >20)
{console.log ("Password must be between 10 and 20 characters")}
else [console.log("Acceptable")]


