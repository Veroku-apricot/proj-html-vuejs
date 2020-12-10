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
    menuClass: ''
  },
  methods: {
    showMenu: function () {
      this.menuClass===''?this.menuClass='active':this.menuClass=''
    }
  }
})
