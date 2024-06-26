type Response<T ='unknown'> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export default Response;
