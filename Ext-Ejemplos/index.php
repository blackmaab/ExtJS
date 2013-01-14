<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ext.Panel</title>
        <!--IMPORTAR LOS ESTILOS-->
        <link rel="stylesheet" type="text/css" href="ext-4.0/resources/css/ext-all.css"/>

        <!--IMPORTAR EL ext-all-dev.js-->
        <script type="text/javascript" src="ext-4.0/ext-all-dev.js"></script>

        <script type="text/javascript" src="app.js"></script>

        <!--
        <script type="text/javascript">
            
            Ext.onReady(function(){                     
                //alert("Ext esta instalado correctamente!")
                //                Ext.create('Mario.controller.HerenciaSimple',
                //                {renderTo:'center'  //div que definimos en el html
                //                });
                
                //ejemplo de herencia multimple
                var icon=Ext.create('Mario.controller.HerenciaMultiple',{renderTo:Ext.getBody()});                
                icon.on('moved',function(xy){console.log(xy);});
                icon.center();
            });    
        </script>
        -->
        <style type="text/css">
            #center{
                width:300px;
                margin:50px auto;
            }
            #center strong{
                font-weight:bold !important;
            }
        </style>
    </head>
    <body>

        <div id="center"></div>
        <?php
        // put your code here
        ?>
    </body>
</html>
