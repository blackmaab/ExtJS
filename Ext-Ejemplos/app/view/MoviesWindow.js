Ext.define('Mario.view.MoviesWindow',{
    extend:'Ext.window.Window',
    layout:'fit', 
    title:'Movies',
    width:550,
    height:350,
    initComponent:function(){
        var me=this;
        me.items=Ext.create('Mario.view.MoviesGrid');
        me.callParent();
    }
});
