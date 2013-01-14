Ext.application({
    name:'Mario',
    appFolder:'app',
    controllers:['Mario.controller.Movies'],
    launch:function(){
        console.log('Aplicacion creada')
        var win=Ext.create('Mario.view.MoviesWindow');
        win.show();
    }
});

