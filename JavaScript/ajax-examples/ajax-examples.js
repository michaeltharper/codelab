// AJAX simple XHR examples -------------------------------------------
function loadXMLDoc(thediv,theurl)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById(thediv).innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",theurl,true);
//xmlhttp.open("GET",  theurl + "?t=" + Math.random(),true); // append random() to make each URL unique, prevent caching.
//xmlhttp.open("GET","demo_get2.asp?fname=Henry&lname=Ford",true);  // syntax to pass args w GET, when script can accept
xmlhttp.send();
}

// AJAX more complex XHR examples -------------------------------------------
function retXMLDoc(url)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('A1').innerHTML=xmlhttp.status;
    document.getElementById('A2').innerHTML=xmlhttp.statusText;
    document.getElementById('A3').innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}


// AJAX parsing XML example -------------------------------------------
function loadCDlist(url)
{
var xmlhttp;
var txt,xx,x,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    txt="<table border='0' cellspacing='2' cellpadding='2'><tr bgcolor='white'><th>Title</th><th>Artist</th></tr>";
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("CD");
    for (i=0;i<x.length;i++)
      {
      txt=txt + '<tr>';
      xx=x[i].getElementsByTagName("TITLE");
        {
        try
          {
          txt=txt + '<td bgcolor="white">'  + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + '<td bgcolor="white">&nbsp;</td>';  
          }
        }
    xx=x[i].getElementsByTagName("ARTIST");
      {
        try
          {
          txt=txt + '<td bgcolor="white">' + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + '<td bgcolor="white">&nbsp;</td>';  
          }
        }
      txt=txt + "</tr>";
      }
    txt=txt + "</table>";
    document.getElementById('txtCDInfo').innerHTML=txt;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}


// AJAX Predictive hint -------------------------------------------
function showHint(str)
{
var xmlhttp;
if (str.length==0)
  { 
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","gethint.php?q="+str,true);
xmlhttp.send();
}

// AJAX Database query -------------------------------------------
function showUser(str)
{
if (str=="")
  {
  document.getElementById("mysqlHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("mysqlHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","calldatabase.php?q="+str,true);
xmlhttp.send();
}