const Notification = (props) => {
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1 className="heading">Notifications</h1>
    <div className="image-primary image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <p className="paragraph">Information Message</p>
    </div>

    <div className="image-success image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="paragraph">Success Message</p>
    </div>

    <div className="image-warning image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <p className="paragraph">Warning Message</p>
    </div>

    <div className="image-danger image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <p className="paragraph">Error Message</p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
