'use strict';
moduloProducto.factory('productoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true},
                    {name: "precio", shortname: "Precio", longname: "Precio", visible: true, type: "decimal", required: true},
                    {name: "existencias", shortname: "Existencias", longname: "Existencias", visible: true, type: "text", required: true},
                    {name: "obj_categoria", shortname: "categoriaId", longname: "Categoria Id", visible: true, type: "foreign", reference: "categoria", descforeign: "nombre"},
                    {name: "obj_proveedor", shortname: "proveedorId", longname: "Proveedor Id", visible: true, type: "foreign", required: true, reference: "proveedor", descforeign: "nombreempresa"}
                ];
            },
            getIcon: function () {
                return "fa-product-hunt";
            },
            getObTitle: function () {
                return "producto";
            },
            getTitle: function () {
                return "producto";
            }
        };
    }]);


