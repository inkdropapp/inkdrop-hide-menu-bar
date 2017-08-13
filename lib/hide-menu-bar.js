module.exports = {

  activate() {
    inkdrop.window.setAutoHideMenuBar(true)
    inkdrop.window.setMenuBarVisibility(false)
  },

  deactivate() {
    inkdrop.window.setAutoHideMenuBar(false)
    inkdrop.window.setMenuBarVisibility(true)
  }

};
