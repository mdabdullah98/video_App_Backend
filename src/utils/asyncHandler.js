const asyncHandler = (cb) => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (error) {
    console.log("error in asyncHanler function", error);
    throw error;
  }
};

export default asyncHandler;
