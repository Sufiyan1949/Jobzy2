<?php
include "../connect_to_mysql.php";
extract($_REQUEST);
$sql = "select * from user where email='$email' and password='$password'";
$result = mysqli_query($mysqli, $sql);
            $chk = mysqli_num_rows($result);
            if ($chk) {
                $row = mysqli_fetch_array($result);
                print_r($row);
            }
            else echo "Login Failed";
?>