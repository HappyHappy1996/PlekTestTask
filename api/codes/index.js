const { initHttpServer } = require('./init-http-server');
const { dummyService } = require('./core/dummy/service');

initHttpServer();
dummyService.populate();
