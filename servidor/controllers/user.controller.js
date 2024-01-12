const { response, request } = require('express');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kranzwidemailer@gmail.com',
        pass: 'zaigyexgktzuieiv'
    }
});

const usuariosGet = (req = request, res = response) => {


    res.json({
        msg: ' get api - controller '
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put api - controller',
        id
    });
}

const usuariosPost = (req, res) => {
    const { nombre, titulo, mensaje, telefono, email } = req.body;

    let mailOptions = {
        from: 'Kranzwide solutions',
        to: 'antoniodario10@hotmail.com',  // TODO 
        subject: 'Prueba de Nodemailer',
        text: `Hemos recibido el siguiente mensaje de ${nombre}:\n\nAsunto: ${titulo}\n\n${mensaje}\n\nDatos de contacto:\n\nTelefono: ${telefono}\n\nEmail: ${email}`,
        html: `Hemos recibido el siguiente mensaje de <b>${nombre}:</b>
               <p>
               <b>Asunto: </b>${titulo}
               <br>
               <b>Mensaje: </b>${mensaje}	  
               </p>
               <p>
               Datos de contacto:
               <br>
               Telefono: ${telefono}
               <br>
               Email: ${email}
               </p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).jsonp(req.body);
        }
    });
};



const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete api - controller'
    });
}
module.exports = {
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete
}