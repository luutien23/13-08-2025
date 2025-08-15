
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleAdd = () => {
    if (name.trim() !== '') {
      setNameList([...nameList, name]);
      setName('');
    }
  };

  const handleDelete = (index) => {
    const newList = nameList.filter((_, i) => i !== index);
    setNameList(newList);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Quản lý danh sách tên</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {nameList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
