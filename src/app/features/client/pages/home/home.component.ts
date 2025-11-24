import { Component } from "@angular/core";
import { HeaderComponent } from "../../../../shared/component/header/header.component";
import { BannerComponent } from "../../../../shared/component/banner/banner.component";
import { LucideAngularModule, CreditCard, PiggyBank, ShieldCheck, CarFront, CircleQuestionMark, HandCoins } from "lucide-angular";
import { FormEmailComponent } from "../../components/form-email/form-email.component";

@Component({
  selector: 'client-page',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, LucideAngularModule, FormEmailComponent],
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  public readonly CreditCardIcon = CreditCard;
  public readonly PiggyBankIcon = PiggyBank;
  public readonly ShieldCheckIcon = ShieldCheck;
  public readonly CarFrontIcon = CarFront;
  public readonly CircleQuestionMarkIcon = CircleQuestionMark;
  public readonly HandCoinsIcon = HandCoins;
}
