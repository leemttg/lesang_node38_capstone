import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node38_captone_lesang", "root", "123456789", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Kết nối thành công");
} catch (error) {
  console.log("Kết nối thất bại");
}

export default sequelize;
