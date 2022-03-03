import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { auth } from "../firebase_config";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="welcome">
            <div className="profile-pic">
              <h1 className="text-center mb-4">
                <AccountBoxIcon style={{ fontSize: "100px" }} />
              </h1>
            </div>
            <div className="Profile">
              <h1 className="text-center mb-4">Profile</h1>{" "}
            </div>

            <div className="text-center">
              <div className="email">
                {" "}
                <p>Email</p>{" "}
              </div>
              <div>
                <h5>{auth.currentUser.email}</h5>
              </div>
            </div>

            <div>
              {" "}
              <Button className="w-100 mt-5" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
