import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Hardcoded orders data
  const orders = [
    {
      _id: '1',
      createdAt: '2024-02-15',
      totalPrice: 565.00,
      isPaid: true,
      paidAt: '2024-02-15',
      isDelivered: false,
      orderItems: [
        {
          name: 'Gradient Graphic T-shirt',
          qty: 2,
          image: 'https://example.com/gradient-tshirt.jpg',
          price: 145,
          size: 'Large',
          color: 'Blue'
        },
        {
          name: 'Skinny Fit Jeans',
          qty: 1,
          image: 'https://example.com/skinny-jeans.jpg',
          price: 275,
          size: 'Medium',
          color: 'Dark Blue'
        }
      ],
      shippingAddress: {
        address: '123 Main St',
        city: 'New York',
        postalCode: '10001',
        country: 'USA'
      }
    },
    {
      _id: '2',
      createdAt: '2024-02-10',
      totalPrice: 420.00,
      isPaid: true,
      paidAt: '2024-02-10',
      isDelivered: true,
      deliveredAt: '2024-02-12',
      orderItems: [
        {
          name: 'Checkered Shirt',
          qty: 1,
          image: 'https://example.com/checkered-shirt.jpg',
          price: 180,
          size: 'Large',
          color: 'Red'
        },
        {
          name: 'Loose Fit Bermuda Shorts',
          qty: 2,
          image: 'https://example.com/bermuda-shorts.jpg',
          price: 120,
          size: 'Large',
          color: 'Beige'
        }
      ],
      shippingAddress: {
        address: '456 Park Ave',
        city: 'New York',
        postalCode: '10002',
        country: 'USA'
      }
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1>My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="shop-now-btn">Shop Now</Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order._id}</h3>
                    <p className="order-date">Placed on {formatDate(order.createdAt)}</p>
                  </div>
                  <div className="order-status">
                    <span className={`status-badge ${order.isDelivered ? 'delivered' : 'pending'}`}>
                      {order.isDelivered ? 'Delivered' : 'In Transit'}
                    </span>
                  </div>
                </div>

                <div className="order-items">
                  {order.orderItems.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Size: {item.size} | Color: {item.color}</p>
                        <p>Quantity: {item.qty}</p>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="shipping-info">
                    <h4>Shipping Address</h4>
                    <p>{order.shippingAddress.address}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                  <div className="order-summary">
                    <div className="total-amount">
                      <span>Total Amount:</span>
                      <span>${order.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="track-order-btn">Track Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders; 