import { Component } from "@angular/core";
import { HeaderComponent } from "../../../../shared/component/header/header.component";
import { BannerComponent } from "../../../../shared/component/banner/banner.component";

@Component({
  selector: 'client-page',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: 'home.component.html'
})

export class HomeComponent {

}
