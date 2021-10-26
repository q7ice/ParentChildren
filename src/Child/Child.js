import React from 'react';
import './Child.scss';
import createUseChangedInput from '../hooks/useChangedInput';

function Child({
  id,
  firstName,
  lastName,
  experience,
  age,
  birthPlace,
  skillsDescription,
  internalQualityDescription,
  parents,
  address,
  phoneNumber,
  email,
  height,
  weight,
  setChange,
}) {
  const useChangedInput = createUseChangedInput(id, setChange);

  const {
    value: firstNameValue,
    onChange: onChangeFirstName,
  } = useChangedInput(firstName, 'firstName');

  const {
    value: lastNameValue,
    onChange: onChangeLastName,
  } = useChangedInput(lastName, 'lastName');

  const {
    value: experienceValue,
    onChange: onChangeExperience,
  } = useChangedInput(experience, 'experience');

  const {
    value: ageValue,
    onChange: onChangeAge,
  } = useChangedInput(age, 'age');

  const {
    value: birthPlaceValue,
    onChange: onChangeBirthPlace,
  } = useChangedInput(birthPlace, 'birthPlace');

  const {
    value: skillsDescriptionValue,
    onChange: onChangeSkillsDescription,
  } = useChangedInput(skillsDescription, 'skillsDescription');

  const {
    value: internalQualityDescriptionValue,
    onChange: onChangeInternalQualityDescription,
  } = useChangedInput(internalQualityDescription, 'internalQualityDescription');

  const {
    value: parentsValue,
    onChange: onChangeParents,
  } = useChangedInput(parents, 'parents');

  const {
    value: addressValue,
    onChange: onChangeAddress,
  } = useChangedInput(address, 'address');

  const {
    value: phoneNumberValue,
    onChange: onChangePhoneNumber,
  } = useChangedInput(phoneNumber, 'phoneNumber');

  const {
    value: emailValue,
    onChange: onChangeEmail,
  } = useChangedInput(email, 'email');

  const {
    value: heightValue,
    onChange: onChangeHeight,
  } = useChangedInput(height, 'height');

  const {
    value: weightValue,
    onChange: onChangeWeight,
  } = useChangedInput(weight, 'weight');

  return (
    <div className="Child">
      <span className="ChildId">{id}</span>
      <div>
        <span>First Name</span>
        <input
          type="text"
          value={firstNameValue}
          onChange={onChangeFirstName}
        />
      </div>
      <div>
        <span>Last Name</span>
        <input
          type="text"
          value={lastNameValue}
          onChange={onChangeLastName}
        />
      </div>
      <div>
        <span>Experience</span>
        <input
          type="text"
          value={experienceValue}
          onChange={onChangeExperience}
        />
      </div>
      <div>
        <span>Age</span>
        <input
          type="text"
          value={ageValue}
          onChange={onChangeAge}
        />
      </div>
      <div>
        <span>Place of Birth</span>
        <input
          type="text"
          value={birthPlaceValue}
          onChange={onChangeBirthPlace}
        />
      </div>
      <div>
        <span>Description of Skills</span>
        <input
          type="text"
          value={skillsDescriptionValue}
          onChange={onChangeSkillsDescription}
        />
      </div>
      <div>
        <span>Description of Internal Qualities</span>
        <input
          type="text"
          value={internalQualityDescriptionValue}
          onChange={onChangeInternalQualityDescription}
        />
      </div>
      <div>
        <span>Parents</span>
        <input
          type="text"
          value={parentsValue}
          onChange={onChangeParents}
        />
      </div>
      <div>
        <span>Address</span>
        <input
          type="text"
          value={addressValue}
          onChange={onChangeAddress}
        />
      </div>
      <div>
        <span>Phone Number</span>
        <input
          type="text"
          value={phoneNumberValue}
          onChange={onChangePhoneNumber}
        />
      </div>
      <div>
        <span>Email</span>
        <input
          type="text"
          value={emailValue}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <span>Height</span>
        <input
          type="text"
          value={heightValue}
          onChange={onChangeHeight}
        />
      </div>
      <div>
        <span>Weight</span>
        <input
          type="text"
          value={weightValue}
          onChange={onChangeWeight}
        />
      </div>
    </div>
  );
}

export default Child;
