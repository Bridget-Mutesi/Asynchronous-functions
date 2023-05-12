// Write an asynchronous function that accepts a message string and 
// a delay time in milliseconds. The function should log the message 
// to the console after the specified delay time.
function messageWithDelay(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log(message);resolve()},delay)
    });
}
messageWithDelay("Am tired",2000);

// You have an array of user IDs and a function getUserData(id) that 
// returns a Promise with user data when given a user ID. Write an asynchronous 
// function that fetches and logs the data for each user ID one by one, in sequence.

const userIds = [1,2,3,4,5,6];

async function fectchId(userIds){
    for(id in userIds){
        const data = await getUserData(id);
        console.log(data);
    }
    
}
fectchId();


// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's 
//  an error. Write a function that calls performTask() and logs a custom 
//  success message if the task is successful, and a custom error message 
//  if there's an error.

let sucess = true;
async function performTask(){
    let promise = new Promise(function(resolve, reject){
        if(success){
            resolve('Task is successful')
        }
        else{
            reject('An error occured')
        }
    }).then(()=>{console.log('The task is complete');})
    .catch(()=>{console.log('An error occured');})
    .finally(()=>{console.log('I am still happy')})

    console.log(promise);
}
performTask();

