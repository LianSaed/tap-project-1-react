import { useEffect } from 'react';

const useTheme = (dark) => {
  useEffect(() => {
    const rootTheme = document.querySelector(':root');

    if (dark) {
      rootTheme.style.setProperty('--bg_default', '#1A1A1A');
      rootTheme.style.setProperty('--bg_body', '#282828');
      rootTheme.style.setProperty('--lines-color', '#000000');
      rootTheme.style.setProperty('--body-text', '#EDEDED');
    } else {
      rootTheme.style.setProperty('--bg_default', '#FFFFFF');
      rootTheme.style.setProperty('--bg_body', '#F0F9FF');
      rootTheme.style.setProperty('--lines-color', '#DDDDDD');
      rootTheme.style.setProperty('--body-text', '#333333');
    }
  }, [dark]);
};

export default useTheme;
