# Module-3-Password-Generator
Password Generator with JavaScript

<h2><strong>Description</strong></h2>

<p>For the password creation, JavaScript was used to create variables, formulas as well as prompts to obtain the user's spefication.
Depending on the user's answers, these are stored in a bolean variable and at the end, depending on the answers, is the char string that wil be used which contains normal, upper, special and number characters. Additiionally for each question answered as yes, a variable of that type will be selected at random and then substracted at the end fromt he Password Length. If one of the users answers ommits one of the set of characters, these are not used and the counter is not added and at the end, the combination of answers will create the password.. </p>

<h2><strong>Password Length</strong></h2>
<p>For the password length, condicionals were used to only allow the user to select a password between 8 and 128 characters. If the user provides a number below or above the stipulated, an alert command will pop up stating that they need to select a password length between 8 and 128 and will restart the process again.</p>

<h2><strong>Formula</strong></h2>
<p>The formula to get the random number was partially obtained in Overstack Overflow however the way it works is that we use the random command to get a random number between 0 and 1 and then its rounded up using the floor command. Afterwards, it is multiplied by the char set length in order to have more probabilities rather than the password length.</p>
  
<h2><strong>What did I learn?</strong></h2>
<p>During this challenge I learned to use JavaScript a bit more however, I am sure the code can be otpmized, specially with the combination of answers fromt the user. It was challenging but fun at the same time. </p>


