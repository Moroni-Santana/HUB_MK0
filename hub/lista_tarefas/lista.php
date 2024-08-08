<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo_lista.css">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <title>Lista de Tarefas</title>
</head>
<body>
    <div class="container">
        <nav>
            <div>
                <a href="../index.html" ><i class="ph-bold ph-house"></i></a>
            </div>
        </nav>
        <main>
            <div class="top">
            <?php
                include('conection.php');
                $sql = "SELECT tb_dia.dia, tb_dia.titulo_dia, tb_horario.hora, tb_horario.titulo_tarefa, tb_horario.descricao FROM tb_dia INNER JOIN tb_horario ON tb_dia.dia = tb_horario.dia WHERE tb_dia.dia = '2024-04-12' ORDER BY tb_horario.hora";
                $result = $mysqli->query($sql);
                $row=mysqli_fetch_assoc($result);
                echo "<span id='teste'>".$row['titulo_dia']."</span>";
                echo "<span id='teste2'>".$row['dia']."</span>";
            ?>
                <button id="btn_editar_id" class="btn_editar">+</button>
                <!-- <input type="date"> -->
            </div>
            <div class="centralize">
                <div class="list_body">
                    <?php
                        include('conection.php');
                        $sql = "SELECT tb_dia.dia, tb_dia.titulo_dia, tb_horario.hora, tb_horario.titulo_tarefa, tb_horario.descricao FROM tb_dia INNER JOIN tb_horario ON tb_dia.dia = tb_horario.dia WHERE tb_dia.dia = '2024-04-12' ORDER BY tb_horario.hora";
                        $result = $mysqli->query($sql);
                        //$estantes=mysqli_fetch_assoc($result);
                        //echo("<script>console.log('PHP: " . $estantes . "');</script>");

                        while($row=mysqli_fetch_assoc($result)){
                            $teste = '"'.$row['titulo_tarefa'].'"';
                            $teste2 = '"'.$row['descricao'].'"';
                            echo "<span class='list_info' onclick='pesquisa_hora($teste, $teste2)'>".$row['hora']."</span><br>";
                        };
                    ?>
                </div>
                <div class="detalhes">
                    <span id="titulo_hora">TESTE</span>
                    <span id="descricao_hora">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum explicabo quos temporibus modi nulla, suscipit voluptatum consequuntur corrupti vel quas, magni exercitationem perferendis saepe architecto laboriosam necessitatibus dolores enim.</span>
                </div>
            </div>
        </main>
    </div>

    <script src="JsLista.js"></script>
</body>
</html>