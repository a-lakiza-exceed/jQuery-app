const colors = ['redBG','pinkBG','purpleBG','blueBG','aquaBG','yellowBG' ];

$('.addButton').click(function(){
    const input = $('.newElementInput');
    const text = input.val();
    if (text != ''){
        input.val('');
        const color = colors[Math.floor(Math.random()*colors.length)];
        const html = `<div class = "listItem ${color}"> 
                        <div class = "checkboxArea">
                            <input class = "checkbox" type="checkbox">
                        </div>
                        <p class="listItemText">${text}</p>
                    </div>`;
        $('.list').append(html);
    }
    else {
        alert('Input is empty!');
    }
    
});
$('.newElementInput').keyup(function(event){
    if (event.keyCode === 13) {
        $(".addButton").click();
      }
});

$('.colorPickerItem').click(function(){
    const newColor = $(this).prop('class').split(' ')[1];
    $('body').find('.checkbox').each(function(){
        if($(this).is(':checked')){
            const block = $(this).parent().parent();
            const oldColor = $(block).prop('class').split(' ')[1];
            $(block).removeClass(oldColor).addClass(newColor);
        }
    })

});