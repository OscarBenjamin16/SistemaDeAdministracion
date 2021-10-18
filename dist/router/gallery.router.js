"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../middleware/jwt");
const Galeria_Controller_1 = require("../controller/Galeria.Controller");
const router = express_1.Router();
const gallery = Galeria_Controller_1.GaleriaController;
router.post('/add/:productID', jwt_1.CheckJwt, gallery.AgregarGaleria);
router.put('/remove-image-gallery/:galleryID', jwt_1.CheckJwt, gallery.RemoverImagenGaleria);
router.put('/update-image-gallery/:galleryID', jwt_1.CheckJwt, gallery.ActualizarImagenGaleria);
router.get('/mostrar-gallery-product/:productID', gallery.MostrarGaleria);
// router.post('/',[CheckJwt,checkRole(['admin'])], categoria.AgregarCategoria);
// router.get('/:id',CheckJwt,  categoria.ObtenerCategoriaPorID);
// router.put('/:id',CheckJwt,categoria.ActualizarCategoria);
// router.delete('/:id',[CheckJwt,checkRole(['admin'])],  categoria.EliminarCategoria);
//estado del producto
exports.default = router;
//# sourceMappingURL=gallery.router.js.map