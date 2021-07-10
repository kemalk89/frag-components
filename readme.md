# About
The frag-components, which is a webcomponents library, are the heart of this monorepo.

The other projects are consuming the frag-components.

# Getting started
First run ```yarn build```

Next, you can start one of the clients consuming the frag-components.

# Install package in anotherpackage
```yarn workspace <package> add <package-name>@0.0.1```

## Starting app-vanilla
app-vanilla is a frontend built without a framework / library. Look into this project to see how the webcomponents are wired into the application.

You can simply open the index.html with your browser.

## TODO: Starting app-react
app-react is a frontend created with create-react-app. Look into this project to see how the webcomponents are wired into the application.

You can simply start the application by running ```yarn start:app-react```

### Important notes
Stencil provides react-output-target to automatically wrap the web components in react components. Hence, consumers can work with the components just like if they would be react components. With react 16 it works. With react 17 we have to name custom events carefully. For example if you name your custom event like "close" it will not work. Because the react-output-target is internally checking if the event is included in the Document and not already covered by react. That`s fine and its also working in react 16.
However, in react 17 there is this change: https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation 
Looks like to me that for react 17 the react-output-target should no more do that check but instantly attach the event with addEventListener. Until than, we have to be carefully when naming
custom events. For example in my case I renamed close to closeModal and than it worked also with React 17.

### TODO: Starting app-angular
app-angular is a frontend created with the angular cli. Look into this project to see how the webcomponents are wired into the application.

You can simply start the application by running ```yarn start:app-angular```

### TODO: Starting app-vue TODO
app-vue is a frontend created with the angular cli. Look into this project to see how the webcomponents are wired into the application.

You can simply start the application by running ```yarn start:app-vue```