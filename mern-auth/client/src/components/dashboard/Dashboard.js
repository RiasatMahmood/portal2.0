import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Welcome,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You have been successfully logged in to the{" "}
                <span style={{ fontFamily: "monospace" }}>Portal</span>
              </p>
            </h4>
            <div id="dashbuttons">
               <Link
                 to="/compvision"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
                 Compvision
               </Link>
               <Link
                 to="/portfolio"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
                 1st website
               </Link>
               <Link
                 to="/cyberpet"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
                 Cyberpet
               </Link>
               <button
                 onClick={this.onLogoutClick}
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
                 Logout
               </button>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
