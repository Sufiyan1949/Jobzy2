<?php
include "../connect_to_mysql.php";
extract($_REQUEST);
$sql = "INSERT into user values (NULL,'$name', '$email', '$password');";
if(mysqli_query($mysqli, $sql)) echo "Successful";
else echo "Failed";
?>