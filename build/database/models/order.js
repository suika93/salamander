'use strict';

module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    reference: DataTypes.STRING,
    total_price: DataTypes.INTEGER
  }, {});

  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsTo(models.payment_method);
    order.belongsTo(models.order_address, {
      as: 'shipping_address',
      foreignKey: 'shipping_address_id'
    });
    order.belongsTo(models.order_address, {
      as: 'billing_address',
      foreignKey: 'billing_address_id'
    });
    order.hasMany(models.order_items);
  };

  return order;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvb3JkZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIkRhdGFUeXBlcyIsIm9yZGVyIiwiZGVmaW5lIiwicmVmZXJlbmNlIiwiU1RSSU5HIiwidG90YWxfcHJpY2UiLCJJTlRFR0VSIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiYmVsb25nc1RvIiwidXNlciIsInBheW1lbnRfbWV0aG9kIiwib3JkZXJfYWRkcmVzcyIsImFzIiwiZm9yZWlnbktleSIsImhhc01hbnkiLCJvcmRlcl9pdGVtcyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDQyxTQUFELEVBQVlDLFNBQVosS0FBMEI7QUFDekMsUUFBTUMsS0FBSyxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FBaUIsT0FBakIsRUFBMEI7QUFDdENDLElBQUFBLFNBQVMsRUFBRUgsU0FBUyxDQUFDSSxNQURpQjtBQUV0Q0MsSUFBQUEsV0FBVyxFQUFFTCxTQUFTLENBQUNNO0FBRmUsR0FBMUIsRUFHWCxFQUhXLENBQWQ7O0FBSUFMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pDUCxJQUFBQSxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JELE1BQU0sQ0FBQ0UsSUFBdkI7QUFDQVQsSUFBQUEsS0FBSyxDQUFDUSxTQUFOLENBQWdCRCxNQUFNLENBQUNHLGNBQXZCO0FBQ0FWLElBQUFBLEtBQUssQ0FBQ1EsU0FBTixDQUFnQkQsTUFBTSxDQUFDSSxhQUF2QixFQUFzQztBQUFFQyxNQUFBQSxFQUFFLEVBQUUsa0JBQU47QUFBMEJDLE1BQUFBLFVBQVUsRUFBRTtBQUF0QyxLQUF0QztBQUNBYixJQUFBQSxLQUFLLENBQUNRLFNBQU4sQ0FBZ0JELE1BQU0sQ0FBQ0ksYUFBdkIsRUFBc0M7QUFBRUMsTUFBQUEsRUFBRSxFQUFFLGlCQUFOO0FBQXlCQyxNQUFBQSxVQUFVLEVBQUU7QUFBckMsS0FBdEM7QUFDQWIsSUFBQUEsS0FBSyxDQUFDYyxPQUFOLENBQWNQLE1BQU0sQ0FBQ1EsV0FBckI7QUFDRCxHQU5EOztBQVFBLFNBQU9mLEtBQVA7QUFFRCxDQWZEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBzZXF1ZWxpemUuZGVmaW5lKCdvcmRlcicsIHtcbiAgICByZWZlcmVuY2U6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgdG90YWxfcHJpY2U6IERhdGFUeXBlcy5JTlRFR0VSXG4gIH0sIHt9KTtcbiAgb3JkZXIuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgb3JkZXIuYmVsb25nc1RvKG1vZGVscy51c2VyKVxuICAgIG9yZGVyLmJlbG9uZ3NUbyhtb2RlbHMucGF5bWVudF9tZXRob2QpXG4gICAgb3JkZXIuYmVsb25nc1RvKG1vZGVscy5vcmRlcl9hZGRyZXNzLCB7IGFzOiAnc2hpcHBpbmdfYWRkcmVzcycsIGZvcmVpZ25LZXk6ICdzaGlwcGluZ19hZGRyZXNzX2lkJyB9KVxuICAgIG9yZGVyLmJlbG9uZ3NUbyhtb2RlbHMub3JkZXJfYWRkcmVzcywgeyBhczogJ2JpbGxpbmdfYWRkcmVzcycsIGZvcmVpZ25LZXk6ICdiaWxsaW5nX2FkZHJlc3NfaWQnIH0pXG4gICAgb3JkZXIuaGFzTWFueShtb2RlbHMub3JkZXJfaXRlbXMpXG4gIH07XG5cbiAgcmV0dXJuIG9yZGVyO1xuXG59OyJdfQ==