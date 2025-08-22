import { useLocation, useNavigate } from "react-router-dom";

function CustomNavLink({ to, children, className = "", }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isActive = pathname === to || pathname.startsWith(to + "/");

    const handleClick = (e) => {
        if (isActive) {
            e.preventDefault();
            return;
        }
        navigate(to);
    };

    return (
        <div
            onClick={handleClick}
            className={`${className} ${isActive ? "active" : ""}`}
            style={{ cursor: "pointer" }}
        >
            {children}
        </div>
    );
}

export default CustomNavLink;
