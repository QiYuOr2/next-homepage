/**
 * 项目列表
 */

import { Project } from '../interfaces';

export const projectListData: Project[] = [
  {
    title: '某警察学校考试系统',
    img: '../static/examsys.png',
    desc:
      '使用Vue与.Net MVC编写的考试系统，实现了批量导入用户、根据题库自动出题等功能',
    site: 'https://www.barteam.cn:5926',
  },
  {
    title: '某学院仓库管理系统',
    img: '../static/police.png',
    desc: '基于.Net WebAPI和jQuery搭建的一个管理仓库内各种器材的后台系统',
    site: 'https://www.barteam.cn:7474',
  },
  {
    title: '电竞酒店管理平台',
    img: '../static/ehotel.png',
    desc: '基于Nestjs、Reactjs和微信小程序搭建的一套完整的电竞酒店管理平台',
    site: 'https://www.barteam.cn:7721',
  },
  {
    title: 'BEST打印机',
    img: '../static/print.png',
    desc:
      '一个可以打印多种格式文件、可连接多台打印机，可以自动计算文件页数，更加高效便捷支付，减少大家的打印排队时和等待时间，使商家从重复劳动中解放出来的Web打印平台。',
    site: 'http://www.barteam.cn:1111',
  },
];
