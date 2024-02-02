import asyncHandler from 'express-async-handler';

// @des     Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' })
});

// @des     Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User' })
});

// @des     Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
});

// @des     Get user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' })
});

// @des     Update user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile Updated' })
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};