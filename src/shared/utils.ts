type QueryProps = {
  char1?: string;
  char2?: string;
};

export const createQueryString = ({ char1, char2 }: QueryProps): string => {
  const params = new URLSearchParams();

  if (char1) {
    params.set('char1', String(char1));
  }
  if (char2) {
    params.set('char2', String(char2));
  }

  return params.toString();
};
