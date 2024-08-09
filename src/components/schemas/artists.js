// Tạo nghệ sĩ
/**
 * @swagger
 * /api/artists/create:
 *   post:
 *     summary: Create a new artist
 *     tags: [Artist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The artist's name
 *               bio:
 *                 type: string
 *                 description: The artist's biography
 *               website:
 *                 type: string
 *                 description: The artist's website
 *               profileImage:
 *                 type: string
 *                 description: URL of the artist's profile image
 *             example:
 *               name: "New Artist Name"
 *               bio: "New biography"
 *               website: "http://newwebsite.com"
 *               profileImage: "http://example.com/profile.jpg"
 *     responses:
 *       201:
 *         description: Artist created successfully
 *       400:
 *         description: Bad request
 */

// Lấy tất cả nghệ sĩ
/**
 * @swagger
 * /api/artists:
 *   get:
 *     summary: Get all artists
 *     tags: [Artist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all artists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The artist's unique identifier
 *                   name:
 *                     type: string
 *                     description: The artist's name
 *                   bio:
 *                     type: string
 *                     description: The artist's biography
 *                   website:
 *                     type: string
 *                     description: The artist's website
 *                   profileImage:
 *                     type: string
 *                     description: URL of the artist's profile image
 *       401:
 *         description: Unauthorized - No token provided
 *       403:
 *         description: Forbidden - Invalid token
 *       500:
 *         description: Internal server error
 */

// Lấy nghệ sĩ theo ID
/**
 * @swagger
 * /api/artists/{id}:
 *   get:
 *     summary: Get an artist by ID
 *     tags: [Artist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Artist ID
 *     responses:
 *       200:
 *         description: Artist found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The artist's unique identifier
 *                 name:
 *                   type: string
 *                   description: The artist's name
 *                 bio:
 *                   type: string
 *                   description: The artist's biography
 *                 website:
 *                   type: string
 *                   description: The artist's website
 *                 profileImage:
 *                   type: string
 *                   description: URL of the artist's profile image
 *       404:
 *         description: Artist not found
 */

// Cập nhật nghệ sĩ
/**
 * @swagger
 * /api/artists/{id}:
 *   patch:
 *     summary: Update an artist
 *     tags: [Artist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Artist ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The artist's name
 *               bio:
 *                 type: string
 *                 description: The artist's biography
 *               website:
 *                 type: string
 *                 description: The artist's website
 *               profileImage:
 *                 type: string
 *                 description: URL of the artist's profile image
 *             example:
 *               name: "Updated Artist Name"
 *               bio: "Updated biography"
 *               website: "http://updatedwebsite.com"
 *               profileImage: "http://example.com/updated_profile.jpg"
 *     responses:
 *       200:
 *         description: Artist updated successfully
 *       404:
 *         description: Artist not found
 */

// Xóa nghệ sĩ
/**
 * @swagger
 * /api/artists/{id}:
 *   delete:
 *     summary: Delete an artist
 *     tags: [Artist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Artist ID
 *     responses:
 *       200:
 *         description: Artist deleted successfully
 *       404:
 *         description: Artist not found
 */
