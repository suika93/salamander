"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProduct = void 0;

var _domain = require("./domain");

const CreateProduct = class CreateProduct {
  constructor({
    ProductRepository
  }) {
    this.ProductRepository = ProductRepository;
  }

  async execute({
    display_name,
    description,
    price
  }) {
    const product = new _domain.Product(display_name, description, price);
    return await this.ProductRepository.add(product);
  }

};
exports.CreateProduct = CreateProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvYXBwbGljYXRpb24uanMiXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdCIsImNvbnN0cnVjdG9yIiwiUHJvZHVjdFJlcG9zaXRvcnkiLCJleGVjdXRlIiwiZGlzcGxheV9uYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInByb2R1Y3QiLCJQcm9kdWN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU1BLGFBQU4sQ0FBb0I7QUFDdENDLEVBQUFBLFdBQVcsQ0FBQztBQUFFQyxJQUFBQTtBQUFGLEdBQUQsRUFDWDtBQUNJLFNBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDSDs7QUFDRCxRQUFNQyxPQUFOLENBQWU7QUFBRUMsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUEsV0FBaEI7QUFBNkJDLElBQUFBO0FBQTdCLEdBQWYsRUFDQTtBQUNJLFVBQU1DLE9BQU8sR0FBRyxJQUFJQyxlQUFKLENBQWFKLFlBQWIsRUFBMkJDLFdBQTNCLEVBQXdDQyxLQUF4QyxDQUFoQjtBQUVBLFdBQU8sTUFBTSxLQUFLSixpQkFBTCxDQUF1Qk8sR0FBdkIsQ0FBMkJGLE9BQTNCLENBQWI7QUFDSDs7QUFWcUMsQ0FBMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9kb21haW4nXHJcblxyXG5jb25zdCBDcmVhdGVQcm9kdWN0ID0gY2xhc3MgQ3JlYXRlUHJvZHVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IFByb2R1Y3RSZXBvc2l0b3J5IH0pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0UmVwb3NpdG9yeSA9IFByb2R1Y3RSZXBvc2l0b3J5XHJcbiAgICB9XHJcbiAgICBhc3luYyBleGVjdXRlICh7IGRpc3BsYXlfbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlIH0pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KCBkaXNwbGF5X25hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuUHJvZHVjdFJlcG9zaXRvcnkuYWRkKHByb2R1Y3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENyZWF0ZVByb2R1Y3QgfSJdfQ==