import { useState } from "react";
import { useRecoilState } from "recoil";
import {categoryState } from "../atoms";



function AddCat() {
  const [newCat, setNewCat] = useState("")
  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={newCat}
        onChange={(event) => setNewCat(event.target.value)}
        placeholder="새 카테고리"
      />
      <button>카테고리 추가</button>
    </div>
  );
}

export default AddCat;
