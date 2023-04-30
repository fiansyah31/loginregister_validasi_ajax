<?php
session_start();
include "../koneksi.php";

try {
    $username = $_POST['username_register'];
    $email = $_POST['email'];
    $password = $_POST['password_register'];

    $save = mysqli_query($conn, "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')");
    if ($save) {
        $_SESSION['pesan'] = 'Berhasil Register, Silahkan Login';
        $respon = array(
            'status' => 'success',
            'pesan' => $_SESSION['pesan'],
        );
    }
    echo json_encode($respon);
    return mysqli_affected_rows($conn);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
