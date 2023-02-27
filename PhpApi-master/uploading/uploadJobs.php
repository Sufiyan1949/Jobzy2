<?php
include "../connect_to_mysql.php";
echo "Request Receive<br>\n";
$entityBody = file_get_contents("php://input");
$json = (json_decode($entityBody, true));
extract($json);
$count = 0;
//echo var_dump(json_decode($data));
$query  = "insert into job values";
foreach (json_decode($data) as $d) {
    if($count == 0)
    $query=$query."(NULL,'$d->title', '$d->description','$d->duration','$d->location','$d->company_name','$d->skills','$d->link', $cid, '$d->publishedOn')";
    else
    $query=$query.",(NULL,'$d->title', '$d->description','$d->duration','$d->location','$d->company_name','$d->skills','$d->link', $cid, '$d->publishedOn')";
    $count++;
}if(mysqli_query($mysqli, $query)) echo "Data Saved Successfully";
else echo "Failed";
