<?php

include "../koneksi.php";
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    try {
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];
        $query = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");

        //cek username
        if (mysqli_num_rows($query) > 0) {
            $cek = mysqli_fetch_assoc($query);
            if ($cek['password'] == $password) {
                echo "success";
            } else {
                echo "failed";
            }
        } else {
            echo "failed";
        }
    } catch (Exception $e) {
        echo json_encode(['error', $e->getMessage()]);
    }
}
