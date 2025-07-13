username = 'john';


// greet user function
function greetUser(username) {
    // `get hour and assign it to a variable
    let date = new Date();
    let hour = date.getHours();
    // `if hour is < 12  AND  < 18then change the greeting-text to Good Morning, John`
    if (hour < 12 && hour < 18){
        user_greet = document.querySelector('#greeting-text');
        user_greet.innerHTML = "Good Morning," + username;
    }
// `if hour is > 12  AND < 18 then change greeting-text to Good Afternoon, John`
    if (hour > 12 && hour < 18){
        user_greet = document.querySelector('#greeting-text');
        user_greet.innerHTML = "Good Afternoon," + username;
    }
// `if hour is > 12  AND > 18 then change greeting-text to Good Evening, John`
    if (hour > 12 && hour > 18){
        user_greet = document.querySelector('#greeting-text');
        user_greet.innerHTML = "Good Evening," + username;
    }
}




