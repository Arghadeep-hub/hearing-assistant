import React from 'react';

const LanguageSelect = ({ languages, value, onChange }) => (
  <select name="input-language" className='language' value={value} onChange={onChange}>
    {languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.name}
      </option>
    ))}
  </select>
);


export default LanguageSelect;