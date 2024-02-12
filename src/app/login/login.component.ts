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
  public error: boolean = false; 

  constructor(private formBuilder: FormBuilder, private router: Router) { // Inyecta el Router
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
  
    if (username === 'yorlin' && password === 'yorlin') { // Valida las credenciales
      this.router.navigate(['/home']); // Redirige a la página '/home' en caso de éxito
    } else {
      this.error = true; // Muestra el mensaje de error
    }
  }
}
