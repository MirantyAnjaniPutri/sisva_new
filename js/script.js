// function toggleMenu() {
//   var mobileMenu = document.querySelector(".header__menu-mobile");
//   mobileMenu.classList.toggle("active");
// }

// function closeMenu() {
//   var mobileMenu = document.querySelector(".header__menu-mobile");
//   mobileMenu.classList.remove("active");
// }

export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
