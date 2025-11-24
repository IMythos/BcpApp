import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterService } from '../../../../core/services/register.service';
import { ClientRegister } from '../../../../shared/interfaces/register.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bank-account',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './bank-account.html',
  styleUrl: './bank-account.css',
})
export class BankAccount implements OnInit {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterService);

  registerForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  public readonly ChevronLeftIcon = ChevronLeft;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    })
  }

  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.errorMessage = null;
      this.successMessage = null;

      const request: ClientRegister = this.registerForm.value;
    }

  }
}
