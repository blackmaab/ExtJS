Ext.define('Mario.controller.HerenciaSimple',{
    extend: 'Ext.panel.Panel',
    title:'Informacion de usuario',
    width:300,
    height:300,
    bodyPadding:10,
    html:'Probando!',
    
    //Definicion de un temple
    data:{
        name:'Mario',
        lastname:'Alvarado',
        company:'CSJ',
        age:23,
        status:'Activo',
        phone:'(503) 7877-7877'
    },
    tpl:[
    '<p><strong>Nombre: </strong>{name}{lastname}</p>',
    '<p><strong>Compañia: </strong>{company}</p>',
    '<p><strong>Edad: </strong>{age} años</p>',
    '<p><strong>Telefono: </strong>{phone}</p>',
    '<p><strong>Estado: </strong>{status}</p>'
    ],
    
    //sobre escritura de metodos
    initComponent:function(){
        var me=this;
        me.tbar=[{
            text:'Guardar'
        },{
            text:'Editar'
        },{
            text:'Borrar'
        }]; //especializamos la subclase
        me.callParent(); //llamada al initComponent de la super clase
    }
});

