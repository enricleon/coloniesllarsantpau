const options = <%= JSON.stringify(options) %>

export default async ({ store }) => {
  return Promise.all(options.stores.map(async (storeName) => {
    // This must be relative to .nuxt since it it registered at RUNTIME
    const targetStore = await import(`../${options.config.srcDir}/${options.config.modulesDir}/${storeName}/${options.config.dir.store}/index`);

    return await store.registerModule(storeName, targetStore.store, {
      namespaced: targetStore.store.namespaced,
    });
  }))
}
