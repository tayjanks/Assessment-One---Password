let password = "aA223343243432!"

function containsNumber (str){return /\d/.test(str)} 
function containsLowerLetter (str){return /[a-z]/.test(str)}
function containsUpperLetter (str){return /[A-Z]/.test(str)}
function contiansSpecialChar(str){const specialChar =/[!@#$%^&*]/; return specialChar.test(str)}

if (containsNumber(password)===false){console.log ("Your password needs at least one number\n"+"
___________                                    .__      ._.
\__    ___/______ ___.__. _____     _________  |__| ____| |
  |    |  \_  __ <   |  | \__  \   / ___\__  \ |  |/    \ |
  |    |   |  | \/\___  |  / __ \_/ /_/  > __ \|  |   |  \|
  |____|   |__|   / ____| (____  /\___  (____  /__|___|  /_
                  \/           \//_____/     \/        \/\/
")}
else if (containsLowerLetter(password)===false){console.log("Your password needs at least one lower-case letter")}
else if (containsUpperLetter(password)===false){console.log("Your password needs at least one upper-case letter")}
else if (contiansSpecialChar(password)===false){console.log("Your password needs at least one special character")}
else if (password.length < 10 || password.length >20)
{console.log ("Your password must be between 10 and 20 characters")}
else [console.log("Acceptable Password!")]


