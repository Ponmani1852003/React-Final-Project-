function Profile() {
  return (
    <div className="page">
      <h1>👤 Customer Profile</h1>

      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Profile"
          className="profile-image"
        />

        <h2>Ponmani</h2>

        <p>
          Membership:
          <strong> Gold Member</strong>
        </p>

        <p>
          Reward Points:
          <strong> 1500</strong>
        </p>

        <p>
          Orders Completed:
          <strong> 45</strong>
        </p>

        <p>
          Favorite Food:
          <strong> Pizza</strong>
        </p>
      </div>
    </div>
  );
}

export default Profile;