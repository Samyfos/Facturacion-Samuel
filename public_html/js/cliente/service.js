'use strict';
moduloCliente.factory('clienteService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "dni", shortname: "DNI", longname: "DNI", visible: true, type: "text"},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "primerapellido", shortname: "Apellido 1", longname: "Primer Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "segundoapellido", shortname: "Apellido 2", longname: "Segundo Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "email", shortname: "Email", longname: "Email", visible: false, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("email"), help: serverService.getRegExpl("email")},
                    {name: "telefono", shortname: "Teléfono", longname: "Teléfono", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("telefono"), help: serverService.getRegExpl("telefono")},
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "cliente";
            },
            getTitle: function () {
                return "cliente";
            }
        };
    }]);


