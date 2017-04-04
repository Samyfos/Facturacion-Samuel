'use strict';
moduloProducto.factory('productoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true},
                    {name: "precio", shortname: "Precio", longname: "Precio", visible: true, type: "integer", required: true},
                    {name: "existencias", shortname: "Existencias", longname: "Existencias", visible: true, type: "text", required: true},
                    {name: "obj_categoria", shortname: "categoriaId", longname: "categoriaId", visible: true, type: "foreing", descforeign: "informe", reference: "categoria"},
                    {name: "obj_proveedor", shortname: "proveedorid", longname: "proveedorid", visible: true, type: "foreing", descforeign: "informe", reference: "proveedor"}
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "producto";
            },
            getTitle: function () {
                return "producto";
            }
        };
    }]);


