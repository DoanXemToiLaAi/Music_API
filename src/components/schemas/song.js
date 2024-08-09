// Tạo bài hát
/**
 * @swagger
 * /api/songs/create:
 *   post:
 *     summary: Create a new song
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The song's title
 *               artistId:
 *                 type: string
 *                 description: The artist's ID (required if admin)
 *               albumId:
 *                 type: string
 *                 description: The song's album ID (leave empty for Solo Album)
 *               genre:
 *                 type: string
 *                 description: The song's genre
 *               duration:
 *                 type: number
 *                 description: The song's duration
 *               price:
 *                 type: number
 *                 description: The song's price
 *               coverImage:
 *                 type: string
 *                 description: URL of the song's cover image
 *               audioFile:
 *                 type: string
 *                 description: URL of the song's audio file (mp3 or mp4)
 *             example:
 *               title: "Default Song"
 *               artistId: "artist_id"
 *               albumId: "album_id"
 *               genre: "Pop"
 *               duration: 180
 *               price: 3
 *               coverImage: "http://example.com/cover.jpg"
 *               audioFile: "http://example.com/song.mp3"
 *     responses:
 *       201:
 *         description: Song created successfully
 *       400:
 *         description: Bad request
 */

// Lấy tất cả bài hát
/**
 * @swagger
 * /api/songs:
 *   get:
 *     summary: Get all songs
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all songs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The song's unique identifier
 *                   title:
 *                     type: string
 *                     description: The song's title
 *                   artist:
 *                     type: string
 *                     description: The song's artist ID
 *                   album:
 *                     type: string
 *                     description: The song's album ID
 *                   genre:
 *                     type: string
 *                     description: The song's genre
 *                   duration:
 *                     type: number
 *                     description: The song's duration
 *                   price:
 *                     type: number
 *                     description: The song's price
 *                   coverImage:
 *                     type: string
 *                     description: URL of the song's cover image
 *                   audioFile:
 *                     type: string
 *                     description: URL of the song's audio file
 *       401:
 *         description: Unauthorized, token is missing or invalid
 *       500:
 *         description: Internal server error
 */

// Lấy nhạc từ nghệ sĩ
/**
 * @swagger
 * /api/songs/artist/{artistId}:
 *   get:
 *     summary: Get songs by artist
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: artistId
 *         schema:
 *           type: string
 *         required: true
 *         description: Artist's ID
 *     responses:
 *       200:
 *         description: List of songs by the artist
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: The song's title
 *                   artist:
 *                     type: string
 *                     description: The song's artist
 *                   album:
 *                     type: string
 *                     description: The song's album
 *                   genre:
 *                     type: string
 *                     description: The song's genre
 *                   duration:
 *                     type: number
 *                     description: The song's duration
 *                   price:
 *                     type: number
 *                     description: The song's price
 *                   coverImage:
 *                     type: string
 *                     description: URL of the song's cover image
 *                   audioFile:
 *                     type: string
 *                     description: URL of the song's audio file
 *       404:
 *         description: Artist not found
 */

// Lấy bài hát theo ID
/**
 * @swagger
 * /api/songs/{id}:
 *   get:
 *     summary: Get a song by ID
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Song found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The song's unique identifier
 *                 title:
 *                   type: string
 *                   description: The song's title
 *                 artist:
 *                   type: string
 *                   description: The song's artist
 *                 album:
 *                   type: string
 *                   description: The song's album
 *                 genre:
 *                   type: string
 *                   description: The song's genre
 *                 duration:
 *                   type: number
 *                   description: The song's duration
 *                 price:
 *                   type: number
 *                   description: The song's price
 *                 coverImage:
 *                   type: string
 *                   description: URL of the song's cover image
 *                 audioFile:
 *                   type: string
 *                   description: URL of the song's audio file
 *       404:
 *         description: Song not found
 */

// Cập nhật bài hát
/**
 * @swagger
 * /api/songs/{id}:
 *   patch:
 *     summary: Update a song
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Song ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The song's title
 *               artist:
 *                 type: string
 *                 description: The song's artist
 *               album:
 *                 type: string
 *                 description: The song's album
 *               genre:
 *                 type: string
 *                 description: The song's genre
 *               duration:
 *                 type: number
 *                 description: The song's duration
 *               coverImage:
 *                 type: string
 *                 description: URL of the song's cover image
 *               audioFile:
 *                 type: string
 *                 description: URL of the song's audio file
 *             example:
 *               title: "Updated Song Title"
 *               artist: "updated_artist_id"
 *               album: "updated_album_id"
 *               genre: "Rock"
 *               duration: 200
 *     responses:
 *       200:
 *         description: Song updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Song not found
 */

// Xóa bài hát
/**
 * @swagger
 * /api/songs/{id}:
 *   delete:
 *     summary: Delete a song
 *     tags: [Song]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Song deleted successfully
 *       404:
 *         description: Song not found
 */
