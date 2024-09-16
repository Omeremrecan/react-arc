import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "services/SecurityService";

const secure = (Page: FC<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const [isSecured, setIsSecured] = useState(false);

    useEffect(() => {
      setIsSecured(false);
      isAuthenticated()
        .then(() => setIsSecured(true))
        .catch(() => {
          setIsSecured(false);
          navigate("/auth/login");
        });
    }, []);

    return isSecured ? <Page {...props} /> : <></>;
  };
};

export default secure;
