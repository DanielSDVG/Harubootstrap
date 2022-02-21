const app = require('../server/app.js');

tabs = {
  "accordion": "Accordion",
  "alerts": "Alerts",
  "badge": "Badge",
  "breadcrumb": "Breadcrumb",
  "buttons": "Buttons",
  "card": "Cards",
  "carousel": "Carousel",
  "colors": "Colors",
  "dropdowns": "Dropdowns",
  "forms": "Forms",
  "listgroup": "List group",
  "modal": "Modal",
  "nav-tab": "Navs & Tabs",
  "navbar": "Navbar",
  "offcanvas": "Offcanvas",
  "pagination": "Pagination",
  "popovers": "Popovers",
  "progress": "Progress",
  "spinners": "Spinners",
  "tables": "Tables",
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
    colorVariants: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
    whiteTextVariants: ["success", "danger", "info", "dark"]
  });
});