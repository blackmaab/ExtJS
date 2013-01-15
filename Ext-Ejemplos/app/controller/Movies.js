Ext.define('Mario.controller.Movies',{
    extend:'Ext.app.Controller',
    models:['Mario.model.Movie'],
    stores:['Mario.store.Movies'],
    views:['Mario.view.MoviesWindow','Mario.view.MoviesGrid'],
    init:function(){
        var me=this;
        me.control({
            'window gridpanel':{
                itemclick:me.showMovie
            }
        });
        console.log('Controlador cargado');
    },
    
    showMovie:function(grid,record){
        Ext.Msg.alert("Alert","Now playing: '"+record.get("title")+"'");
    }
});
