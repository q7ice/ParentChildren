import './App.scss';
import { useState } from 'react';
import { random } from 'lodash';
import Parent from '../Parent';

function genStartParents() {
  const parentCount = random(1, 2);
  const parents = [];

  function genStartChildren() {
    const children = [];
    const childCount = random(2, 2);
    for (let i = 0; i < childCount; i++) {
      children.push({
        id: i + 1,
        firstName: '',
        lastName: '',
        experience: '',
        age: '',
        birthPlace: '',
        skillsDescription: '',
        internalQualityDescription: '',
        parents: '',
        address: '',
        phoneNumber: '',
        email: '',
        height: '',
        weight: '',
      });
    }
    return children;
  }

  for (let i = 0; i < parentCount; i++) {
    const parent = {
      id: i + 1,
      title: `Manager ${i + 1}`,
      info: `Some info about manager ${i + 1}`,
      children: genStartChildren(i),
    };
    parents.push(parent);
  }
  return parents;
}

function App() {
  const [parents, setParents] = useState(genStartParents());
  const onSave = (id) => (changes) => console.log({ managerID: id, changes });

  return (
    <div className="App">
      {parents.map(({
        id, title, info, children,
      }) => (
        <Parent
          title={title}
          info={info}
          childrenList={children}
          key={id}
          onSave={onSave(id)}
        />
      ))}
    </div>
  );
}

export default App;
