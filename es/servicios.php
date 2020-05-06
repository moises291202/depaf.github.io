<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php include "../cosas-generales/links-generales.php"; ?>
    <link rel="stylesheet" href="../css/proyectos_estilos.css">
    
    <title>Servicios - DEPAF (Desarrollo y Programación A.F.) - Diseño de Sitios Web en Puerto Vallarta</title>
</head>
<body>

    <!-- Menu -->
    <?php include "../cosas-generales/header.php"; ?>

    <!-- Sidebar -->
    <?php include "../cosas-generales/sidebar.php"; ?>

    <div class="contenedor-pagina">
        <h2 class="titulo-principal titulo-servicios"></h2>
        <h2 class="titulo-principal titulo-proximamente" style="font-size: 50px;"></h2>

        <?php include "../cosas-generales/contacto.php"; ?>
    </div>

    <?php include "../cosas-generales/footer.php"; ?>

    <?php include "../cosas-generales/scripts-generales.php"; ?>
    <script>
        $('.titulo-servicios').typeIt({
            strings: ["Servicios"],
            speed: 200
        });
        $('.titulo-proximamente').typeIt({
            strings: ["Próximamente"],
            speed: 200
        });
    </script>

</body>
</html>