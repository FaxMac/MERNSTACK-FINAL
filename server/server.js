const express = require('express');
const app = express();
app.use(express.json());

//cors
const cors = require('cors')
app.use(cors())

//BD
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.zk8pqrv.mongodb.net/store')
.then(() => console.log('CONECTADO A LA BBDD'));

//MODELOS
const Products = require('./models/products.model')
const Clients = require('./models/clients.model')

//api para registrar a un cliente mediante metodo post
app.post('/api/register', async (req, res) => {
    const {nombre, correo, telefono, direccion, contrasena} = req.body;
    try {
        await Clients.create({
            nombre,
            correo,
            telefono,
            direccion,
            contrasena,
        });
        res.send({status: "ok"});
    } catch (error) {
        res.send(console.log(error));
    }
});

app.post('/api/register_product', async (req, res) => {
    const {title, description, length, inversions, imageUrl} = req.body;
    try {
        await Products.create({
            title,
            description,
            length,
            inversions,
            imageUrl,
        });
        res.send({status: "ok"});
    } catch (error) {
        res.send(console.log(error));
    }
});

//api para hacer login
app.post('/api/login', async (req, res) => {
    const {correo, contrasena} = req.body;
    const client = await Clients.findOne({correo});
    if(!client) {
        return res.json({error: "Usuario no existe"})
    }else{
        return res.json('Si');
    }
});

//api para obtener todos los clientes
app.get('/api/clients', (req, res) => {
    Clients
    .find()
    .then(allClients => res.json(allClients))
});

//api para obtener detalle de cada cliente
app.get('/api/clients/details/:client_id', (req, res) => {
    const { client_id } = req.params
    Clients
    .findById(client_id)
    .then(client => res.json(client))
});

//api para obtener todos los productos
app.get('/api/products', (req, res) => {
    Products
    .find()
    .then(allProducts => res.json(allProducts))
});

//api para obtener detalles de cada producto
app.get('/api/products/details/:product_id', (req, res) => {
    const { product_id } = req.params
    Products
    .findById(product_id)
    .then(product => res.json(product))
})

app.put('/api/products/details/:id', async (req, res) => {
    const{title, description, length, inversions, imageUrl} = req.body;
    const productNew = {
        title: title,
        description: description,
        length: length,
        inversions: inversions,
        imageUrl: imageUrl
    }
    await Products.findByIdAndUpdate(req.params.id, productNew, {useFindAndModify: false});
    res.json({
        status:'Cliente Actualizado'
    });
});

app.delete('/api/products/details/:id', async (req, res) => {
    await Products.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

app.listen(3030 , () => console.log('SERVIDOR LEVANTADO'));