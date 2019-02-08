'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_category_options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      field_type: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_category_options');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRlLzIwMTkwMjA3MjEzNDMzLWNyZWF0ZS1wcm9kdWN0LWNhdGVnb3J5LW9wdGlvbnMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJjcmVhdGVUYWJsZSIsImlkIiwiYWxsb3dOdWxsIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImZpZWxkX3R5cGUiLCJTVFJJTkciLCJsYWJlbCIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiZHJvcFRhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEVBQUUsRUFBRSxDQUFDQyxjQUFELEVBQWlCQyxTQUFqQixLQUErQjtBQUNqQyxXQUFPRCxjQUFjLENBQUNFLFdBQWYsQ0FBMkIsMEJBQTNCLEVBQXVEO0FBQzVEQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFRkMsUUFBQUEsYUFBYSxFQUFFLElBRmI7QUFHRkMsUUFBQUEsVUFBVSxFQUFFLElBSFY7QUFJRkMsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPO0FBSmQsT0FEd0Q7QUFPNURDLE1BQUFBLFVBQVUsRUFBRTtBQUNWRixRQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFETixPQVBnRDtBQVU1REMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xKLFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQURYLE9BVnFEO0FBYTVERSxNQUFBQSxTQUFTLEVBQUU7QUFDVFIsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZO0FBRlAsT0FiaUQ7QUFpQjVEQyxNQUFBQSxTQUFTLEVBQUU7QUFDVFYsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZO0FBRlA7QUFqQmlELEtBQXZELENBQVA7QUFzQkQsR0F4QmM7QUF5QmZFLEVBQUFBLElBQUksRUFBRSxDQUFDZixjQUFELEVBQWlCQyxTQUFqQixLQUErQjtBQUNuQyxXQUFPRCxjQUFjLENBQUNnQixTQUFmLENBQXlCLDBCQUF6QixDQUFQO0FBQ0Q7QUEzQmMsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXA6IChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdwcm9kdWN0X2NhdGVnb3J5X29wdGlvbnMnLCB7XG4gICAgICBpZDoge1xuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgICAgfSxcbiAgICAgIGZpZWxkX3R5cGU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH0sXG4gICAgICB1cGRhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICByZXR1cm4gcXVlcnlJbnRlcmZhY2UuZHJvcFRhYmxlKCdwcm9kdWN0X2NhdGVnb3J5X29wdGlvbnMnKTtcbiAgfVxufTsiXX0=