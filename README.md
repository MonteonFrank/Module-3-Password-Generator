# Module-3-Password-Generator
Password Generator with JavaScript

<h2><strong>Description</strong></h2>

<p>For the password creation, JavaScript was used to create variables, formulas as well as prompts to obtain the user's spefication.
Depending on the user's answers, these are stored in a bolean variable and at the end, depending on the answers, is the char string that wil be used which contains normal, upper, special and number characters. Additiionally for each question answered as yes, a variable of that type will be selected at random and then substracted at the end fromt he Password Length. If one of the users answers ommits one of the set of characters, these are not used and the counter is not added and at the end, the combination of answers will create the password.. </p>

<p>There are 14 scenarios in the application which are:</p>
<table>
  <tr>
    <th>Scenario</th>
    <th>Lower Case</th>
    <th>Upper Case</th>
    <th>Special Characters</th>
    <th>Number Case</th>
    <th>Outcome</th>
  </tr>
  <tr>
    <th>1</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>All Variables</th>
  </tr>
  <tr>
    <th>2</th>
    <th>No</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Upper Case, Special Characters and Numbers</th>
  </tr>
  <tr>
    <th>3</th>
    <th>Yes</th>
    <th>No</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Lower Case, Special Characters and Numbers</th>
  </tr>
  <tr>
    <th>4</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>No</th>
    <th>Yes</th>
    <th>Lower Case, Upper Case and Numbers</th>
  </tr>
  <tr>
    <th>5</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>no</th>
    <th>Lower Case, Upper Case and Special Characters</th>
  </tr>
  <tr>
    <th>6</th>
    <th>No</th>
    <th>No</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>Special Characers and Numbers</th>
  </tr>
  <tr>
    <th>7</th>
    <th>Yes</th>
    <th>No</th>
    <th>No</th>
    <th>Yes</th>
    <th>Lower case and Numbers</th>
  </tr>
  <tr>
    <th>8</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>No</th>
    <th>No</th>
    <th>Lower Case and Upper Case</th>
  </tr>
  <tr>
    <th>9</th>
    <th>No</th>
    <th>Yes</th>
    <th>Yes</th>
    <th>No</th>
    <th>Upper Case and Special Characters</th>
  </tr>
 <tr>
    <th>10</th>
    <th>No</th>
    <th>No</th>
    <th>No</th>
    <th>Yes</th>
    <th>Numbers Only</th>
  </tr>
 <tr>
    <th>11</th>
    <th>Yes</th>
    <th>No</th>
    <th>No</th>
    <th>No</th>
    <th>Lower Case Only</th>
  </tr>
 <tr>
    <th>12</th>
    <th>No</th>
    <th>Yes</th>
    <th>No</th>
    <th>No</th>
    <th>Upper Case Only</th>
  </tr>
 <tr>
    <th>13</th>
    <th>No</th>
    <th>No</th>
    <th>Yes</th>
    <th>No</th>
    <th>Special Characters Only</th>
  </tr>
<tr>
    <th>14</th>
    <th>No</th>
    <th>No</th>
    <th>No</th>
    <th>No</th>
    <th>No Characters but function restarts asking for at least 1 variable</th>
  </tr>
</table>
</table>


<h2><strong>Password Length</strong></h2>
<p>For the password length, condicionals were used to only allow the user to select a password between 8 and 128 characters. If the user provides a number below or above the stipulated, an alert command will pop up stating that they need to select a password length between 8 and 128 and will restart the process again.</p>

<h2><strong>Formula</strong></h2>
<p>The formula to get the random number was partially obtained in Overstack Overflow however the way it works is that we use the random command to get a random number between 0 and 1 and then its rounded up using the floor command. Afterwards, it is multiplied by the char set length in order to have more probabilities rather than the password length.</p>
  
<h2><strong>What did I learn?</strong></h2>
<p>During this challenge I learned to use JavaScript a bit more however, I am sure the code can be otpmized, specially with the combination of answers fromt the user. It was challenging but fun at the same time. </p>

<h2><strong>Screenshots and links</strong></h2>
<p>How the webpage should look when opening:</p>
<p>![image](https://user-images.githubusercontent.com/112662397/208281534-f24a742e-b209-40b2-86bf-5ec4b2192fc2.png)</p>

<p>How the webpage should look when you click on the generate password and all variables are true and with 8 character long password</p>
<p>![image](https://user-images.githubusercontent.com/112662397/208281555-f04d741c-0195-4692-99ef-b5bfd98de1d6.png)</p>

<p>Link to github pages </p>
<p>https://monteonfrank.github.io/Module-3-Password-Generator/</p>

