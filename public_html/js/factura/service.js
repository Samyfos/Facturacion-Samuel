'use strict';
moduloFactura.factory('facturaService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "fechafactura", shortname: "Fechafactura", longname: "Fechafactura", visible: true, type: "date", required: true},
                    {name: "obj_empleado", shortname: "empleadoId", longname: "Empleado Id", visible: true, type: "foreign", reference: "empleado", descforeign: "nombre"},
                    {name: "obj_cliente", shortname: "clienteId", longname: "Cliente Id", visible: true, type: "foreign", reference: "cliente", descforeign : "nombre"}                    
                ];
            },
            getIcon: function () {
                return "fa-wpforms";
            },
            getObTitle: function () {
                return "factura";
            },
            getTitle: function () {
                return "factura";
            }
        };
    }]);


