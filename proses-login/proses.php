<?php
session_start();
include "../koneksi.php";

try {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
    if (mysqli_num_rows($query) > 0) {
        $cekpassword = mysqli_fetch_assoc($query);
        if ($password == $cekpassword['password']) {
            $_SESSION['username'] = $cekpassword['username'];
            $respon = array(
                'status' => 'success',
                'pesan' => 'Berhasil Login',
                'session' => $_SESSION['username']
            );
        }
        echo json_encode($respon);
    }
} catch (Exception $e) {
    echo json_encode(['error', $e->getMessage()]);
}
