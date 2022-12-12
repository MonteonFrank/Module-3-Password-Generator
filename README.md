# Module-3-Password-Generator
Password Generator with JavaScript

<h2><strong>Description</strong></h2>

<p>For the password creation, JavaScript was used to create variables, formulas as well as prompts to obtain the user's spefication.
Depending on the user's answers, these are stored in a bolean variable and at the end, depending on the answers, is the char string that wil be used which contains normal, upper, special and number characters.If one of the users answers ommits one of the set of characters, these are not used. </p>

<h2><strong>Password Length</strong></h2>
<p>For the password length, condicionals were used to only allow the user to select a password between 8 and 128 characters. If the user provides a number below or above the stipulated, an alert command will pop up stating that they need to select a password length between 8 and 128 and will restart the process again.</p>

<h2><strong>Formula</strong></h2>
<p>The formula to get the random number was partially obtained in Overstack Overflow however the way it works is that we use the random command to get a random number between 0 and 1 and then its rounded up using the floor command. Afterwards, it is multiplied by the Password length which then is used with the charat command to select a variable from the charset selected. </p>
  
<h2><strong>What did I learn?</strong></h2>
<p>During this challenge I learned to use JavaScript a bit more however, Im aware that there is one point in the user story which I was not able to complete. That is for the password to contain at least one upper, one special character and one number. I wrote several versions of the code but I was not able to limit the password to the password length provided. The only way to show these characters is by putting a long password length. </p>

<p>This is something that I will try to aim to fix after it is submitted via tutoring sessions.</p>
