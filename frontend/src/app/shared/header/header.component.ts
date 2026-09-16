import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = false;
  searchOpen = false;

  desktopMenOpen = false;
  desktopWomenOpen = false;
  mobileMenOpen = false;
  mobileWomenOpen = false;

  cartDropdownOpen = false;
  private cartDropdownTimer: ReturnType<typeof setTimeout> | undefined;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
  }

  openCartDropdown(): void {
    clearTimeout(this.cartDropdownTimer);
    this.cartDropdownOpen = true;
  }

  closeCartDropdown(): void {
    this.cartDropdownTimer = setTimeout(() => {
      this.cartDropdownOpen = false;
    }, 1300);
  }
}
