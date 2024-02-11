import React from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const data = [
    {
      title: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      projectIcon: "",
      phone: "text-muted",
      phoneIcon: "",
      subDomain: "text-muted",
      subDomainIcon: "",
      monthly: "text-muted",
      monthlyIcon: "",
    },
    {
      title: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: " ",
      projectIcon: "",
      phone: "",
      phoneIcon: "",
      subDomain: "",
      subDomainIcon: "",
      monthly: "text-muted",
      monthlyIcon: "",
    },

    {
      title: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      domain: "Unlimited Free Subdomain",
      project: "",
      projectIcon: "",
      phone: "",
      phoneIcon: "",
      subDomain: "",
      subDomainIcon: "",
      monthly: "",
      monthlyIcon: "",
    },
  ];

  return (
    <>
      <div className="pricing py-5 bg-custom">
        <div className="container fill-height">
          <div className="row">
            {data.map((item, index) => {
              return <Card cardData={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
