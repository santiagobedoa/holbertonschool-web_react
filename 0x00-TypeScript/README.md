# [Typescript](https://intranet.hbtn.io/projects/589)

<html>
<div class="panel panel-default" id="project-description">
 <div class="panel-body">
  <p>
   <img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230503%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20230503T214344Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=46c445253709c77aa0ecec0e287e6028128e5bdbffc9a5de4056390247fa488c" style=""/>
  </p>
  <h2>
   Resources
  </h2>
  <p>
   <strong>
    Read or watch
   </strong>
   :
  </p>
  <ul>
   <li>
    <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" title="TypeScript in 5 minutes">
     TypeScript in 5 minutes
    </a>
   </li>
   <li>
    <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank" title="TypeScript documentation">
     TypeScript documentation
    </a>
   </li>
  </ul>
  <h2>
   Learning Objectives
  </h2>
  <p>
   At the end of this project, you are expected to be able to
   <a href="https://fs.blog/feynman-learning-technique/" target="_blank" title="explain to anyone">
    explain to anyone
   </a>
   ,
   <strong>
    without the help of Google
   </strong>
   :
  </p>
  <ul>
   <li>
    Basic types in Typescript
   </li>
   <li>
    Interfaces, Classes, and functions
   </li>
   <li>
    How to work with the DOM and Typescript
   </li>
   <li>
    Generic types
   </li>
   <li>
    How to use namespaces
   </li>
   <li>
    How to merge declarations
   </li>
   <li>
    How to use an ambient Namespace to import an external library
   </li>
   <li>
    Basic nominal typing with Typescript
   </li>
  </ul>
  <h2>
   Requirements
  </h2>
  <ul>
   <li>
    Allowed editors:
    <code>
     vi
    </code>
    ,
    <code>
     vim
    </code>
    ,
    <code>
     emacs
    </code>
    ,
    <code>
     Visual Studio Code
    </code>
   </li>
   <li>
    All your files should end with a new line
   </li>
   <li>
    All your files will be transpiled on Ubuntu 18.04
   </li>
   <li>
    Your TS scripts will be checked with
    <code>
     jest
    </code>
    (version 24.9.* )
   </li>
   <li>
    A
    <code>
     README.md
    </code>
    file, at the root of the folder of the project, is mandatory
   </li>
   <li>
    Your code should use the
    <code>
     ts
    </code>
    extension when possible
   </li>
   <li>
    The Typescript compiler should not show any warning or error when compiling your code
   </li>
  </ul>
  <h2>
   Configuration Files
  </h2>
  <p>
   Please use these files for the following tasks
  </p>
  <h3>
   <code>
    package.json
   </code>
  </h3>
  <details>
   <summary>
    Click to show/hide file contents
   </summary>
   <pre>
<code>
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
</code>
</pre>
  </details>
  <h3>
   <code>
    .eslintrc.js
   </code>
  </h3>
  <details>
   <summary>
    Click to show/hide file contents
   </summary>
   <pre>
<code>
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
</code>
</pre>
  </details>
  <h3>
   <code>
    tsconfig.json
   </code>
  </h3>
  <details>
   <summary>
    Click to show/hide file contents
   </summary>
   <pre>
<code>
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
</code>
</pre>
  </details>
  <h3>
   <code>
    webpack.config.js
   </code>
  </h3>
  <details>
   <summary>
    Click to show/hide file contents
   </summary>
   <pre>
<code>
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
</code>
</pre>
  </details>
 </div>
</div>

[--LINK PROJECT--](https://intranet.hbtn.io/projects/589)
</html>