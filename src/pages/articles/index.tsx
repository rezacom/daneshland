import BlogList from '../../components/BlogList';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useDebounce } from '../../hooks/use-debounce';
import { getBlogPosts } from '../../store/global-slice';
import { useMemo, useState } from 'react';
import Pagination from '@mui/material/Pagination';

import * as S from "./styles";

const ArticlesPage = () => {
  const posts = useAppSelector(getBlogPosts);
  const [searchValue, setSearchValue] = useState<string>('');

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
      <div>
        <BlogList posts={filteredPosts} />
        <S.Pagination>
          <Pagination count={10} />
        </S.Pagination>
      </div>
    </div>
  );
};

export default ArticlesPage;
