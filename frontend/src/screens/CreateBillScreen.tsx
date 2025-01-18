import React, { useState } from 'react';
import axios from 'axios';

function CreateBillScreen() {
  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleCreate = async () => {
    const response = await axios.post('http://127.0.0.1:5000/api/create-bill', {
      total,
      people,
    });
    setQrCode(response.data.qr_code_url);
  };

  return (
    <div>
      <h1>Create a Bill</h1>
      <input
        type="number"
        placeholder="Total Amount"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of People"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      <button onClick={handleCreate}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}

export default CreateBillScreen;