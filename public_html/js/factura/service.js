'use strict';
moduloFactura.factory('facturaService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "fechafactura", shortname: "Fechafactura", longname: "Fechafactura", visible: true, type: "date", required: true},
                    {name: "obj_empleado", shortname: "empleadoId", longname: "Empleado Id", visible: true, type: "specific", reference: "empleado"},
                    {name: "obj_tipoempleado", shortname: "tipoEmpleado", longname: "Tipo Empleado", visible: true, type: "specific", reference: "empleado"},
                    {name: "obj_cliente", shortname: "clienteId", longname: "Cliente Id", visible: true, type: "specific", reference: "cliente"}                    
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "factura";
            },
            getTitle: function () {
                return "factura";
            }
        };
    }]);


