'use strict';
var yeoman = require('yeoman-generator');
var utils = require('../utils/utils.js');

var MGenerator = yeoman.generators.NamedBase.extend({

  initializing: function () {
    this.argument('module', { type: String, required: false });
    this.moduleName =  utils.checkModule(this.module);
    this.moduleFolder = utils.moduleFolder(this.moduleName);

    this.log('You called the m:service subgenerator.');

    this.serviceName = utils.serviceName(this.name);
    this.fileName = utils.fileName(this.serviceName);
  },

  writing: function () {
    // create service with snake-case file name
    var folder = 'app/' + this.moduleFolder + '/services/';
    this.template('_service.js', folder + this.fileName + '-serv.js');
  }
});

module.exports = MGenerator;
