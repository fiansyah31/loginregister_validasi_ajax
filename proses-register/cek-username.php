<?php

include "../koneksi.php";
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    try {
        $username = $_REQUEST['username'];

        $query = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");

        //cek username
        if (mysqli_num_rows($query) > 0) {
            $respon = array(
                'status' => 'error',
                'pesan' => 'Username telah terdaftar, silahkan gunakan Username lain'
            );
        } else {
            $respon = array(
                'status' => 'success',
                'pesan' => 'Username bisa digunakan'
            );
        }
        echo json_encode($respon);
    } catch (Exception $e) {
        echo json_encode(['error', $e->getMessage()]);
    }
}
