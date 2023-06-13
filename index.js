const Notification = (props) => {
  //  Write your code here.
  const { className, paragraphText } = props;
  return <p className={`p ${className}`}>{paragraphText}</p>;
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
      <Notification className="paragraph" paragraphText="Information Message" />
    </div>

    <div className="image-success image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification className="paragraph" paragraphText="Success Message" />
    </div>

    <div className="image-warning image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification className="paragraph" paragraphText="Warning Message" />
    </div>

    <div className="image-danger image-description">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification className="paragraph" paragraphText="Error Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
