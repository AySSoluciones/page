let celular = 321597082;

const icon_color = '#5180ef';
const backgroundAlert = '#000';
const color_titulo = '#fff';
const position = 'bottom-end';
const growAlert = 'column'; /* formas del alert row, column, fullscreen */

async function menssageAlert() {
    const { value: text } = await Swal.fire({
      title: '¡Mensaje!',
      text: '',
      icon: 'warning',
      iconHtml: '<i class="bi bi-chat-text-fill"></i>',
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonColor: '#5180ef',
      cancelButtonColor: '#f74b4b',
      colorProgressBar: '#fff',
      grow: 'fullscreen',
      background: backgroundAlert,
      color: color_titulo,
      backdrop: true,
      input: 'textarea',
      inputPlaceholder: 'Escribe tu mensaje aquí...',
      iconColor: icon_color,
    });
  
    if (text) {
      window.location.href = "https://api.whatsapp.com/send?phone=" + celular + "&text=" + text;
    } else {
        Swal.fire({
            position: "top-end",
            icon: "info",
            width: 490,
            hight:50,
            title: "No ha enviado ningun mensaje",
            showConfirmButton: false,
            timer: 1500
          });
    }
  }
  
  document.getElementById('wpIcon').addEventListener('click',menssageAlert);
document.addEventListener('DOMContentLoaded', async function menssageAlert() {

        
   
});
