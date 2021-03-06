const LinCmsUiRouter = {
  route: null,
  name: null,
  title: 'UI',
  type: 'folder',
  icon: 'iconfont icon-jiemiansheji',
  filePath: 'views/LinCmsUi/',
  order: null,
  inNav: true,
  permission: ['查看lin的信息'],
  children: [
    {
      title: 'Basic',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/basic/',
      filePath: 'plugins/LinCmsUi/views/basic/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Button 按钮',
          type: 'view',
          name: 'LinCmsUiButton',
          route: '/lin-cms-ui/basic/button',
          filePath: 'plugins/LinCmsUi/views/basic/button/Button.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Link 文字链接',
          type: 'view',
          name: 'LinCmsUiButton',
          route: '/lin-cms-ui/basic/link',
          filePath: 'plugins/LinCmsUi/views/basic/link/Link.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Icon 图标',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/basic/icon',
          filePath: 'plugins/LinCmsUi/views/basic/icon/Icon.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
      ],
    },
    {
      title: 'Data',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/data/',
      filePath: 'plugins/LinCmsUi/views/data/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Pagination 分页',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/pagination',
          filePath: 'plugins/LinCmsUi/views/data/pagination/Pagination.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Progress 进度条',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/progress/',
          filePath: 'plugins/LinCmsUi/views/data/progress/Progress.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Badge 标记',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/badge',
          filePath: 'plugins/LinCmsUi/views/data/badge/Badge.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Tag 标签',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/tag',
          filePath: 'plugins/LinCmsUi/views/data/tag/Tag.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
      ],
    },
    {
      title: 'Navigation',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/navigation',
      filePath: 'plugins/LinCmsUi/views/navigation/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Tabs 标签页',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/tab',
          filePath: 'plugins/LinCmsUi/views/navigation/tab/Tab.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Breadcrumb 面包屑',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/breadcrumb',
          filePath: 'plugins/LinCmsUi/views/navigation/Breadcrumb.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Dropdown 下拉菜单',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/dropdown',
          filePath: 'plugins/LinCmsUi/views/navigation/Dropdown.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Steps 步骤条',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/steps',
          filePath: 'plugins/LinCmsUi/views/navigation/Steps.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
      ],
    },
    {
      title: 'Table 表格',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/table',
      filePath: 'plugins/LinCmsUi/views/table/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: '基础示例',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/table/base',
          filePath: 'plugins/LinCmsUi/views/table/Table.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: '组合示例',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/table/combo',
          filePath: 'plugins/LinCmsUi/views/table/TableCombo.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
      ],
    },
    {
      title: 'Form 表单 ',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/form/base',
      filePath: 'plugins/LinCmsUi/views/form/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Input',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/input',
          filePath: 'plugins/LinCmsUi/views/form/Input.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'MultipleInput',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/multiple-input',
          filePath: 'plugins/LinCmsUi/views/form/MultipleInput.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Radio',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/radio',
          filePath: 'plugins/LinCmsUi/views/form/Radio.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Checkbox',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/checkbox',
          filePath: 'plugins/LinCmsUi/views/form/Checkbox.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Select',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/select',
          filePath: 'plugins/LinCmsUi/views/form/Select.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Switch 开关',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/switch',
          filePath: 'plugins/LinCmsUi/views/form/switch/Switch.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Rate 评分',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/rate',
          filePath: 'plugins/LinCmsUi/views/form/rate/Rate.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'TimePicker 时间选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/timePicker',
          filePath: 'plugins/LinCmsUi/views/form/TimePicker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'DateTimePicker 日期时间选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/dateTimePicker',
          filePath: 'plugins/LinCmsUi/views/form/DateTimePicker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'DatePicker 日期选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/datePicker',
          filePath: 'plugins/LinCmsUi/views/form/DatePicker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Cascader 级联选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/cascader',
          filePath: 'plugins/LinCmsUi/views/form/Cascader.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Slider 滑块',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/slider',
          filePath: 'plugins/LinCmsUi/views/form/Slider.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
      ],
    },
    {
      title: 'Notice 通知 ',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/notice/base',
      filePath: 'plugins/LinCmsUi/views/notice/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Alert 警告',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/alert',
          filePath: 'plugins/LinCmsUi/views/notice/Alert.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Message 消息提示',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/message',
          filePath: 'plugins/LinCmsUi/views/notice/Message.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Notification 通知',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/notification',
          filePath: 'plugins/LinCmsUi/views/notice/Notification.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Loading 加载',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/loading',
          filePath: 'plugins/LinCmsUi/views/notice/Loading.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
      ],
    },
    {
      title: 'Others',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/others/base',
      filePath: 'plugins/LinCmsUi/views/others/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      right: null,
      children: [
        {
          title: 'Dialog 对话框',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/other/dialog',
          filePath: 'plugins/LinCmsUi/views/other/Dialog.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
        {
          title: 'Timeline 时间线',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/other/timeline',
          filePath: 'plugins/LinCmsUi/views/other/Timeline.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          right: null,
        },
      ],
    },
  ],
}

export default LinCmsUiRouter
