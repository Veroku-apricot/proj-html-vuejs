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
      this.menu = !this.menu;
    }
  }
})
