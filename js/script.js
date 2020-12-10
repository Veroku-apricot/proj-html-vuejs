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
    menuClass: '',
    iconClass: 'active'
  },
  methods: {
    shMenu: function () {
      this.menuClass===''?this.menuClass='active':this.menuClass='';
      this.iconClass==='active'?this.iconClass='':this.iconClass='active';
    }
  }
})
