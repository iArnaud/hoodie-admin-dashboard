'use strict';

var Marionette = require('backbone.marionette');
var Syphon = require('backbone.syphon');

var tmpl = require('../templates/index.hbs');

require('../../../../helpers/handlebars');
require('backbone.validation');


var View = Marionette.ItemView.extend({
  template: tmpl,

  initialize: function () {
    Backbone.Validation.bind(this);
  },

  events: {
    'click #submit' : 'submit',
    'keydown input' : 'submitOnEnter'
  },

  invalid: function () {
    console.log('invalid password');
  },

  valid: function () {
    Backbone.history.navigate('plugins', {
      trigger: true
    });

    app.vent.trigger('app:start');
  },

  modelEvents: {
    'validated:invalid': 'invalid'
  },

  submitOnEnter: function (e) {
    var key = e.keyCode || e.which;

    if (key === 13) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function () {
    var self = this;
    var data = Syphon.serialize(this);

    this.model.signIn(data.password)
    .done(function () {
      self.valid();
    })
    .fail(function () {
      self.invalid();
    });
  }

});

module.exports = View;
