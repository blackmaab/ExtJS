Ext.Loader.setConfig({
    enabled:true,
    paths:{
        Mario:"app"
    }
});
Ext.application({
    name:'Mario',
    appFolder:'app',
    controllers:['Movies'],
    launch:function(){
        console.log('Aplicacion creada')
        var win=Ext.create('Mario.view.MoviesWindow');
        win.show();
    }
});

