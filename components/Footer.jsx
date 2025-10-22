export default function Footer() {
  return (
    <footer className="mm-footer">
      <div className="container">
        {/* Newsletter */}
        <div className="mm-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className="row">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Columns */}
        <div className="mm-footer-cols">
          <div>
            <h4>metta muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Order & Shipping</li>
              <li>Payment & Pricing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social">
              <span>📷</span>
              <span>💼</span>
              <span>🐦</span>
            </div>
          </div>
        </div>

        <div className="mm-footer-bottom">
          © 2025 metta muse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
