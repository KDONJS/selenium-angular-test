import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { // Inyecta el Router
    this.loginForm = this.formBuilder.group({
      username: ['yorlin', Validators.required],
      password: ['yorlin', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    if (username === 'yorlin' && password === 'yorlin') { // Valida las credenciales
      this.router.navigate(['/home']); // Redirige a la página '/home' en caso de éxito
    } else {
      alert('Error de logueo: usuario o contraseña incorrectos'); // Muestra un mensaje de error
    }
  }
}
