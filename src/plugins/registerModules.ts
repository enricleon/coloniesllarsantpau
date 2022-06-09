const path = require('path');
const fs = require('fs');
const requireContext = require('require-context');
const { createRoutes } = require('@nuxt/utils');

import { Module } from '@nuxt/types';

const traverseDir = (dir, callback) => {
  const dirExists = fs.existsSync(dir);

  if(dirExists) {
    callback(dir);

    fs.readdirSync(dir).forEach(file => {
      let fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        traverseDir(fullPath, callback);
      }
    });
  }
}

const nuxtModule: Module = async function (moduleOptions: {
  modules: [string],
  config: {
    modulesDir: string,
    srcDir: string
    dir: {
      pages: string,
      store: string,
      components: string
    }
  }
}) {
  const { routeNameSplitter, trailingSlash } = this.options.router;

  const config = Object.assign({
    modulesDir: 'modules',
    srcDir: 'src',
    dir: {
      pages: 'pages',
      store: 'store',
      components: 'components'
    }
  }, moduleOptions.config)

  moduleOptions.modules.forEach(moduleName => {
    // Automatically register all components of the module
    this.nuxt.hook('components:dirs', (dirs: any) => {
      // Add ./components dir to the list
      const componentsDir = path.resolve(`${config.srcDir}/${config.modulesDir}/${moduleName}/${config.dir.components}`);

      traverseDir(componentsDir, (fullPath) => {
        dirs.push({
          path: fullPath
        });
      });
    });

    const pagesDirectory = path.resolve(`${config.srcDir}/${config.modulesDir}/${moduleName}/${config.dir.pages}`);
    const pagesExist = fs.existsSync(pagesDirectory);

    if(pagesExist) {
      const files = requireContext(pagesDirectory, true, /\.vue$/)
        .keys()
        .map((fileName:string) => path.normalize(`${config.dir.pages}/${fileName}`).replace(/\\/g, '/'));

      this.extendRoutes((routes: any) => {
        routes.push(...createRoutes({
          files,
          srcDir: `${config.srcDir}/${config.modulesDir}/${moduleName}`,
          pagesDir: config.dir.pages,
          routeNameSplitter,
          trailingSlash,
        }));
      });
    }
  });

  const existingModules = moduleOptions.modules.filter(storeModuleName => {
    const storeDirectory = path.resolve(`${config.srcDir}/${config.modulesDir}/${storeModuleName}/${config.dir.store}`);
    const storeExist = fs.existsSync(storeDirectory);
    const storeHaveFiles = storeExist && fs.readdirSync(storeDirectory).length > 0;

    return storeHaveFiles;
  });

  // Register Store using a Plugin
  this.addPlugin({
    src: path.resolve('src/plugins/registerStores.js'),
    options: {
      config,
      stores: existingModules
    }
  });
};

export default nuxtModule;
