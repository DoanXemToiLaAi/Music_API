// Tạo đơn hàng
/**
 * @swagger
 * /api/order/create:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: The user ID
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productType:
 *                       type: string
 *                       enum: ["Song", "Album"]
 *                       description: The type of product
 *                     product:
 *                       type: string
 *                       description: The product ID
 *             example:
 *               user: "user_id"
 *               items:
 *                 - productType: "Song"
 *                   product: "song_id"
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 */

// Lấy tất cả đơn hàng
/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The order's unique identifier
 *                   user:
 *                     type: string
 *                     description: The user ID
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productType:
 *                           type: string
 *                           enum: ["Song", "Album"]
 *                           description: The type of product
 *                         product:
 *                           type: string
 *                           description: The product ID
 *       401:
 *         description: Unauthorized - No token provided
 *       403:
 *         description: Forbidden - Invalid token
 *       500:
 *         description: Internal server error
 */

// Lấy đơn hàng theo ID
/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The order's unique identifier
 *                 user:
 *                   type: string
 *                   description: The user ID
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productType:
 *                         type: string
 *                         enum: ["Song", "Album"]
 *                         description: The type of product
 *                       product:
 *                         type: string
 *                         description: The product ID
 *       404:
 *         description: Order not found
 */

// Cập nhật đơn hàng
/**
 * @swagger
 * /api/order/{id}:
 *   patch:
 *     summary: Update an order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: The user ID
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productType:
 *                       type: string
 *                       enum: ["Song", "Album"]
 *                       description: The type of product
 *                     product:
 *                       type: string
 *                       description: The product ID
 *             example:
 *               user: "updated_user_id"
 *               items:
 *                 - productType: "Album"
 *                   product: "updated_album_id"
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */

// Xóa đơn hàng
/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
