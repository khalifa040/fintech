$(document).ready(function(){
  $("#date").html(new Date().getFullYear() + " - Scientist.");
  
let head = "head.html"
let footer = "footer.html"
     $.get(head, function(data, status){
       $(".headjs").html(data);
    });
$.get(footer, function(data, status){
       $(".footerjs").html(data);
    });
  $(".icon").click(function(){
  $("#nv").slideToggle('slow');
  });

$('.tlog1').click(function() {
     if(confirm("are you student? Click OK!")){
        window.location.assign('dalib/login.html');
     }else{
     window.location.assign('mudir/login.html');
     }
 });

$('.tlog2, .rbtn').click(function() {
     window.location.assign('http://hausa.000.pe/signup.html');
 });

$('.abbtn').click(function() {
     window.location.assign('about.html');
 });

$('.transferbtn').click(function() {
     window.location.assign('http://hausa.000.pe/transfer.php');
 });

$('.convertbtn').click(function() {
     window.location.assign('http://hausa.000.pe/convert.php');
 });

$('.westernbtn').click(function() {
     window.location.assign('western.html');
 });

$('.onlinebtn').click(function() {
     window.location.assign('online.html');
 });
$('.anouncebtn').click(function() {
     window.location.assign('https://esba.ng/blog');
 });

});