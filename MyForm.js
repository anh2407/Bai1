import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    courseInfo: {
      course1: false,
      course2: false,
      course3: false,
      // Thêm các khóa học khác nếu cần
    },
    fullName: '',
    selectedCourse: '',
    note: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? { ...prevState[name], [value]: checked } : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý dữ liệu ở đây, ví dụ gửi dữ liệu đi
    console.log("Thông tin khóa học:", formData.courseInfo);
    console.log("Họ và tên:", formData.fullName);
    console.log("Khóa học được chọn:", formData.selectedCourse);
    console.log("Ghi chú:", formData.note);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Thông tin khóa học:
          <input
            type="checkbox"
            name="courseInfo"
            value="course1"
            checked={formData.courseInfo.course1}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Họ và tên:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Lựa chọn khóa học:
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleChange}>
            <option value="">-- Chọn khóa học --</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            {/* Thêm các option khác nếu cần */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Ghi chú:
          <textarea name="note" value={formData.note} onChange={handleChange} />
        </label>
      </div>
      <div>
        <button type="submit">Cập nhật</button>
      </div>
    </form>
  );
}

export default MyForm;