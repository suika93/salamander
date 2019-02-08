'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.INTEGER
      },
      product_cover: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('order_items');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRlLzIwMTkwMjA3MjEzOTM4LWNyZWF0ZS1vcmRlci1pdGVtcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsImNyZWF0ZVRhYmxlIiwiaWQiLCJhbGxvd051bGwiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsInR5cGUiLCJJTlRFR0VSIiwicHJvZHVjdF9uYW1lIiwiU1RSSU5HIiwicHJvZHVjdF9kZXNjcmlwdGlvbiIsInByb2R1Y3RfcHJpY2UiLCJwcm9kdWN0X2NvdmVyIiwicXVhbnRpdHkiLCJjcmVhdGVkQXQiLCJEQVRFIiwidXBkYXRlZEF0IiwiZG93biIsImRyb3BUYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsQ0FBQ0MsY0FBRCxFQUFpQkMsU0FBakIsS0FBK0I7QUFDakMsV0FBT0QsY0FBYyxDQUFDRSxXQUFmLENBQTJCLGFBQTNCLEVBQTBDO0FBQy9DQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFRkMsUUFBQUEsYUFBYSxFQUFFLElBRmI7QUFHRkMsUUFBQUEsVUFBVSxFQUFFLElBSFY7QUFJRkMsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPO0FBSmQsT0FEMkM7QUFPL0NDLE1BQUFBLFlBQVksRUFBRTtBQUNaRixRQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFESixPQVBpQztBQVUvQ0MsTUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJKLFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQURHLE9BVjBCO0FBYS9DRSxNQUFBQSxhQUFhLEVBQUU7QUFDYkwsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPO0FBREgsT0FiZ0M7QUFnQi9DSyxNQUFBQSxhQUFhLEVBQUU7QUFDYk4sUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBREgsT0FoQmdDO0FBbUIvQ0ksTUFBQUEsUUFBUSxFQUFFO0FBQ1JQLFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQURSLE9BbkJxQztBQXNCL0NPLE1BQUFBLFNBQVMsRUFBRTtBQUNUWCxRQUFBQSxTQUFTLEVBQUUsS0FERjtBQUVURyxRQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ2U7QUFGUCxPQXRCb0M7QUEwQi9DQyxNQUFBQSxTQUFTLEVBQUU7QUFDVGIsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNlO0FBRlA7QUExQm9DLEtBQTFDLENBQVA7QUErQkQsR0FqQ2M7QUFrQ2ZFLEVBQUFBLElBQUksRUFBRSxDQUFDbEIsY0FBRCxFQUFpQkMsU0FBakIsS0FBK0I7QUFDbkMsV0FBT0QsY0FBYyxDQUFDbUIsU0FBZixDQUF5QixhQUF6QixDQUFQO0FBQ0Q7QUFwQ2MsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXA6IChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdvcmRlcl9pdGVtcycsIHtcbiAgICAgIGlkOiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgcHJvZHVjdF9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0X3ByaWNlOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgcHJvZHVjdF9jb3Zlcjoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH0sXG4gICAgICB1cGRhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICByZXR1cm4gcXVlcnlJbnRlcmZhY2UuZHJvcFRhYmxlKCdvcmRlcl9pdGVtcycpO1xuICB9XG59OyJdfQ==