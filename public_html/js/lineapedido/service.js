'use strict';
moduloLineapedido.factory('lineapedidoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "cantidad", shortname: "Cantidad", longname: "Cantidad", visible: true, type: "integer", required: true},
                    {name: "obj_factura", shortname: "facturaId", longname: "Factura Id", visible: true, type: "foreign", reference: "factura", descforeign: "id"},
                    {name: "obj_empleado", shortname: "empleadoId", longname: "Empleado Id", visible: true, type: "foreign", reference: "empleado", descforeign: "id"},
                    {name: "obj_tipoempleado", shortname: "idTipoempleado", longname: "Id Tipoempleado", visible: true, type: "foreign", reference: "tipoempleado", descforeign: "id"},
                    {name: "obj_cliente", shortname: "clienteId", longname: "Cliente Id", visible: true, type: "foreign", reference: "cliente", descforeign: "id"},
                    {name: "obj_producto", shortname: "productoId", longname: "Producto Id", visible: true, type: "foreign", reference: "producto", descforeign: "id"}
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "lineapedido";
            },
            getTitle: function () {
                return "lineapedido";
            }
        };
    }]);


