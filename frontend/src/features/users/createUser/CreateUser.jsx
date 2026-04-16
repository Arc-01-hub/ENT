import { HiOutlineUserAdd } from "react-icons/hi";
import "./CreateUser.css";
import { useState } from "react";

const CreateUser = ({ onClose }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "student"
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("Adding user:", newUser);
    setNewUser({ name: "", email: "", role: "student" });
    onClose?.();
  };

  const handleCancel = () => {
    setNewUser({ name: "", email: "", role: "student" });
    onClose?.();
  };

  return (
    <div className="create-user">
      <h3 className="form-title"><HiOutlineUserAdd /> Add New User</h3>
      <form onSubmit={handleAddUser} className="create-user-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Add User</button>
          <button type="button" className="btn btn-ghost" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;