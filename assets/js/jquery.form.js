/*!
 * jQuery Form Plugin
 * version: 3.32.0-2013.04.09
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup

 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */


/*VALIDATE RECAPTCHA FIELD SUBMIT FORM */

function validate_form() {

    const recaptcha_box_checked = (grecaptcha.getResponse()) ? true : false;

    if (recaptcha_box_checked) { 
        return true;
    }
    else {
        alert("falta validar o campo 'Não sou um robô'");
        return false;
    }
}
