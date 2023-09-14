import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { StyledInput, StyledBtn } from './SearchForm.styled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storedQuery = localStorage.getItem('storedQuery');

    if (storedQuery) {
      setQuery(storedQuery);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem('storedQuery');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleInput = evt => {
    const inputValue = evt.target.value;
    setQuery(inputValue);
    localStorage.setItem('storedQuery', inputValue);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!query) {
      Notiflix.Notify.info('Please enter your request');
    } else {
      setSearchParams({ query });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Enter title"
        value={query}
        autoFocus
        onChange={handleInput}
        autoComplete="off"
      />

      <StyledBtn type="submit">Search</StyledBtn>
    </form>
  );
};
export default Form;
