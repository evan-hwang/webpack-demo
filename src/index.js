function component() {
    const element = document.createElement('div');

    // _에 대해서 lodash가 포함되어야할 암시적 종속성이 있다.
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());