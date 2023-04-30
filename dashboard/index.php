<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
</head>

<body>

    <?php
    session_start();
    if (!isset($_SESSION['username'])) {
        header('location:../index.php');
    }
    ?>
    <main>
        <div class="container">
            <div class="h1">Selamat datang didashboard <?= $_SESSION['username']; ?></div>
            <br>
            <a href="../logout.php">Logout</a>
        </div>
    </main>
</body>

</html>