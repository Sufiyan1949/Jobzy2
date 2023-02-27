<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Registration</title>
</head>

<body>
    <div class="gradientContainer">
        <div class="blackLayer">
            <div class="authContainer">
                <div class="contentMain">
                    <div class="logo">
                        <img src="assets/images/signup.svg" alt="" srcset="">
                        <div class="glow">
                        </div>
                    </div>
                    <div class="info">
                        <div class="headingsContainer">
                            <h1>Create Account,</h1>
                            <p>Please Sign up to start using our all the services</p>
                        </div>
                        <form action="signup.php" method="post">
                            <div class="mainContainer">
                                <input type="text" placeholder="Enter your email" name="email" required>

                                <input type="password" placeholder="Enter Your Password" name="pass" required>
                                <img src="assets/images/showpass.svg" id="show" alt="" srcset="">

                                <input type="password" placeholder="Confirms Your Password" name="cpass" required>
                                <img src="assets/images/showpass.svg" class="show" id="show"
                                    onclick="aud_show_unshow(this)">

                                <button name="signup" type="submit">Sign Up</button>
                                <div class="flexCH">
                                    <p>Already have an account? </p>    
                                    <a href="signin.html"><b>Login</b></a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="script.js"></script>

    <?php
        if(isset($_POST['signup'])){
            extract($_POST);
            echo "<script>signup($email, $pass, $cpass);</script>";
        }
    ?>
</body>

</html>