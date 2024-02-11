import React from "react";

const Card = ({ cardData }) => {
  return (
    <div class="col-md-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {cardData.title}
          </h5>
          <h6 class="card-price text-center">
            {cardData.price}
            <span class="period">/monthly</span>
          </h6>
          <hr />
          <ul class="fa-ul  text-left">
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {cardData.user}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {cardData.storage}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li class={cardData.project}>
              <span class="fa-li">
                <i
                  className={`fas ${
                    cardData.project === "text-muted"
                      ? "fa-times text-black"
                      : "fa-check text-black"
                  }`}
                ></i>
              </span>
              Unlimited Private Projects
            </li>
            <li class={cardData.phone}>
              <span class="fa-li">
                <i
                  className={`fas ${
                    cardData.phone === "text-muted"
                      ? "fa-times text-black"
                      : "fa-check text-black"
                  }`}
                ></i>
              </span>
              Dedicated Phone Support
            </li>
            <li class={cardData.subDomain}>
              <span class="fa-li">
                <i
                  className={`fas ${
                    cardData.subDomain === "text-muted"
                      ? "fa-times text-black"
                      : "fa-check text-black"
                  }`}
                ></i>
              </span>
              Free Subdomain
            </li>
            <li class={cardData.monthly}>
              <span class="fa-li">
                {/* <i class={cardData.monthly}></i> */}
                <i
                  className={`fas ${
                    cardData.monthly === "text-muted"
                      ? "fa-times text-black"
                      : "fa-check text-black"
                  }`}
                ></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
