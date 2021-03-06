'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    display_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    product_category_id: DataTypes.INTEGER
  }, {});

  product.associate = function (models) {
    product.hasMany(models.product_image);
    product.belongsTo(models.product_category);
  };

  return product;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwicHJvZHVjdCIsImRlZmluZSIsImRpc3BsYXlfbmFtZSIsIlNUUklORyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJJTlRFR0VSIiwicHJvZHVjdF9jYXRlZ29yeV9pZCIsImFzc29jaWF0ZSIsIm1vZGVscyIsImhhc01hbnkiLCJwcm9kdWN0X2ltYWdlIiwiYmVsb25nc1RvIiwicHJvZHVjdF9jYXRlZ29yeSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDQyxTQUFELEVBQVlDLFNBQVosS0FBMEI7QUFDekMsUUFBTUMsT0FBTyxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FBaUIsU0FBakIsRUFBNEI7QUFDMUNDLElBQUFBLFlBQVksRUFBRUgsU0FBUyxDQUFDSSxNQURrQjtBQUUxQ0MsSUFBQUEsV0FBVyxFQUFFTCxTQUFTLENBQUNJLE1BRm1CO0FBRzFDRSxJQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ08sT0FIeUI7QUFJMUNDLElBQUFBLG1CQUFtQixFQUFFUixTQUFTLENBQUNPO0FBSlcsR0FBNUIsRUFLYixFQUxhLENBQWhCOztBQU1BTixFQUFBQSxPQUFPLENBQUNRLFNBQVIsR0FBb0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNuQ1QsSUFBQUEsT0FBTyxDQUFDVSxPQUFSLENBQWdCRCxNQUFNLENBQUNFLGFBQXZCO0FBQ0FYLElBQUFBLE9BQU8sQ0FBQ1ksU0FBUixDQUFrQkgsTUFBTSxDQUFDSSxnQkFBekI7QUFDRCxHQUhEOztBQUlBLFNBQU9iLE9BQVA7QUFDRCxDQVpEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgcHJvZHVjdCA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3Byb2R1Y3QnLCB7XG4gICAgZGlzcGxheV9uYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGRlc2NyaXB0aW9uOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHByaWNlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBwcm9kdWN0X2NhdGVnb3J5X2lkOiBEYXRhVHlwZXMuSU5URUdFUlxuICB9LCB7fSk7XG4gIHByb2R1Y3QuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgcHJvZHVjdC5oYXNNYW55KG1vZGVscy5wcm9kdWN0X2ltYWdlKVxuICAgIHByb2R1Y3QuYmVsb25nc1RvKG1vZGVscy5wcm9kdWN0X2NhdGVnb3J5KVxuICB9O1xuICByZXR1cm4gcHJvZHVjdDtcbn07Il19