console.log('Client.js is working.');
$(document).ready(readyNow);
function readyNow() {
    console.log('jQuery ready.');
    getClass();
} //end readyNow function

function getClass() {
    $.ajax({
        method: 'GET',
        url: '/sirius'
    }).then(function(response){
        console.log('response:', response);
        showClass(response);
    }).catch(function(error){
        console.log('Error in the request to server for the Sirius Class.', error);
    });
    console.log('In code after ajax call');
}

function showClass(studentArray) {
    $('#classMates').empty();
    for (let student of studentArray){
        $('#classMates').append(`
        <div class="col-3">
        <div class="card">
            <div class="card-header">Name: ${student.name}</div>
            <div class="card-body">Favorite Food: ${student.food}</div>
            <div class="card-body">Favorite Color: ${student.color}</div>
            <div class="card-body">Games Owned: ${student.game}</div>
            <div class="card-footer">WOOF!</div>
        </div>
        </div>
        `)
    }
}