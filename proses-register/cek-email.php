<?php

include "../koneksi.php";
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    try {
        $email = $_REQUEST['email'];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $respon = array(
                'status' => 'error',
                'pesan' => 'Format Email Salah'
            );
            echo json_encode($respon);
            return false;
        }
        $query = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");

        //cek username
        if (mysqli_num_rows($query) > 0) {
            $respon = array(
                'status' => 'error',
                'pesan' => 'Email telah terdaftar, silahkan gunakan email lain'
            );
        } else {
            $respon = array(
                'status' => 'success',
                'pesan' => 'Email bisa digunakan'
            );
        }
        echo json_encode($respon);
    } catch (Exception $e) {
        echo json_encode(['error', $e->getMessage()]);
    }
}
