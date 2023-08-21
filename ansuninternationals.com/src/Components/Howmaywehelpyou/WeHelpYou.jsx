import "./WeHelpYou.css";

const WeHelpYou = () => {
  return (
    <>
      <section className="help-you">
        <div className="help-head">
          <div className="c-f">
            <div className="c-s">
              <div className="c-t"><p>How May We Help You!</p></div>
            </div>
          </div>
        </div>
        <div className="name-email">
          <input type="text" placeholder="Name*" required="Name is Required" />
          <input type="text" placeholder="email" required="Enter your email" />
        </div>
        <div className="name-email">
          <input type="text" placeholder="Subject*" required="Name is Required" />
          <input type="text" placeholder="email" required="Enter your email" />
        </div>
        <div className="b-part dropdown">
          <button
            className="c-btns btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="text-input"><textarea name="text" id="help-you-text" cols="100" rows="10" placeholder="Enter Your Queary!!"></textarea></div>
        <div className="btton"><button className="btn btn-primary">Submit</button></div>
      </section>
    </>
  );
};

export default WeHelpYou;
