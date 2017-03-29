const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
        path: '/CyberTrain',
        name: 'CyberTrain',
        getComponent(nextState, comMod) {
          import('containers/CyberTrain')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/Commerce',
         name: 'Commerce',
         getComponent(nextState, comMod) {
           import('containers/Commerce')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}