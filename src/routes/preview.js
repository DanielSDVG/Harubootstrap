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
  "forms": "Forms",
  "listgroup": "List group",
  "modal": "Modal",
  "nav-tab": "Navs & Tabs",
  "progress": "Progress",
  "spinners": "Spinners",
  "tables": "Tables",
  "toasts": "Toasts",
  "tooltips": "Tooltips",
  "typography": "Typography"
};

themes = {
  "haruki-light": {
    name: "Haruki Light",
    whiteTextVariants: ["success", "danger", "info", "dark"],
    applyWhiteTextOnCards: false
  },
  "default": {
    name: "Bootstrap Default",
    whiteTextVariants: ["primary", "secondary", "success", "danger", "dark"],
    applyWhiteTextOnCards: true
  }
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
    themeId: req.params.name,
    tabs: tabs,
    themeColors: themeColors,
    themeList: themes,
    theme: themes[req.params.name],
    defaultTab: "accordion",
    colorVariants: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
  });
});