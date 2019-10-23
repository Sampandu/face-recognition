import React from 'react';

const Rank = ({ user }) => {
  //if user doesn't signin, app will redirect visitor to the home page.
  return (
    <div>
      {user.id !== '' ? (
        <div>
          <div className="f3 white">
            {`${user.name}, your current rank is ...`}
          </div>
          <div className="f2 white">{`${user.submition}`}</div>
        </div>
      ) : (
        <div className="f3 white">Hi, welcome to monkey face recognition</div>
      )}
    </div>
  );
};

export default Rank;
