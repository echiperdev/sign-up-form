# Project: Sign-up Form | The Odin Project

Simple sign-up form built with Bootstrap 5.0.

## Functionality

### CONSTANTS
Responsive DOM elements are stored in constants. A **timeout** variable is declared, but presently stores no value.

### VALIDATOR OBJECT CONSTRUCTOR
The **Validator** object constructor function employs a password parameter as an argument.

### CHECK OBJECT PROTOTYPE
The **check** object prototype of the validator object employs a password parameter to be tested against the regular expressions stored in the **strongPassword** and **mediumPassword** constants. Weak passwords are displayed in red, medium in blue and strong in green.

### PASSWORD VALIDATOR
A new instance of the **Validator** object is created and stored in the **passwordValidator** constant.

### EVENT LISTENERS
An event listener is attached to the **form** to handle input validation by employing the **was-validated** class from Bootstrap.

An event listener is attached to the **password** input to handle strength validation using the **check** method of the **Validator** object.

An event listener is attached to the **confirmaation** input to handle password match behavior.