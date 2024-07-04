let celular = 57321597082;

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
      grow: 'fullscreen',
      background: backgroundAlert,
      color: color_titulo,
      backdrop: true,
      input: 'textarea',
      inputPlaceholder: 'Escribe tu mensaje aquí...',
      iconColor: icon_color,
    });
  
    if (text) {
      Swal.fire({title:'Enviando Mensaje!',text:'Sera redirigido a nuestro chat',icon:'success',timer:2000,timerProgressBar: true,});
      const link= "https://api.whatsapp.com/send?phone=" + celular + "&text=" + text;
      setTimeout(() => {
        window.open(link, "_blank");
      }, 2000);

    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            text:"ha cancelado el envio de mensaje",
            width: 490,
            hight:50,
            timer:3000,
            timerProgressBar:true,
            title: "No ha enviado ningun mensaje",
            showConfirmButton: false,
            timer: 1500
          });
    }
  }
  
  document.getElementById('wpIcon').addEventListener('click',menssageAlert);
document.addEventListener('DOMContentLoaded', async function menssageAlert() {

        
   
});

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    tdName = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
    if (tdName) {
      txtValue = tdName.textContent || tdName.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
  