Ext.define('Mario.controller.HerenciaMultiple',{
    mixins:{
        floating:'Ext.util.Floating',
        observable:'Ext.util.Observable'
    },
    width:100,
    height:100,
    border:true,
    shadow:true,
    
    constructor:function(options){
        Ext.apply(this,options);
        
        this.id=Ext.id(null,"icon-");//asignando un identificador dinamico
        this.addEvents('moved','created'); //metodos heredados de la clase Observable
        
        if(this.renderTo){
            this.render(this.renderTo);
            delete this.renderTo;
        }
        //ejecutando manualmente los constructores de los mixins
        this.mixins.floating.constructor.call(this); 
        this.mixins.observable.constructor.call(this);
    },
    render:function(where){
        if(where){
            
            /*En el paso 1 se toma la referencia del elemento contenedor, esto mediante el 
            *método “Ext.get” que regresa una instancia del objeto “Ext.Element” el cual 
            *contiene la referencia al DOM y además varios métodos para manipularlo de 
            *una manera sencilla.
            */

            this.container=Ext.get(where); 
            
            
            /*
             *En el paso 2 se crea el elemento que representará a la clase “Icon”, 
             *usando la clase “Ext.DomHelper” podemos crear elementos DOM de una manera 
             *muy sencilla, en este caso usamos el método “append” para agregar un nodo al 
             *contenedor.
             **/
            this.el=Ext.core.DomHelper.append(where,{ //2
                id:this.id,
                tag:'div'
            });
            this.el=Ext.get(this.el);
            
            /*
             *En el paso 3 aplicamos los estilos como width, height, etc. estos estilos
             *pueden ser enviados mediante el objeto de configuración para cambiar los 
             *valores por defecto.
             **/
            this.el.setStyle({ //3
                width:this.width ? this.width+'px':'auto',
                height:this.height ? this.height +'px':'auto',
                border:this.border ? '1px solid #aaa':'none',
                background:'#eee'
            });
        }
    },
    
    /*
     *En el paso 4 se define una función para asignar las coordenadas del elemento
     *que representa a la clase “Icon”, este método es requerido para usar el método 
     *“center” que heredamos de la clase “Floating”*/
    setPagePosition:function(xy){ //4
        this.el.setLeftTop(xy[0]+'px',xy[1]+'px');
        this.fireEvent('moved',xy);
    }
});


