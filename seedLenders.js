import mongoose from "mongoose";
import Lenders from "./src/models/lenderModel.js";

const lendersData = [
  {
    lender: "Prodigy Finance",
    logo: "https://a.storyblok.com/f/268942/635x175/7c7ecc1970/prodigy-finance-logo.svg",
    apr: 5.54,
    term: 10,
    bookmarked: false,
  },
  {
    lender: "8B Finance",
    logo: "https://images.squarespace-cdn.com/content/638a2017966f25019247b9e9/1670017734782-O44JRAR7DNHLO8IWKUBH/8bLogo.jpg?content-type=image%2Fjpeg",
    apr: 6.25,
    term: 15,
    bookmarked: false,
  },
  {
    lender: "ASLA",
    logo: "https://www.asla.org/images/ASLA_Footer_Logo.png",
    apr: 7.83,
    term: 20,
    bookmarked: false,
  },
  {
    lender: "MPOWER",
    logo: "https://pbs.twimg.com/profile_images/1673644613326839812/q0cqsskx_400x400.jpg",
    apr: 9.91,
    term: 7,
    bookmarked: false,
  },
  {
    lender: "BRAZOS",
    logo: "https://thecollegeinvestor.com/wp-content/uploads/2018/08/BRazos-Logo.png",
    apr: 7.73,
    term: 12,
    bookmarked: false,
  },
  {
    lender: "EDLY",
    logo: "https://student.edly.co/_next/static/media/logo-blue.ae32d9e9.svg",
    apr: 5.16,
    term: 5,
    bookmarked: false,
  },
  {
    lender: "EdvestinU",
    logo: "https://edvestinu.com/wp-content/uploads/sites/2/2023/05/Edvest_Logo.svg",
    apr: 9.23,
    term: 9,
    bookmarked: false,
  },
  {
    lender: "Funding U",
    logo: "https://blog.fu.loans/wp-content/uploads/2022/12/FU-Logo-Vertical-Lockup.png",
    apr: 6.66,
    term: 10,
    bookmarked: false,
  },
  {
    lender: "INvestED",
    logo: "https://media.investedindiana.org/2022/media/20220913102413/logo-invested-indiana.png",
    apr: 7.43,
    term: 7,
    bookmarked: false,
  },
  {
    lender: "ISL",
    logo: "https://www.iowastudentloan.org/images/logo.svg",
    apr: 6.16,
    term: 6,
    bookmarked: false,
  },
  {
    lender: "SoFi",
    logo: "https://1000logos.net/wp-content/uploads/2024/02/Sofi-logo.png",
    apr: 10,
    term: 5,
    bookmarked: false,
  },
  {
    lender: "Earnest",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH4yf_KPUneFg/company-logo_200_200/company-logo_200_200/0/1630510481514/earnest_llc_logo?e=2147483647&v=beta&t=tFTBoGL3ZE1b1tZxdQ2DS8saswIyBbMVc6sYCBn1k4U",
    apr: 7.8,
    term: 6,
    bookmarked: false,
  },
  {
    lender: "College Ave",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCQiYYTHfTG_BGfjKKqhv5_D4Fx8jFexa4g&s",
    apr: 7.5,
    term: 15,
    bookmarked: false,
  },
  {
    lender: "Ascent",
    logo: "https://s3.money.com/prd/image/image/2986/medium_b13677f6-e5f9-4b14-993a-2c2daa34f200.png",
    apr: 7,
    term: 20,
    bookmarked: false,
  },
  {
    lender: "LendKey",
    logo: "https://www.lendkey.com/wp-content/uploads/2018/08/cropped-LK512.png",
    apr: 8.88,
    term: 5,
    bookmarked: false,
  },
];

const seedLenders = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sudhm01:test123@cluster0.hmjjg48.mongodb.net/?retryWrites=true&w=majority"
    );

    await Lenders.deleteMany();
    await Lenders.insertMany(lendersData);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding lender data:", error);
    mongoose.connection.close();
  }
};

seedLenders();
