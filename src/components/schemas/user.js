// Đăng ký người dùng
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *               phone:
 *                 type: string
 *                 description: The user's phone number
 *               avatar:
 *                 type: string
 *                 description: URL of the user's avatar
 *               privateid:
 *                 type: string
 *                 description: The artist's ID (if applicable)
 *             example:
 *               username: "your username"
 *               email: "your_email@gmail.com"
 *               password: "your password"
 *               phone: "1234567890"
 *               avatar: "http://example.com/avatar.jpg"
 *               privateid: "artist_id"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */

// Đăng nhập người dùng
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               username: "your username"
 *               password: "your password"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Login message
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       400:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 */

// Lấy toàn bộ người dùng
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user's ID
 *                   username:
 *                     type: string
 *                     description: The user's username
 *                   email:
 *                     type: string
 *                     description: The user's email
 *                   phone:
 *                     type: string
 *                     description: The user's phone number
 *                   avatar:
 *                     type: string
 *                     description: URL of the user's avatar
 *                   privateid:
 *                     type: string
 *                     description: The artist's ID (if applicable)
 *                 example:
 *                   _id: "user_id"
 *                   username: "example username"
 *                   email: "example_email@gmail.com"
 *                   phone: "1234567890"
 *                   avatar: "http://example.com/avatar.jpg"
 *                   privateid: "artist_id"
 *       500:
 *         description: Internal server error
 */

// Lấy người dùng chỉ định
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */

// Cập nhật người dùng
/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *             example:
 *               username: "new username"
 *               email: "new_email@gmail.com"
 *               phone: "0908076543"
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */

// Xóa người dùng
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
