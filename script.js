//Setting up the date. To show current day
var today = moment().format ("MMMM DO YYYY");

//setting values to local storage

localStorage.setItem("9AM", ($text9AM.val()))
localStorage.setItem("10AM", ($text10AM.val()))
localStorage.setItem("11AM", ($text11AM.val()))
localStorage.setItem("12PM", ($text12PM.val()))
localStorage.setItem("1PM", ($text1PM.val()))
localStorage.setItem("2PM", ($text2PM.val()))
localStorage.setItem("3PM", ($text3PM.val()))
localStorage.setItem("4PM", ($text4PM.val()))
localStorage.setItem("5PM", ($text5PM.val()))

//Retrieving the content from local storage. Trying append so that it will populate on page

$($text9AM.append(localStorage.getItem("9AM"));
$($text10AM.append(localStorage.getItem("10AM"));
$($text11AM.append(localStorage.getItem("11AM"));
$($text12PM.append(localStorage.getItem("12PM"));
$($text1PM.append(localStorage.getItem("1PM"));
$($text2PM.append(localStorage.getItem("2PM"));
$($text3PM.append(localStorage.getItem("3PM"));
$($text4PM.append(localStorage.getItem("4PM"));
$($text5PM.append(localStorage.getItem("5PM"));