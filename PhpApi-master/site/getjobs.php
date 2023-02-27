<?php
include "../connect_to_mysql.php";
$query = "";
extract($_GET);
if(isset($location)){
    $query = "Select * from job where title like '%".$title."%' and location like '%$location%'";
}
else $query = "Select * from job where title like '%".$title."%'";
$res = mysqli_query($mysqli,$query);
$jobs = array();
while($r = mysqli_fetch_array($res)){


$jobs[]= $r;}
echo json_encode($jobs);


  
?>