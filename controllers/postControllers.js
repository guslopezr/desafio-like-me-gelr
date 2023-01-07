//controladores

const controller = {}
const { ingresarPost, recuperarPost, actualizarPost, borrarPost } = require('../models/consultas.js')

controller.index = () => {

    res.sendFile(__dirname, "index.html")
};

controller.get = async(req, res) => {
    const posts = await recuperarPost();
    res.json(posts);
};

controller.post = async(req, res) => {
    const { titulo, url, descripcion } = req.body;
    const posts = await ingresarPost(titulo, url, descripcion);
    res.json(posts);
}

controller.update = async(req, res) => {
    const { id } = req.params;
    const { like } = req.body;

    await actualizarPost(id, like);
    res.send("Post actualizado con éxito");
}

controller.delete = async(req, res) => {
    const { id } = req.params;
    await borrarPost(id);
    res.send("Post borrado con éxito");
}

module.exports = controller;