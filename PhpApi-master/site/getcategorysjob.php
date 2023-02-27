<?php
include "../connect_to_mysql.php";
$cid = $_GET['cid'];
$query = "Select * from job where cid = $cid";
$res = mysqli_query($mysqli,$query);
$jobs = array();
while($r = mysqli_fetch_array($res)){


$jobs[]= $r;}
echo json_encode($jobs);