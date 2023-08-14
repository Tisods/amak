<!DOCTYPE html>
<html>
<head>
	<title>Input Data</title>
</head>
<body>
	<h1>Input Data</h1>
	<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$nama = $_POST['nama'];
		$email = $_POST['email'];
		$pesan = $_POST['pesan'];
		
		$filename = 'data.txt';
		$data = $nama . ' | ' . $email . ' | ' . $pesan . "\n";
		file_put_contents($filename, $data, FILE_APPEND);
		
		echo 'Data berhasil disimpan. Terima kasih!';
	}
	?>
	<form method="post">
		<label for="nama">Nama:</label>
		<input type="text" id="nama" name="nama"><br><br>
		
		<label for="email">Email:</label>
		<input type="email" id="email" name="email"><br><br>
		
		<label for="pesan">Pesan:</label>
		<textarea id="pesan" name="pesan"></textarea><br><br>
		
		<input type="submit" value="Kirim">
	</form>
</body>
</html>
