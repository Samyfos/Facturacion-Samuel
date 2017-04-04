'use strict';
moduloEmpleado.factory('empleadoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "primerapellido", shortname: "Apellido 1", longname: "Primer Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "segundoapellido", shortname: "Apellido 2", longname: "Segundo Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "login", shortname: "Login", longname: "Login", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "password", shortname: "Password", longname: "Password", visible: false, type: "text", required: false, maxlength: 255, pattern:""},
                    {name: "email", shortname: "Email", longname: "Email", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("email"), help: serverService.getRegExpl("email")},
                    {name: "telefono", shortname: "Teléfono", longname: "Teléfono", visible: true, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("telefono"), help: serverService.getRegExpl("telefono")},
                    {name: "obj_tipoempleado", shortname: "tipoEmpleado", longname: "Tipo Empleado", visible: true, type: "foreign", reference: "empleado", descforeign: "id"}
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "empleado";
            },
            getTitle: function () {
                return "empleado";
            }
        };
    }]);


