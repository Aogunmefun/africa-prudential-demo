$(document).ready(function(){
    $('.modal').modal();
    $('ul.tabs').tabs();
    $( "#datepicker" ).datepicker();
    $('select').material_select();
    $('.chips-initial').material_chip({
        data: [{
          tag: 'c++',
        }, {
          tag: 'html',
        }, {
          tag: 'aws certified',
        }],
    });
    $('.collapsible').collapsible();
  });