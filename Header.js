import React from 'react';

function UserInfo(props) {
  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Tên: {props.name}</p>
      <p>Tuổi: {props.age}</p>
    </div>
  );
}

export default UserInfo;