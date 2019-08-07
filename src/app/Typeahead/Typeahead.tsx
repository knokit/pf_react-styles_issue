import React, { useState } from 'react';
import { Select, SelectOption, SelectVariant, PageSection, PageSectionVariants, Bullseye } from '@patternfly/react-core';

const selectOptions = [
  { key: 1, value: 'test-1' },
  { key: 2, value: 'test-2' },
  { key: 3, value: 'test-3' },
];

const Typeahead: React.FunctionComponent = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');

  const onSelect = (_, selection, isPlaceholder) => {
    if (isPlaceholder) {
      setSelected('');
    } else {
      setSelected(selection);
      setExpanded(false);
    }
  };

  return (
    <Select
      variant={SelectVariant.typeahead}
      aria-label="test"
      onToggle={() => setExpanded(!isExpanded)}
      onSelect={onSelect}
      onClear={() => setSelected('')}
      selections={selected}
      isExpanded={isExpanded}
      placeholderText="select something"
      width="auto"
    >
      {selectOptions.map(opt => (<SelectOption {...opt} />))}
    </Select>
  );
};

export default Typeahead;