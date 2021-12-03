import React, { useEffect, useMemo, useState } from 'react';
import { ColorItem, ColorPalette } from '@storybook/addon-docs';
import debounce from 'lodash.debounce';

import { Box } from '@real-system/box';
import { Icon } from '@real-system/icon';
import { Input } from '@real-system/input';
import { themes, ThemeScales } from '@real-system/theme';

const useThemeTokens = (scale) => {
  const theme = useMemo(() => themes.realsystem, []);
  const tokenMap = useMemo(() => theme[scale], [theme, scale]);
  const rawTokens = useMemo(() => Object.keys(tokenMap), [tokenMap]);
  return {
    tokenMap,
    rawTokens,
  };
};

const TokenSearch = ({ scale }: { scale: ThemeScales }) => {
  const { tokenMap, rawTokens } = useThemeTokens(scale);
  const [term, setTerm] = useState('');
  const [matches, setMatches] = useState(rawTokens);
  const searchHandler = (e) =>
    setTerm(e.target.value ? e.target.value.toLowerCase() : e.target.value);
  const debouncedSearchHandler = useMemo(
    () => debounce(searchHandler, 300),
    []
  ) as React.ChangeEventHandler<HTMLInputElement>;
  useEffect(() => {
    if (term) {
      setMatches([...rawTokens.filter((color) => color.includes(term))]);
    } else {
      setMatches([...rawTokens]);
    }
  }, [term, rawTokens]);
  return (
    <Box display="flex" flexDirection="column">
      <Box display="block" mb={10} width="25rem">
        <Input
          type="text"
          // @ts-ignore
          prefix={<Icon icon="search" size="size-icon-30" />}
          placeholder="filter by name"
          onChange={debouncedSearchHandler}
        />
      </Box>
      <ColorPalette>
        {matches.map((t, i) => (
          <ColorItem
            key={i}
            title={t}
            subtitle={`${scale}['${t}']`}
            colors={[tokenMap[t]]}
          />
        ))}
      </ColorPalette>
    </Box>
  );
};

export { TokenSearch };
