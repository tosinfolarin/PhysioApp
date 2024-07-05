const Profile = () => {
    return (
      <div className="profile-page">
        <div className="profile-header">
          <h1>"Name's Profile"</h1>
        </div>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-image">
              <img src="https://picsum.photos/200/200" alt="placeholder" />
            </div>
            <div className="profile-username">
              <span>Users Name</span>
            </div>
            <div className="profile-other-info">
            <span>Past Medical History</span>
            </div>
          </div>
          <div className="profile-main-content">
            <div className="user-diary">
              <span>User Diary</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;