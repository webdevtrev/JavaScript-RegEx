var softRed = 'rgb(238, 54, 54)';
var softGreen = 'rgb(132, 207, 19)';

var emailRegEx = /\u0027/;
// var emailRegEx = /[A-z]+@[A-z]+.[com]$/g;

var phoneRegEx = /555-555-5555/;

//@[A-z]+[.com]$

function validate(props){
    if(props.data.regex.test($(props.data.type).val())){
        $(props.data.type).css('background-color', softGreen);
    }
    else{
        $(props.data.type).css('background-color', softRed);
    }
}

$('#email').change({type: '#email', regex: emailRegEx}, validate);

$('#phone').change({type: '#phone', regex: phoneRegEx}, validate);