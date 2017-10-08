module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-book',
          title: 'Search Dash',
          subtitle: 'Search Dash for "' + search + '"',
          value: search,
        },
      ]);
    });
  };
};
