<?php
// Configuración de la base de datos
$servername = "localhost";  // Cambia esto si tu servidor de base de datos es diferente
$username = "root";   // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL
$dbname = "alcohol"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

// Verificar si se recibió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['Us'];
    $cedula = $_POST['Cedula'];
    $fecha = $_POST['FdN'];
    $email = $_POST['email'];
    $contra = $_POST['Conf'];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO usuarios (Usuario,Cedula,Fecha_de_nacimiento,Email,Contraseña) VALUES ('$nombre', '$cedula', '$fecha', '$email', '$contra')";

    if ($conn->query($sql) === TRUE) {
        header("Location: ./Trabajo.html");
        exit();
    } else {
        echo "<script>
            alert('Hubo un error al registrar la cuenta, por favor intente nuevamente.');
            window.location.href='Acount.html';
              </script>";
    }
}
    

// Cerrar conexión
$conn->close();
?>
