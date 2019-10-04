lightbox.option ({
    'alwaysShowNavOnTouchDevices': true
});

// A simple search function
$(document).ready(() => {
    //select every 'a' tag
    let images = document.getElementsByTagName('a');
    //an event for track key strokes
    $("#search").on("keyup", () => {
        //store the users input value into this 'search' variable
        //and convert it to lower case 
        let search = $("#search").val().toLowerCase();
        //a for loop to look at a specific 'data-alt'
        //tag on all the images
        for (let i = 0; i < images.length; i++){
            let searchValue = images[i].getAttribute('data-alt');
            let searchValue2 = images[i].getAttribute('data-title');
            //show the images w/ the specific search term and 
            //not show anything else
            if (searchValue.toLowerCase().indexOf(search) > -1) {
                images[i].parentNode.style.display = "";
            } else if (searchValue2.toLowerCase().indexOf(search) > -1) {
                images[i].parentNode.style.display = "";
            } else {
                images[i].parentNode.style.display = "none";
            }
        };
    });
});
