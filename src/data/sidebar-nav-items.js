export default function() {
  return [
    {
      title: "Home",
      to: "/blog-overview",
      htmlBefore: '<i class="fa fa-home" aria-hidden="true"></i>',
      htmlAfter: ""
    },
    {
      title: "Rewards",
      htmlBefore: '<i class="material-icons">star_outline</i>',
      to: "/blog-posts",
    },
    {
      title: "Customer Directory",
      htmlBefore: '<i class="fa fa-user-plus" aria-hidden="true"></i>',
      to: "/add-new-post",
    },
    {
      title: "MarketPlace",
      htmlBefore: '<i class="fa fa-building aria-hidden="true"></i>',
      to: "/components-overview",
    },
    {
      title: "Data",
      htmlBefore: '<i class="material-icons">cloud_upload</i>',
      to: "/tables",
    },
    {
      title: "AI",
      htmlBefore: '<i class="material-icons">bar_chart</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Teams",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/errors",
    }
  ];
}
