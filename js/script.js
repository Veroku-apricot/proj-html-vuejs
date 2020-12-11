// Header
var nav = new Vue ({
  el: '#head',
  data: {
    links: [
      'Home',
      'Works',
      'Articles',
      'Let\'s talk'
    ],
    menu: false,
    openMenu: true
  },
  methods: {
    shMenu: function () {
      this.openMenu===true?this.openMenu=false:this.openMenu=true;
      this.menu = !this.openMenu;
    }
  }
})

// Footer
var foot = new Vue ({
  el: '#foot',
  data: {
    socials: [
      'fab fa-facebook-f',
      'fab fa-twitter',
      'fab fa-instagram',
      'fab fa-youtube'
    ]
  }
})
