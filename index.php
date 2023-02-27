<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site voor stage opdrachten</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="background">
    <div class="wrapper">
    <?php require_once('header.php') ?>
    <main>
        <div class="pagepart pagepart-right-container">
            <img class="vraagteken" src="img/vraagteken.png">
            <div class="textalign-right-container">
                <p class="container-title">Uitleg</p>
                <span>
                    <?php
                        $_filename = "./opdracht1/challenge.txt";
                        $_contents = file_get_contents($_filename);
                        // $_stream = fopen($_filename,"r");
                        // while($line = fgets($_stream)){echo $line;}
                        echo nl2br($_contents);
                    ?>
                </span>
            </div>
        </div>
        <div class="pagepart pagepart-left-container">
            <div class="textalign-left-container">
                <p class="container-title">Input</p>
                <span>
                    <?php
                        $_filename = "./opdracht1/input.txt";
                        $_contents = file_get_contents($_filename);
                        // $_stream = fopen($_filename,"r");
                        // while($line = fgets($_stream)){echo $line;}
                        echo nl2br($_contents);
                    ?>
                </span>
            </div>
            <img class="arrow-icon-reversed" src="img/output.png">
        </div>
        <div class="pagepart pagepart-right-container">
            <img class="vraagteken" src="img/output.png">
            <div class="textalign-right-container">
                <p class="container-title">Output</p>
                <span>
                    <?php
                        $_filename = "./opdracht1/output.txt";
                        $_contents = file_get_contents($_filename);
                        //   $_contents = readfile($_filename);
                        //   echo $_contents;
                           echo nl2br($_contents);
                    ?>
                </span>
            </div>
        </div>
    </main>
    <?php require_once('footer.php') ?>
    </div>
</div>
</body>
</html>
