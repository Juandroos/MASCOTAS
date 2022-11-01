const nodeMailer = require('nodemailer');

const enviarCorreo = (correo, nombre)=>{

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nuevohogarcentroadopcion@gmail.com',
            pass: 'dermtbjvyrhjipmo'
        },
        tls: {
            rejectUnautorized: false
        }
    });

    let mailOpcions = {
        from: 'nuevohogarcentroadopcion@gmail.com',
        to: `${correo}`,
        subject: 'Bienvenid@, por favor confirme este correo',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenid@ al Centro de Adopción Nuevo Hogar</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #e84393">${nombre}</span> 
                        por favor confirme este correo
                    </p>
                </td>
                
            </tr>
            <tr style="color: #fff; text-align:center">
                <td>
                    <button>Confirmar correo</button>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">¡UNETE A NUESTRA FAMILIA Y BRINDA UN HOGAR LLENO DE AMOR!</p>
                </td>
            </tr>
            </table>
            `
    };

    transporter.sendMail(mailOpcions, (error,exito)=>{
        if(error){
            console.log(error);
        }else{
            console.log('el correo se envió ' + exito.response);
        }
    })

}

module.exports = {enviarCorreo
}