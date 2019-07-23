const getErrorInitialData = async ({ statusCode }) => {
  console.log('statusCode', statusCode);
  return {
    pageData: {},
    status: statusCode,
  };
};

export default getErrorInitialData;
