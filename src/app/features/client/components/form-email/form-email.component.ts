import { Component } from "@angular/core";
import { LucideAngularModule, CircleCheck } from "lucide-angular";

@Component({
  selector: 'form-email',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: 'form-email.component.html',
  styleUrl: 'form-email.component.css'
})

export class FormEmailComponent {
  public readonly CircleCheckIcon = CircleCheck;
}
