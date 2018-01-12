'use strict';


const start = Date.now();

module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
  });
  app.logger.debug('debug log ');
  app.logger.info('启动耗时 %d ms', Date.now() - start);
  app.logger.warn('warning!');
};
