import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import JsonData from './data.json';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 존재하는 div 태그에 imgae 추가
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log('Json', JsonData);

    return element;
}

document.body.appendChild(component());