'use strict';

const BaseController = require('../base');

class ProjectizedController extends BaseController {

  async list(){
    const { service } = this;
    const response = await service.projectized.queryMyProjects();
    if (response) {
      this.success(response);
    } else {
      this.error(response, '查询失败');
    }
  }

  async saveProjectMember(){
    const { service, ctx } = this;
    const response = await service.projectized.saveMember(ctx.params.id,ctx.request.body);
    if (response) {
      this.success(response);
    } else {
      this.error(response, '操作失败');
    }
  }

  async saveProject(){
    const { service, ctx } = this;
    const response = await service.projectized.saveProject(ctx.request.body);
    response?this.success(response):this.error(response, '操作失败');
  }

  async deleteProject(){
    const { service, ctx } = this;
    const response = await service.projectized.deleteProject(ctx.params.id);
    if (response) {
      this.success(response);
    } else {
      this.error(response, '操作失败');
    }
  }
}

module.exports = ProjectizedController;
