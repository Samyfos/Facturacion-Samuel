'use strict';
moduloTipoempleado.factory('tipoempleadoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Descripción", longname: "Descripcion", visible: true, type: "text", required: true},
                ];
            },
            getIcon: function () {
                return "fa-users";
            },
            getObTitle: function () {
                return "tipoempleado";
            },
            getTitle: function () {
                return "tipoempleado";
            }
        };
    }]);


