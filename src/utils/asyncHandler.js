//high oderd function

const asyncHandler = (requestHandler) => {
  (error, req, res, next) => {
    Promise.resolve(requestHandler(error, req, res, next)).catch((err) =>
      next(err)
    );
  };
};

export { asyncHandler };
//fn in function
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => {
//   async (req, res, next) => {
//     try {
//       await (req, res, next);
//     } catch (error) {
//       res.status(err.code || 500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// };
