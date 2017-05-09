'use strict';
moduloLineapedido.factory('lineapedidoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                {name: "cantidad", shortname: "Cantidad", longname: "Cantidad", visible: true, type: "integer", required: true},
                {name: "obj_factura", shortname: "facturaId", longname: "Factura Id", visible: true, type: "foreign", reference: "factura", descforeign: "id"},
                {name: "obj_producto", shortname: "productoId", longname: "Producto Id", visible: true, type: "foreign", reference: "producto", descforeign: "id"},
                {name: "obj_producto_precio", shortname: "precioProducto", longname: "Producto Id", visible: true, type: "foreign", reference: "producto", descforeign: "precio"}

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


