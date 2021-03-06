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
    textInvertOn: ["success", "danger", "info", "dark"],
    isDark: false,
    useInvertOnCards: false
  },
  "haruki-dark": {
    name: "Haruki Dark",
    textInvertOn: ["secondary", "success", "warning", "light"],
    isDark: true,
    useInvertOnCards: false
  },
  "default": {
    name: "Bootstrap Default",
    textInvertOn: ["primary", "secondary", "success", "danger", "dark"],
    isDark: false,
    useInvertOnCards: true
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

baseContext = {
  htmlTitle: 'Harubootstrap themes',
  themeList: themes,
};

app.get('/', (req, res) => {
  res.render('index', baseContext)
});

app.get('/theme/:name', (req, res) => {
  res.render('preview', {
    ...baseContext,
    themeId: req.params.name,
    tabs: tabs,
    themeColors: themeColors,
    theme: themes[req.params.name],
    defaultTab: "accordion",
    colorVariants: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
  });
});