"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("./controllers");

var _application = require("./application");

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
  const context = {
    request: req,
    createProduct: _application.CreateProduct
  };

  const response = _controllers.productsController.create(context);

  res.send(response);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwic2VuZCIsInBvc3QiLCJjb250ZXh0IiwicmVxdWVzdCIsImNyZWF0ZVByb2R1Y3QiLCJDcmVhdGVQcm9kdWN0IiwicHJvZHVjdHNDb250cm9sbGVyIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWY7OztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzFCLFFBQU1DLFFBQVEsR0FBRztBQUFFLFlBQVM7QUFBWCxHQUFqQjtBQUNBRCxFQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBU0QsUUFBVDtBQUNILENBSEQ7QUFLQU4sTUFBTSxDQUFDUSxJQUFQLENBQVksV0FBWixFQUF5QixDQUFDSixHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNyQyxRQUFNSSxPQUFPLEdBQUc7QUFDZEMsSUFBQUEsT0FBTyxFQUFFTixHQURLO0FBRWRPLElBQUFBLGFBQWEsRUFBRUM7QUFGRCxHQUFoQjs7QUFLQSxRQUFNTixRQUFRLEdBQUdPLGdDQUFtQkMsTUFBbkIsQ0FBMEJMLE9BQTFCLENBQWpCOztBQUNBSixFQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBU0QsUUFBVDtBQUNELENBUkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBwcm9kdWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzJ1xyXG5pbXBvcnQgeyBDcmVhdGVQcm9kdWN0IH0gZnJvbSAnLi9hcHBsaWNhdGlvbidcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geyBcInllYWhcIiA6IFwiaXQgd29ya3NcIiB9XHJcbiAgICByZXMuc2VuZChyZXNwb25zZSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvcHJvZHVjdHMnLCAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgcmVxdWVzdDogcmVxLFxyXG4gICAgY3JlYXRlUHJvZHVjdDogQ3JlYXRlUHJvZHVjdFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBwcm9kdWN0c0NvbnRyb2xsZXIuY3JlYXRlKGNvbnRleHQpXHJcbiAgcmVzLnNlbmQocmVzcG9uc2UpXHJcbn0pXHJcblxyXG5leHBvcnQgeyByb3V0ZXIgYXMgUHJvZHVjdHNSb3V0ZXIgfSJdfQ==