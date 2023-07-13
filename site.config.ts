import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6e12bdbf1c63411d94093a92ffb7177d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yeojin blog',
  domain: 'yeojin822/vercel.app',
  author: 'yeojin',

  // open graph metadata (optional)
  description: 'Yeojin blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'yeojin822',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5134f079-dc15-4c9c-a329-8f29ac650f01%2Ffa33609f133e136ce57af3c5081d4f1e-sticker.png?table=block&id=6e12bdbf-1c63-411d-9409-3a92ffb7177d&spaceId=7f868d0c-e3e9-4e62-88e0-1484cfe2e9da&width=250&userId=49e38b8a-dfe6-49bb-87e8-3ef8201b45a1&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'yeojin822/blog-comments',

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '카테고리',
      pageId: '7dc3bbd00ad94183ad3a43b9ad960d0f',
    },
    {
      title: '카테고리',
      pageId: '7dc3bbd00ad94183ad3a43b9ad960d0f',
      menuPage: true,
    },
  ],

  // -------- custom configs -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
