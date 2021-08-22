$('.boxPassword').mouseenter(function(){
$('#chiuso').css({'display':'none'})
$('#aperto').css({'display':'inline-block'})
$('h2').css({'filter':'none'})
})
$('.boxPassword').mouseleave(function(){
    $('#chiuso').css({'display':'block'})
    $('#aperto').css({'display':'none'})
    $('h2').css({'filter':'blur(10px)','transition':'3s'})
    })

    var nome = prompt('nome per password')
    var cognome = prompt('cognome per password')
    var colore = prompt('colore per password')
    const numero = 19

    var password = nome+cognome+colore+numero
    document.getElementById('pas').innerHTML = password