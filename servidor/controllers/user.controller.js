/* The code snippet is a JavaScript module that exports several functions related to handling API
requests for a user management system. Here's a breakdown of what the code does: */
const { response, request } = require("express");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kranzwidemailer@gmail.com",
    pass: "zaigyexgktzuieiv",
  },
});

const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: " get api - controller ",
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put api - controller",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, titulo, mensaje, telefono, email } = req.body;

  let mailOptions = {
    from: "Kranzwide solutions",
    to: "ventas@predictionsoft.com.mx",
    subject: "Mandar información al siguiente usuario",
    text: `Hemos recibido el siguiente mensaje de: ${nombre}\n\nAsunto: ${titulo}\n\n${mensaje}\n\nDatos de contacto:\n\nTelefono: ${telefono}\n\nEmail: ${email}`,
    html: `Él usuario: <b>${nombre}</b> solicita información sobre Kranzwide Consultive SA DE CV.<br>
               <p>Se adjunta la siguiente información del solicitante para ponerse en contacto lo antes posible:</p>
               <p>
               <b>Nombre: </b>${nombre}
               <br>
               <b>Asunto: </b>${titulo}
               <br>
               <b>Mensaje: </b>${mensaje}	  
               <br>
               <b>Telefono: </b>${telefono}
               <br>
               <b>Email: </b>${email}
               </p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).jsonp(req.body);
    }
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "Delete api - controller",
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
