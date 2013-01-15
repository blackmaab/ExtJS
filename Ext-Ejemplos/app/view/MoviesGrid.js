Ext.define('Mario.view.MoviesGrid',{
    extend:'Ext.grid.Panel',
    store:'Mario.store.Movies',
    border:false,
    initComponent:function(){
        var me=this;
        me.columns=[{
            header:'Image',
            dataIndex:'tns',
            width:100,
            renderer:me.showImage
        },{
            header:'Title',
            dataIndex:'title',
            width:180
        },{
            header:'Author',
            dataIndex:'author',
            flex:1
        },{
            header:'Release Date',
            dataIndex:'releaseDate',
            flex:1
        },{
            header:'Duration',
            dataIndex:'duration',
            width:60
        },{
            header:'Description',
            dataIndex:'description',
            width:100
        }];
        me.callParent();
    },
    showImage:function(value,record){
        return '<img src="'+value+'" style="width:100px" />';
    }
});