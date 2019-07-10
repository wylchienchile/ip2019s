$ (function(){
    var card = [ "ace-of-club.svg", "ace-of-diamonds.svg", "ace-of-hearts.svg", "ace-of-spades.svg", "joker-card.svg"];
    var apple = Array();
    for ( var i = 0; i < 16; i++){
        var r = Math.floor(( Math.random() * 4 ));
        $('#d2').append('<img class="issue" src="./'+ card[r] + '">');
        apple[i] = card[r];

    }

    for ( var i = 0; i < 16; i++) {
        console.log(apple[i]);  

    }

    var elements=document.getElementsByClassName("issue");

    // function isLargeNumber(element) {
    //     return element == "ace-of-club.svg";
    // }
    // console.log(apple.findIndex(isLargeNumber) );
    for(var i = 0; i < apple.length; i++) {
        if (apple[i] == "ace-of-club.svg") {
            console.log(i);
        }
      
    }

    $('#b1').on('click',function(){
        $('.issue').hide();
        $('#d2').html('');
        for (var i = 0; i <16; i++) {
            $('#d2').append('<img src="./joker-card.svg">');
        }

    });
    $().on('click',function(){

        });
});




