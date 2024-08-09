const mongoose = require("mongoose");
require("dotenv").config();

const Artist = require("../models/artists");
const Album = require("../models/album");
const Song = require("../models/song");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const mongoUrl = process.env.MONGOURL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Connected to MongoDB");

  try {
    // Tạo nghệ sĩ, album và bài hát như trước
    let RyanCaraveo = await Artist.findOne({ name: "Ryan Caraveo" });
    if (!RyanCaraveo) {
      RyanCaraveo = new Artist({
        name: "Ryan Caraveo",
        bio: "Ryan Caraveo là một nghệ sĩ hip-hop/rap đến từ Seattle, Washington.",
        website: "https://RyanCaraveo.com",
      });
      await RyanCaraveo.save();
    }

    let ButterFlyBoy = await Album.findOne({
      name: "Butterfly Boy",
      artist: RyanCaraveo._id,
    });
    if (!ButterFlyBoy) {
      ButterFlyBoy = new Album({
        name: "Butterfly Boy",
        artist: RyanCaraveo._id,
        releaseDate: new Date("2019-08-23"),
      });
      await ButterFlyBoy.save();
    }

    const songsData = [
      { title: "∞", duration: 39, price: 1.01 },
      { title: "Run", duration: 171, price: 2.22 },
      { title: "Sick", duration: 163, price: 2.21 },
      { title: "Bills", duration: 170, price: 2.19 },
      { title: "Thrivin", duration: 171, price: 2.29 },
      { title: "Battery", duration: 22, price: 1.29 },
      { title: "Peanut Butter Waffles", duration: 193, price: 3.29 },
      { title: "Go Time", duration: 190, price: 1.2 },
      { title: "Deceived", duration: 150, price: 1.9 },
      { title: "Murda", duration: 148, price: 1.3 },
      { title: "My Head Gets Loud", duration: 180, price: 1.4 },
      { title: "All My Life", duration: 233, price: 1.5 },
    ];
    for (const songData of songsData) {
      let song = await Song.findOne({
        title: songData.title,
        artist: RyanCaraveo._id,
      });
      if (!song) {
        song = new Song({
          ...songData,
          artist: RyanCaraveo._id,
          album: ButterFlyBoy._id,
          genre: "Hip-Hop/Rap",
        });
        await song.save();
        ButterFlyBoy.songs.push(song._id);
        RyanCaraveo.songs.push(song._id);
      }
    }
    await ButterFlyBoy.save();
    await RyanCaraveo.save();

    // Tạo người dùng mặc định
    const usersData = [
      {
        username: "Admin",
        password: "123456789",
        phone: "0909369462",
        email: "sonvip1998@gmail.com",
        role: 1,
      },
      {
        username: "BetaUser",
        password: "123456780",
        phone: "0936946209",
        email: "hiimkat7@gmail.com",
        role: 21,
      },
    ];

    for (const userData of usersData) {
      let user = await User.findOne({ email: userData.email });
      if (!user) {
        const hashedPassword = await bcrypt.hash(userData.password, 2);
        user = new User({
          ...userData,
          password: hashedPassword,
        });
        await user.save();
      }
    }
  } catch (error) {
    console.error("Error setting up database:", error);
  }
});

module.exports = db;
