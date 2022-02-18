const app = require('../server/app.js');

tabs = {
  "typography": "Typography",
  "colors": "Colors",
  "accordion": "Accordion",
  "alerts": "Alerts",
  "badge": "Badge",
  "breadcrumb": "Breadcrumb",
  "buttons": "Buttons",
  "card": "Cards",
  "carousel": "Carousel",
  "close-button": "Close button",
  "collapse": "Collapse",
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
  "tooltips": "Tooltips"
};

app.get('/', (req, res) => {
  res.redirect('/theme/haruki-light')
});

app.get('/theme/:name', (req, res) => {
  res.render('preview', { htmlTitle: 'Hello World', theme: req.params.name, tabs: tabs });
});