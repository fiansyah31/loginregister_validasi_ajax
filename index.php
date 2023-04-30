<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <?php
  session_start();
  if (isset($_SESSION['username'])) {
    header('location:dashboard/index.php');
  }
  ?>
  <div class="container">
    <div class="content">
      <div class="card" id="card-login">
        <h1 class="title-form">Login</h1>
        <div class="card-body">
          <p id="pesans">
            <?php
            if (isset($_SESSION['pesan'])) {
              echo $_SESSION['pesan'];
            }
            ?>
          </p>
          <form id="form-login">
            <div class="mb-4 body-input">
              <input type="text" name="username" id="username" class="form-control form-input" placeholder="Masukan Username" required />
              <div class="pesan"></div>
            </div>
            <div class="mb-2 body-input">
              <input type="password" name="password" id="password" class="form-control form-input" placeholder="Masukan Password" required />
              <div class="pesan"></div>
            </div>
            <div class="mb-2">
              <div class="d-flex justify-content-between action-optional align-items-baseline">
                <p>
                  Belum Punya Akun?<a href="#" class="btn btn-link p-0" id="btn-daftars">Daftar Sekarang</a>
                </p>
                <a href="#" class="btn btn-link p-0">Lupa Password?</a>
              </div>
            </div>
            <div class="mb-4">
              <button type="submit" class="btn btn-primary py-2 px-4 d-flex" id="btn-login">
                Login
            </div>
            </button>
        </div>
        </form>
      </div>
    </div>
    <div class="card" id="card-register">
      <h1 class="title-form">Register</h1>
      <div class="card-body">
        <form id="form-register">
          <div class="mb-4">
            <input type="text" name="username_register" id="username_register" class="form-control form-input" placeholder="Masukan Username" required />
            <div class="pesan" id="pesan"></div>
          </div>
          <div class="mb-4">
            <input type="email" name="email" id="email" class="form-control form-input" placeholder="Masukan Email" required />
            <div class="pesan" id="pesan"></div>
          </div>
          <div class="mb-3">
            <input type="password" name="password_register" id="password_register" class="form-control form-input" placeholder="Masukan Password" required />
            <div class="pesan" id="pesan">
              <p>Password harus sesuai dengan kriteria:</p>
              <p id="letter" class="invalid">Sebuah huruf kecil</p>
              <p id="capital" class="invalid">Sebuah huruf besar</p>
              <p id="number" class="invalid">Sebuah nomor</p>
              <p id="length" class="invalid">Panjang minimal 8 karakter</p>
            </div>
          </div>
          <div class="mb-2">
            <input type="password" name="password_confirm" id="password_confirm" class="form-control form-input" placeholder="Masukan Konfirmasi Password" required />
            <div class="pesan" id="pesan"></div>
          </div>
          <div class="mb-2">
            <div class="d-flex justify-content-between action-optional align-items-baseline">
              <p>
                Sudah Punya Akun?<a href="#" class="btn btn-link p-0" id="btn-logins">Login Sekarang</a>
              </p>
              <a href="#" class="btn btn-link p-0">Lupa Password?</a>
            </div>
          </div>
          <div class="mb-4">
            <button type="submit" id="btn-daftar" class="btn btn-primary py-2 px-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script src="script.js"></script>
</body>

</html>