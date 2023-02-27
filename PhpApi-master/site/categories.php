<?php
include "../connect_to_mysql.php";
$arr = array();
$sql = "SELECT * from categorys";
$res = mysqli_query($mysqli, $sql);
while($r = mysqli_fetch_array($res)) $arr[] = $r;
echo json_encode($arr);
?>
