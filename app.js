var softRed = 'rgb(238, 54, 54)';
var softGreen = 'rgb(132, 207, 19)';

/*
    Here is the regex for emails. Criteria is listed below
        - Starts with a alpha numeric character
        - Email username must be 2 or more characters long
        - Requires a @ symbol surrounded by characters
        - Requires a . symbol surrounded by characters
        - Ends with 1 or more alpha numeric characters
*/

var emailRegEx = /^[A-z][A-z|0-9]+\@[A-z]+\.[A-z]+$/;

/*
    Here is the regex for non country code phone numbers. Criteria is listed below
        - First character starts with a non zero numeric value
        - Starts with 3 numberic characters (area code) with optional parenthesis surrounding them
        - Requires 3 numeric characters (exchange code) following the area code
        - Requires 4 numeric characters (line number) following the exchange code
        - Has optional - symbols between area code, exchange code, and line number
*/

var phoneRegEx = /(^(\([1-9])[0-9]{2}\)|^[1-9][0-9]{2})\-?[0-9]{3}\-?[0-9]{3}[0-9]$/;

/**
 * Applies the regex based off the RegEx Object passed in through the parameter. Based off of the
 * regex check it will change the background color of the input field green for a check and red 
 * for a fail. 
 * 
 * @param {object} props Object of data passed in from change event handler input field id and
 * regex is passed in and accessed through the data key
 * 
 */
function validate(props){
    if(props.data.regex.test($(props.data.type).val())){
        $(props.data.type).css('background-color', softGreen);
    }
    else{
        $(props.data.type).css('background-color', softRed);
    }
}

/*
    Event Handlers for changes of the specified input fields. When there is a change in the input field
    it calls the validate function and passes the id and regex object specified for that field through 
    the json object. 
*/
$('#email').change({type: '#email', regex: emailRegEx}, validate);

$('#phone').change({type: '#phone', regex: phoneRegEx}, validate);