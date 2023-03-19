# ng-nx-tabbed-portal

## Steps taken:
#### *Note: Steps loosely correlate to the repo commit history*
- Create NX Workspace
  - npx create-nx-workspace@latest
- Add Tailwind CSS to the workspace / application
  - npx nx generate @nrwl/angular:setup-tailwind portal
- Add buildable Angular library "common-ui" 
  - npx nx generate @nrwl/angular:library common-ui --buildable --addTailwind --no-interactive
- Add card component to common-ui
  - npx nx generate @nrwl/angular:component card --project=common-ui --no-interactive
- Add card styling and configuration
- Import the common-ui library to the portal 
- Replace the cards in the app.component with the new component
- 
  
## Good Links:
  - https://nx.dev/recipes/other/using-tailwind-css-with-angular-projects
  - https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479
  - 
  
