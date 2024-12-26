<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "alcohol";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['InUs'];
    $contrasena = $_POST['Pass'];

    // Consulta para verificar usuario y contraseña
    $sql = "SELECT * FROM usuarios WHERE Usuario='$usuario' AND Contraseña='$contrasena'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Usuario y contraseña correctos
        header("Location: Trabajo.html");
        exit();
    } else {
        // Usuario o contraseña incorrectos
        echo "Usuario o Contraseña incorrectos";
    }
}

$conn->close();
?>