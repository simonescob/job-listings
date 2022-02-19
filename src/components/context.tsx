import { createContext } from 'react';

// Type of context activity
export type Tags = {
  tags: string[],
  setTags: (value: string[]) => void
}

const TagsContext = createContext<Tags>({
  tags: [],
  setTags: () => {}
});

export default TagsContext;