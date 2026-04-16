import { LuDownload } from "react-icons/lu";
import "./Users.css";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import CreateUser from "./createUser/CreateUser";

const Users = () => {
  return (
    <div className="users">
        <div className="users_header">
            <h2>Users List</h2>
            <div className="users_actions">
                <button className="export_btn"><LuDownload />Export Excel</button>
                <button className="add_user_btn"><HiOutlineUserAdd />Add User</button>
            </div>
        </div>
        <div className="create-user-container">
            <CreateUser  />
        </div>
        <div className="users_search">
            <div className="search_input">
                <input type="text" placeholder="Search users..." />
            </div>
            <div className="search_filter">
                <div className="active"><span>All</span></div>
                <div><span>Admin</span></div>
                <div><span>Student</span></div>
                <div><span>Prof</span></div>
            </div>
        </div>
        <div className="users_table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>
                            <span className="role_style">Admin</span>
                        </td>
                        <td>
                            <span className="status_style active">Active</span>
                        </td>
                        <td className="actions">
                            <button className="edit_btn">
                            <FaUserEdit />
                            </button>
                            <button className="delete_btn">
                            <FaTrash />
                            </button>
                        </td>
                    </tr>
                     <tr>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>
                            <span className="role_style">Admin</span>
                        </td>
                        <td>
                            <span className="status_style active">Active</span>
                        </td>
                        <td className="actions">
                            <button className="edit_btn">
                            <FaUserEdit />
                            </button>
                            <button className="delete_btn">
                            <FaTrash />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td>
                            <span className="role_style">Student</span>
                        </td>
                        <td>
                            <span className="status_style inactive">Inactive</span>
                        </td>
                        <td className="actions">
                        <button className="edit_btn"> <FaUserEdit /> </button>
                            <button className="delete_btn"> <FaTrash /> </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;