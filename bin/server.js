const app = require("../app");

const { PORT = 3000 } = process.env;

try {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
