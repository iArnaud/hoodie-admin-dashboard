'use strict';

var BaseRouter = require('./helpers/mvc/router');

var Router = BaseRouter.extend({

  routes: {
    ''                      : 'login',
    'plugins/:filter'       : 'plugins',
    'logout'                : 'logout',
    '*defaults'             : 'plugins'
  },

  plugins: function (filter) {
    if (filter) {
      var action = filter.split('/')[2] || '';
      var name = filter.split('/')[1] || filter;
      app.vent.trigger('plugins', name, action);
    } else {
      app.vent.trigger('plugins');
    }

  },

  logout: function () {
    app.vent.trigger('app:layout:login');
    app.vent.trigger('app:user:logout');
    Backbone.history.navigate('', {
      trigger: true
    });
  },

  login: function () {
    app.vent.trigger('app:layout:login');
    app.vent.trigger('app:user:logout');
  }

});

module.exports = Router;

