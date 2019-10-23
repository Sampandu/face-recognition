import React from 'react';

const Rank = ({ user }) => {
  return (
    <div>
      {Object.keys(user).length === 0 ? (
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
