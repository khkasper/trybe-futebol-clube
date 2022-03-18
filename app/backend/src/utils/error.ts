const throwError = (name: string, defaultMessage = '') =>
  (message: string = defaultMessage): never => {
    const error = new Error(message);
    error.name = name;
    throw error;
  };

export default throwError;
