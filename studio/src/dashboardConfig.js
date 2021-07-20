export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f709ef93d9d141fcc37ca5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-r5x4ad5q",
                  apiId: "c569f8dc-3f65-4491-94c8-38c7dadf039b",
                },
                {
                  buildHookId: "60f709f01123a042e170de2a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-g45eafqy",
                  apiId: "29927c01-20b1-4345-ae62-27cff40ab8a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dasafodev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-g45eafqy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
