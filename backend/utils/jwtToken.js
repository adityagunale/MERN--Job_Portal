


// export const sendToken = (user, statusCode, res, message) => {
  
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };






export const sendToken = (user, statusCode, res, message) => {
  try {
    // Generate JWT Token
    const token = user.getJWTToken();

    // Convert COOKIE_EXPIRE to a number and validate
    const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE, 10);
    if (isNaN(cookieExpireDays) || cookieExpireDays <= 0) {
      throw new Error('Invalid COOKIE_EXPIRE value. It should be a positive number.');
    }

    // Cookie options
    const options = {
      expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000), // Days to milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict', // Mitigate CSRF attacks
    };

    // Send response
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  } catch (error) {
    console.error('Token generation failed:', error.message); // Log error
    res.status(500).json({
      success: false,
      message: "Token generation failed",
      error: error.message,
    });
  }
};

