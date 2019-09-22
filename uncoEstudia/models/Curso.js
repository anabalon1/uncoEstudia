const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  titulo: { type: String, required: true},
  descripcion: { type: String, required: true },
  valor: { type: String, required: true },
});



module.exports = mongoose.model('Curso', CursoSchema);