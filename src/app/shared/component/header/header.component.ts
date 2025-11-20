import { Component, signal } from "@angular/core";
import { LucideAngularModule, ChevronDown, Search, HandCoins, LockKeyhole, Menu, X, CreditCard, Smartphone, BadgeCheck, Info } from "lucide-angular";

@Component({
  selector: 'client-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  public readonly ChevronDownIcon = ChevronDown;
  public readonly SearchIcon = Search;
  public readonly HandCoinsIcon = HandCoins;
  public readonly LockKeyholeIcon = LockKeyhole;
  public readonly MenuIcon = Menu;
  public readonly CloseIcon = X;
  public readonly CreditCardIcon = CreditCard;
  public readonly SmartphoneIcon = Smartphone;
  public readonly BadgeCheckIcon = BadgeCheck;
  public readonly InfoIcon = Info;

  public isOpenMenu = signal(false);

  public toggleMenu(): void {
    this.isOpenMenu.update(state => !state);
    console.log(`Activo: ${this.isOpenMenu}`);
  }
}
