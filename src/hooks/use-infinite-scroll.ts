
import { useEffect, useState } from 'react';

export function useInfiniteScroll<T>(items: T[], itemsPerPage: number = 6) {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const initialItems = items.slice(0, itemsPerPage);
    setDisplayedItems(initialItems);
    setHasMore(initialItems.length < items.length);
  }, [items, itemsPerPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000 &&
        !loading &&
        hasMore
      ) {
        setLoading(true);
        
        // Simulate loading delay for better UX
        setTimeout(() => {
          const nextItems = items.slice(0, (page + 1) * itemsPerPage);
          if (nextItems.length > displayedItems.length) {
            setDisplayedItems(nextItems);
            setPage(page + 1);
            setHasMore(nextItems.length < items.length);
          } else {
            setHasMore(false);
          }
          setLoading(false);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, page, itemsPerPage, displayedItems.length, loading, hasMore]);

  return { displayedItems, loading, hasMore };
}
