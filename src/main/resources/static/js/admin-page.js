/**
 * Created by asus on 3/29/2018.
 */
var ws = "http://192.168.1.72:8080/"
var JWT = window.localStorage.getItem('JWT');
$(document).ready(function () {
    loadSpots();
});

function loadSpots() {
    alert("Loading Data...");
    $.ajax({
       url: ws+"spot/loadAllSpots",
        type:'GET',
        headers: {
            'Authorization': JWT
        },

        success: function (res, status) {
           console.log(res);
           console.log(status);
           if (status !== "nocontent") {
               var tableContent;
               var i;
               for (i = 0; i < res.length; i++) {

                   tableContent +=
                       '<tr>\
                         <td>'+ res[i].spotName +'</td>\
                         <td>'+ res[i].address +'</td>\
                         <td>'+ res[i].favouriteCount +'</td>\
                         <td>'+ res[i].commentCount +'</td>\
                         <td><a href="#" class="waves-effect waves-light btn-small" onclick="disableSpot('+ res[i].id +')">Delete</a></td>\
                         <td><a  href="#" class="waves-effect waves-light btn-small" onclick="updateSpot(' +res[i].id + ')">Edit</a></td>\
                    </tr>';
               }
               $('.highlight').find('tbody').append(tableContent);
           }
        }, error: function () {
            console.log("Failed to load data");
        }
    });
}
function updateSpot(id) {
    window.location = "updateSpot?spotId="+id;
}

function disableSpot(id) {
    alert("dasdasd");
    $.ajax({
        url: ws+"spot/disable/"+id,
        type: 'GET',
        headers: {
            'Authorization': JWT
        },
        success: function (res) {
            alert("ASdas");
            location.reload(true);
        },
        error: function () {
            console.log("Failed to delete");
        }

    });
}