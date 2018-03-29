$(document).ready(function () {
    const frontendServer = 'http://localhost:3000';
    const backendServer = 'http://localhost:8080';
    const JWT = window.localStorage.getItem('JWT');

    $.ajax({
        url: backendServer + '/auth',
        method: 'GET',
        headers: {
            'Authorization': JWT
        },
        success: function (JWT) {

        },
        error: function (xhr, status, error) {
            window.location.href = frontendServer + '/login';
        }
    });
});