/*

*/


function start (e){
    var name = [
    {
        char: '簡',
        cns: '1-767C',
        big5: 'C2B2',
        unicode: '7C21'
    },
    {
        char: '綺',
        cns: '1-6A3F',
        big5: 'BAF6',
        unicode: '7DBA'
    },
    {
        char: '樂',
        cns: '1-6D40',
        big5: 'BCD6',
        unicode: '6A02'
    }
    ]
    var ele =document.getElementById("div1");
    for (var i =0; i<3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' cns=';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' big5=';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' unicode=';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '</br>';
    }
}


/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
