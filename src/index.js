function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        console.log("inner then");
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
    console.log("outer then");
    document.body.appendChild(component);
});