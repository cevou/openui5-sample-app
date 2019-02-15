![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app
> [OpenUI5](https://github.com/SAP/openui5) sample app using webpack

This repository shows how to build a OpenUI5 app using webpack and the `openui5-webpack-plugin`.

## Getting started
1. Clone this repository and navigate into it
    ```sh
    git clone https://github.com/cevou/openui5-sample-app.git
    cd openui5-sample-app
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)
    ```sh
    npm run start
    ```

## Building
1. Execute the build
    ```sh
    npm run build
    ```
1. Run the result
    1. Install an HTTP server like [zeit/serve](https://www.npmjs.com/package/serve) (**Note:** You can use any HTTP server. If you use zeit/serve, please use version 6 as gzip support has been removed in newer versions.)
        ```sh
        # Install zeit/serve
        npm install --global serve@6
        ```
    1. Start an HTTP server for the newly created `/dist` directory
        ```sh
        serve ./dist
        ```
    1. Open the app at http://localhost:5000/index.html

## TODO

- Add examples for tests
