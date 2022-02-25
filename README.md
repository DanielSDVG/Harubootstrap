# Harubootstrap

This is a compilation of Bootstrap themes that I made for my personal projects.

Currently there is only one theme, ``haruki-light``, but more themes could be available in the future.


## Using my themes

You can find my themes in the ``dist`` folder, both as Sass files and precompiled CSS files.

Each theme has a ``bootstrap.css`` file with contains all of Bootstrap's CSS styles, customized for that specific theme (as well as the minified version ``bootstrap.min.css``), and a ``colorpreview.min.css``, to preview colors for that theme without outputting extra CSS classes that may be unnecessary to use Bootstrap.

If you use Node.js with React, you can also install ``harubootstrap``.

```
npm install harubootstrap
```

Then, import the corresponding file in your JavaScript:

```
import 'harubootstrap/dist/<theme-name>/bootstrap.css';
```


## Previewing the themes

Requirements: Node.js

1.  Clone or download this repository.
2.  Install dependencies:

    ```
    npm install
    ```

3.  Run with:

    ```
    npm start
    ```
    
4.  Open http://localhost:8080 to start previewing!