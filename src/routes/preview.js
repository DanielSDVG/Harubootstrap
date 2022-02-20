const app = require('../server/app.js');

tabs = {
  "accordion": "Accordion",
  "alerts": "Alerts",
  "badge": "Badge",
  "breadcrumb": "Breadcrumb",
  "buttons": "Buttons",
  "card": "Cards",
  "carousel": "Carousel",
  "close-button": "Close button",
  "collapse": "Collapse",
  "colors": "Colors",
  "dropdowns": "Dropdowns",
  "listgroup": "List group",
  "modal": "Modal",
  "nav-tab": "Navs & Tabs",
  "navbar": "Navbar",
  "offcanvas": "Offcanvas",
  "pagination": "Pagination",
  "popovers": "Popovers",
  "progress": "Progress",
  "spinners": "Spinners",
  "toasts": "Toasts",
  "tooltips": "Tooltips",
  "typography": "Typography"
};

themes = {
  "haruki-light": "Haruki Light",
  "haruki-dark": "Haruki Dark",
  "daimaru-light": "Daimaru Light",
  "daimaru-dark": "Daimaru Dark"
}

themeColors = [
  "blue",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "cyan",
  "gray"
]

app.get('/', (req, res) => {
  res.redirect('/theme/haruki-light')
});

app.get('/theme/:name', (req, res) => {
  res.render('preview', {
    htmlTitle: 'Hello World',
    theme: req.params.name,
    tabs: tabs,
    themeColors: themeColors,
    themeList: themes,
    themeName: themes[req.params.name],
    defaultTab: "accordion",
    colorVariants: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
  });
});