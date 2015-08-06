// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['ge']=new Array();

aLangKeys['en']['home']='Home';
aLangKeys['en']['peoples']='Peoples >>';
aLangKeys['en']['all_list']='All list';
aLangKeys['en']['online']='Online';
aLangKeys['en']['articles']='Articles >>';
aLangKeys['en']['js']='JavaScript';
aLangKeys['en']['php']='PHP';
aLangKeys['en']['html']='HTML';
aLangKeys['en']['css']='CSS';
aLangKeys['en']['contact_us']='Contact us';
aLangKeys['en']['welcome']='Welcome guests';

aLangKeys['ge']['home']='მთავაი';
aLangKeys['ge']['peoples']='მომხლამრებელი >>';
aLangKeys['ge']['all_list']='სია';
aLangKeys['ge']['online']='ქსელი';
aLangKeys['ge']['articles']='სტატიები';
aLangKeys['ge']['js']='Яваскрипт';
aLangKeys['ge']['php']='ПХП';
aLangKeys['ge']['html']='ХТМЛ';
aLangKeys['ge']['css']='КСС';
aLangKeys['ge']['contact_us']='Напишите нам';
aLangKeys['ge']['welcome']='Добро пожаловать';


$(document).ready(function() {

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.translate').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });

    } );

});