export interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }

  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
  }
  
  export interface Superhero {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      available: number;
      name: string;
    };
    series: {
      available: number;
    };
  }

  export interface SuperheroListProps {
    superheroes: Superhero[];
  }