$ (function(){
    var card = [ "ace-of-club.svg", "ace-of-diamonds.svg", "ace-of-hearts.svg", "ace-of-spades.svg", "joker-card.svg"];
    for ( var i = 0; i < 16; i++){
        var r = Math.floor(( Math.random() * 4 ));
        $('#d2').append('<img class="issue" src="./'+ card[r] + '">');
    }
    var elements=document.getElementsByClassName("issue");

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




