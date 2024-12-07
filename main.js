$(document).ready(function(){
    $('#AdicionarTarefa').click(function(){
        const nome1 = $('#nome').val();
        const novoItem = $('<li style="display: block"></li>');
        novoItem.text(nome1);
        $(novoItem).appendTo('ul');
        $('#nome').val('');
    });
    $('ul').on('click','li',function(){
        $(this).css("text-decoration", "line-through");
    })
    $('#DesmacarTarefa').click(function(){
        $('li').css("text-decoration", "none");
    })
});

