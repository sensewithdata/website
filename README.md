# sensewithDATA

Built with Gatsby, using Contentful CMS and Github Pages for hosting.

For more on Gatsby, check out https://www.gatsbyjs.com/docs/tutorial/ to get started. The site was started from the 'hello-world' starter template. 

Currenly only the 'voices' section is pulled from Contentful, using a template and slug generation to create a page for each Voice. The rest of the site is just defined with local markdown - migration to Contentful in progress.

## Developing

To run the site locally, after setting up Gatsby + node,

```
gatsby develop # visit localhost:8000
```

To deploy the site (a.k.a. build content and push to the github pages branch)

```
npm deploy
```