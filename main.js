document.getElementById('inicio').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  let usuario = document.getElementById('exampleInputEmail1').value;
  let contraseña = document.getElementById('exampleInputPassword1').value;

  if (!usuario && !contraseña) {
    alert('Por favor, ingrese un usuario y contraseña.');
  } else if (!usuario) {
    alert('Por favor, ingrese un usuario.');
  } else if (!contraseña) {
    alert('Por favor, ingrese una contraseña.');
  } else {
    alert('El ingreso fue exitoso para el usuario: ' + usuario);
  }

  // console.log('Datos ingresados:', { usuario, contraseña });

  this.reset();
});
