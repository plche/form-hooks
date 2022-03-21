import styles from './Form.module.css';
import {useState} from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div className={styles.Form}>
            <table className={styles.Table_Form}>
                <tbody>
                    <tr>
                        <td><label htmlFor="firstName">First Name</label></td>
                        <td><input type="text" onChange={(e) => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lastName">Last Name</label></td>
                        <td><input type="text" onChange={(e) => setLastName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input type="email" onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input type="password" onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="confirmPassword">Confirm Password</label></td>
                        <td><input type="password" onChange={(e) => setConfirmPassword(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <h2>Your Form Data</h2>
            <table className={styles.Table_Data}>
                <tbody>
                    <tr>
                        <td>First Name </td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name </td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email </td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password </td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Confirm Password </td>
                        <td>{confirmPassword}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Form;