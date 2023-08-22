import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import BlogList from '../../components/BlogList';
import SearchBox from '../../components/SearchBox';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useDebounce } from '../../hooks/use-debounce';
import { getBlogPosts } from '../../store/global-slice';

import * as S from './styles';

const HomePage = () => {
  const posts = useAppSelector(getBlogPosts);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const filteredPosts = useMemo(() => {
    return posts.filter((post: any) => {
      const searchQuery = debouncedSearchValue.trim().toLowerCase();
      return (
        post.category.toLowerCase().startsWith(searchQuery) ||
        post.tags.some((tag: any) => tag.toLowerCase().startsWith(searchQuery))
      );
    });
  }, [debouncedSearchValue, posts]);

  return (
    <div>
      <S.Header className="flex justify-center py-6 flex-direction-column">
        <S.H2>جایی برای خواندن و نوشتن</S.H2>
        <SearchBox value={searchValue} onChange={handleSearch} />
      </S.Header>

      <div>
        <BlogList posts={filteredPosts} />
      </div>
    </div>
  );
};

export default HomePage;
