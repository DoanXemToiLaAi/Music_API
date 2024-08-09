// Tạo album
/**
 * @swagger
 * /api/albums/create:
 *   post:
 *     summary: Create a new album
 *     tags: [Album]
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
 *                 description: The album's name
 *               artistId:
 *                 type: string
 *                 description: The artist's ID (required if admin)
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: The album's release date
 *               coverImage:
 *                 type: string
 *                 description: URL of the album's cover image
 *             example:
 *               name: "Album Name"
 *               artistId: "artist_id"
 *               releaseDate: "2023-01-01"
 *               coverImage: "http://example.com/album_cover.jpg"
 *     responses:
 *       201:
 *         description: Album created successfully
 *       400:
 *         description: Bad request
 */

// Lấy tất cả album
/**
 * @swagger
 * /api/albums:
 *   get:
 *     summary: Get all albums
 *     tags: [Album]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all albums
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The album's unique identifier
 *                   name:
 *                     type: string
 *                     description: The album's name
 *                   artist:
 *                     type: string
 *                     description: The album's artist ID
 *                   releaseDate:
 *                     type: string
 *                     format: date
 *                     description: The album's release date
 *                   coverImage:
 *                     type: string
 *                     description: URL of the album's cover image
 *                   songs:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of song IDs in the album
 *       401:
 *         description: Unauthorized - No token provided
 *       403:
 *         description: Forbidden - Invalid token
 *       500:
 *         description: Internal server error
 */

// Lấy album theo id
/**
 * @swagger
 * /api/albums/{id}:
 *   get:
 *     summary: Get albums by ID
 *     tags: [Album]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Album ID
 *     responses:
 *       200:
 *         description: Albums found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The album's name
 *                   artist:
 *                     type: string
 *                     description: The album's artist
 *                   releaseDate:
 *                     type: string
 *                     format: date
 *                     description: The album's release date
 *                   coverImage:
 *                     type: string
 *                     description: URL of the album's cover image
 *       404:
 *         description: Artist not found
 */

// Cập nhật album
/**
 * @swagger
 * /api/albums/{id}:
 *   patch:
 *     summary: Update an album
 *     tags: [Album]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Album ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The album's name
 *               artistId:
 *                 type: string
 *                 description: The artist's ID
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: The album's release date
 *               coverImage:
 *                 type: string
 *                 description: URL of the album's cover image
 *             example:
 *               name: "Updated Album Name"
 *               artistId: "updated_artist_id"
 *               releaseDate: "2023-01-01"
 *               coverImage: "http://example.com/updated_album_cover.jpg"
 *     responses:
 *       200:
 *         description: Album updated successfully
 *       404:
 *         description: Album not found
 */

// Xóa album
/**
 * @swagger
 * /api/albums/{id}:
 *   delete:
 *     summary: Delete an album
 *     tags: [Album]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Album ID
 *     responses:
 *       200:
 *         description: Album deleted successfully
 *       404:
 *         description: Album not found
 */
