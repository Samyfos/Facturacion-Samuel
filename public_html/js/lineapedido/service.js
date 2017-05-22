'use strict';
moduloLineapedido.factory('lineapedidoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                {name: "cantidad", shortname: "Cantidad", longname: "Cantidad", visible: true, type: "integer", required: true},
                {name: "obj_factura", shortname: "ID Factura", longname: "Factura Id", visible: true, type: "foreign", reference: "factura", descforeign: "id"},
                {name: "obj_producto", shortname: "Nombre Producto", longname: "ID Producto", visible: true, type: "foreign", reference: "producto", descforeign: "id"},
                {name: "obj_producto_precio", shortname: "Precio del Producto", longname: "Precio Producto", visible: true, type: "foreign", reference: "producto", descforeign: "precio"}

                ];
            },
            getIcon: function () {
                return "fa-list";
            },
            getObTitle: function () {
                return "lineapedido";
            },
            getTitle: function () {
                return "lineapedido";
            }
        };
    }]);


