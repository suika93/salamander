"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("./controllers");

var _application = require("./application");

var _models = require("../../database/models");

var _infra = require("./infra.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.ProductsRouter = router;
router.get('/', (req, res) => {
  const response = {
    "yeah": "it works"
  };
  res.send(response);
});
router.post('/products', (req, res) => {
  const productRepository = new _infra.ProductRepository(_models.product);
  const context = {
    request: req,
    createProduct: new _application.CreateProduct(productRepository)
  };

  const response = _controllers.productsController.create(context);

  res.send(response);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwic2VuZCIsInBvc3QiLCJwcm9kdWN0UmVwb3NpdG9yeSIsIlByb2R1Y3RSZXBvc2l0b3J5IiwiUHJvZHVjdCIsImNvbnRleHQiLCJyZXF1ZXN0IiwiY3JlYXRlUHJvZHVjdCIsIkNyZWF0ZVByb2R1Y3QiLCJwcm9kdWN0c0NvbnRyb2xsZXIiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7O0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEdBQVgsRUFBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDMUIsUUFBTUMsUUFBUSxHQUFHO0FBQUUsWUFBUztBQUFYLEdBQWpCO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRCxRQUFUO0FBQ0gsQ0FIRDtBQUtBTixNQUFNLENBQUNRLElBQVAsQ0FBWSxXQUFaLEVBQXlCLENBQUNKLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBRXJDLFFBQU1JLGlCQUFpQixHQUFHLElBQUlDLHdCQUFKLENBQXNCQyxlQUF0QixDQUExQjtBQUVBLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxJQUFBQSxPQUFPLEVBQUVULEdBREs7QUFFZFUsSUFBQUEsYUFBYSxFQUFFLElBQUlDLDBCQUFKLENBQWtCTixpQkFBbEI7QUFGRCxHQUFoQjs7QUFLQSxRQUFNSCxRQUFRLEdBQUdVLGdDQUFtQkMsTUFBbkIsQ0FBMEJMLE9BQTFCLENBQWpCOztBQUNBUCxFQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBU0QsUUFBVDtBQUNELENBWEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBwcm9kdWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzJ1xyXG5pbXBvcnQgeyBDcmVhdGVQcm9kdWN0IH0gZnJvbSAnLi9hcHBsaWNhdGlvbidcclxuaW1wb3J0IHsgcHJvZHVjdCBhcyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvbW9kZWxzJ1xyXG5pbXBvcnQgeyBQcm9kdWN0UmVwb3NpdG9yeSB9IGZyb20gJy4vaW5mcmEuanMnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHsgXCJ5ZWFoXCIgOiBcIml0IHdvcmtzXCIgfVxyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UpXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnL3Byb2R1Y3RzJywgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RSZXBvc2l0b3J5ID0gbmV3IFByb2R1Y3RSZXBvc2l0b3J5KFByb2R1Y3QpXHJcblxyXG4gIGNvbnN0IGNvbnRleHQgPSB7XHJcbiAgICByZXF1ZXN0OiByZXEsXHJcbiAgICBjcmVhdGVQcm9kdWN0OiBuZXcgQ3JlYXRlUHJvZHVjdChwcm9kdWN0UmVwb3NpdG9yeSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gcHJvZHVjdHNDb250cm9sbGVyLmNyZWF0ZShjb250ZXh0KVxyXG4gIHJlcy5zZW5kKHJlc3BvbnNlKVxyXG59KVxyXG5cclxuZXhwb3J0IHsgcm91dGVyIGFzIFByb2R1Y3RzUm91dGVyIH0iXX0=