import React, { useState } from 'react';
import './Parent.scss';
import { cloneDeep } from 'lodash';
import Child from '../Child';

function Parent({
  title, info, childrenList, onSave,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickHide = () => setIsOpen(!isOpen);
  let changes = {};
  const setChange = (id, fieldName, value) => {
    changes = {
      ...changes,
      [id]: {
        ...changes[id],
        [fieldName]: value,
      },
    };
  };
  const Children = childrenList.map((item) => (
    <Child
      id={item.id}
      key={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      experience={item.experience}
      age={item.age}
      birthPlace={item.birthPlace}
      skillsDescription={item.birthPlace}
      internalQualityDescription={item.internalQualityDescription}
      parents={item.parents}
      address={item.address}
      phoneNumber={item.phoneNumber}
      email={item.email}
      height={item.height}
      weight={item.weight}
      setChange={setChange}
    />
  ));
  const submitHandler = () => onSave(changes);
  return (
    <div className="Parent">
      <h2 className="ParentTitle">{title}</h2>
      <div className="ParentInfo">{info}</div>
      <div className="ParentHide">
        <button
          type="button"
          onClick={handleClickHide}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      {isOpen ? Children : null}
      {
        isOpen ? (
          <div className="ParentSave">
            <button
              type="button"
              onClick={submitHandler}
            >
              Save
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default Parent;
