let password = "a!";

function containsNumber (str){return /\d/.test(str)};
function containsLowerLetter (str){return /[a-z]/.test(str)};
function containsUpperLetter (str){return /[A-Z]/.test(str)};
function contiansSpecialChar(str){const specialChar =/[!@#$%^&*]/; return specialChar.test(str)};

if (containsNumber(password)===false){console.log ("Your password needs at least one number")}
else if (containsLowerLetter(password)===false){console.log("Your password needs at least one lower-case letter")}
else if (containsUpperLetter(password)===false){console.log("Your password needs at least one upper-case letter")}
else if (contiansSpecialChar(password)===false){console.log("Your password needs at least one special character")}
else if (password.length < 10 || password.length >20)
{console.log ("Your password must be between 10 and 20 characters")}
else [console.log("Acceptable Password!")];


