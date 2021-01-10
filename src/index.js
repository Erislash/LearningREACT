import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';
import './index.css';


// const name = "Joshua";
// const JSX = <h1>Hello, {name}</h1>;

const characters = [
    {
        'name' : 'Jahra',
        'surname' : 'Phalio',
        'age' : 26,
        'job' : 'Lancer',
        'avatarUrl': './assets/img/Char-1.jpg'
    },
    {
        'name' : 'Mikhael',
        'surname' : 'Niora',
        'age' : 34,
        'job' : 'Gunslinger',
        'avatarUrl': './assets/img/Char-2.jpg'
    },
    {
        'name' : 'Sahra',
        'surname' : 'Lamba',
        'age' : 30,
        'job' : 'Wizard',
        'avatarUrl': './assets/img/Char-3.jpg'
    },
    {
        'name' : '',
        'surname' : 'awd',
        'age' : 30,
        'job' : 'Sorcerer',
        'avatarUrl': './assets/img/Char-4.jpg'
    }
];

// const JSX = <div 
//             className="characters">
//                 {characters.map(({name, surname, age, job, avatarUrl : avatar}) => 
//                     <Character 
//                     name={name}
//                     surname={surname}
//                     job={job}
//                     age={age}
//                     avatar={avatar}
//                     key={name}
//                     />)}
//             </div>;


let info = React.createElement(
    'h1',
    {className : 'titlePage'},
    'Seleccione un personaje'
);



let chars = [];
for(let i = 0; i < characters.length; i++){
    const char = characters[i];
    const {name, surname, job, age, avatarUrl : avatar} = char;
    chars.push(<Character 
                name={name}
                surname={surname}
                job={job}
                age={age}
                avatar={avatar}
                key={name}
                handle={handleClick}/>);
}

const charsElement = React.createElement(
    'div',
    {className: 'characters'},
    chars
);

let JSX = React.createElement(
    'div',
    {},
    info, charsElement
);

ReactDOM.render(
    JSX,
    document.getElementById('container')
);

function handleClick(name){

    return () => {
    info = React.createElement(
        'h1',
        {className : 'titlePage'},
        `Seleccionado: ${name}`
    );
    JSX = React.createElement(
        'div',
        {},
        info, charsElement
    );
    ReactDOM.render(
        JSX,
        document.getElementById('container')
    );
    }
    
}

