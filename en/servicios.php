<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php include "../cosas-generales-en/links-generales.php"; ?>
    <link rel="stylesheet" href="../css/proyectos_estilos.css">
    
    <title>Services - DEPAF (Desarrollo y Programación A.F.) - Web Design and Development in Puerto Vallarta</title>
</head>
<body>

    <!-- Menu -->
    <?php include "../cosas-generales-en/header.php"; ?>

    <!-- Sidebar -->
    <?php include "../cosas-generales-en/sidebar.php"; ?>

    <div class="contenedor-pagina">
        <h2 class="titulo-principal titulo-servicios"></h2>
        <h2 class="titulo-principal titulo-proximamente" style="font-size: 50px;"></h2>

        <?php include "../cosas-generales-en/contacto.php"; ?>
    </div>

    <?php include "../cosas-generales-en/footer.php"; ?>

    <?php include "../cosas-generales-en/scripts-generales.php"; ?>
    <script>
        $('.titulo-servicios').typeIt({
            strings: ["Services"],
            speed: 200
        });
        $('.titulo-proximamente').typeIt({
            strings: ["Coming Soon"],
            speed: 200
        });
    </script>

</body>
</html>