'use strict';
moduloProveedor.factory('proveedorService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "nombreempresa", shortname: "nombreEmpresa", longname: "nombreEmpresa", visible: true, type: "text", required: true},
                    {name: "direccion", shortname: "Direccion", longname: "Direccion", visible: true, type: "text", required: true, maxlength: 255},
                    {name: "ciudad", shortname: "Ciudad", longname: "Ciudad", visible: true, type: "text", required: true},
                    {name: "cp", shortname: "CP", longname: "CP", visible: true, type: "integer", required: true},
                    {name: "provincia", shortname: "Provincia", longname: "Provincia", visible: true, type: "text", required: false},
                    {name: "pais", shortname: "Pais", longname: "Pais", visible: true, type: "text", required: false},
                ];
            },
            getIcon: function () {
                return "fa-truck";
            },
            getObTitle: function () {
                return "proveedor";
            },
            getTitle: function () {
                return "proveedor";
            }
        };
    }]);


