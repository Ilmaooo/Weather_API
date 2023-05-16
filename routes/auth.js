const express = require("express");
const { register, getMe } = require("../controllers/auth");
const { login } = require("../controllers/auth");

const router = express.Router();
const { protect } = require("../middleware/auth");

<<<<<<< HEAD
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the registration was successful.
 *                 token:
 *                   type: string
 *                   description: The authentication token.
 *       400:
 *         description: Bad Request - Invalid or missing required parameters.
 *       500:
 *         description: Internal Server Error - Error occurred while registering the user.
 */
router.post("/register", register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns an access token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the login was successful.
 *                 token:
 *                   type: string
 *                   description: The authentication token.
 *       400:
 *         description: Bad Request - Invalid or missing required parameters.
 *       401:
 *         description: Unauthorized - Invalid credentials.
 *       500:
 *         description: Internal Server Error - Error occurred while logging in.
 */
router.post("/login", login);

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get current logged-in user
 *     description: Retrieves the details of the currently logged-in user.
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *
 *       401:
 *         description: Unauthorized - Access token is missing or invalid.
 *       500:
 *         description: Internal Server Error - Error occurred while retrieving user information.
 */
=======
router.post("/register", register);
router.post("/login", login);
>>>>>>> origin/authentication
router.get("/me", protect, getMe);

module.exports = router;
