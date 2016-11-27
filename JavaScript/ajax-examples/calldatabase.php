<?php
$q=$_GET["q"];

$con = mysql_connect('localhost', 'root', 'asdzxc');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("ajaxtest", $con);

$sql="SELECT * FROM user WHERE id = '".$q."'";

$result = mysql_query($sql);

echo "<table border='0' cellspacing='2' cellpadding='2'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>Hometown</th>
<th>Job</th>
</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
  echo "<td bgcolor='white'>" . $row['FirstName'] . "</td>";  
  echo "<td bgcolor='white'>" . $row['LastName'] . "</td>";
  echo "<td bgcolor='white'>" . $row['Age'] . "</td>";
  echo "<td bgcolor='white'>" . $row['Hometown'] . "</td>";
  echo "<td bgcolor='white'>" . $row['Job'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysql_close($con);
?> 