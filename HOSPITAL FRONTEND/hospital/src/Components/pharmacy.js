import React from "react";
import "./pharmacy.css";
import {
  BsTwitter,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsShareFill,
  BsHeartFill,
} from "react-icons/bs";
import { pharma } from "./medicines";
import { personalCare } from "./medicines";
import { BabyCare } from "./medicines";
import { WoundCare } from "./medicines";
import { Center } from "@chakra-ui/react";
import NavBar from "./navigationBar";
import Footer from "./footer";
const Pharmacy = () => {
  return (
    <>
  
      <br />
      <h2 className="rain_pro">Fever and Cough Essentials</h2>

      <div className="rain_jack"></div>
      <div className="img_ff">
        <section class="shop_section sec_ptb_120">
          <div class="containerr">
            {pharma.map((Products) => (
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                    <div class="share_btns"></div>
                    <a class="item_imag" href="shop_details.html">
                      <img
                        src={Products.url}
                        alt="image_not_found"
                        width={150}
                        style={{ marginLeft: "50px" }}
                      />
                    </a>
                    <div class="item_content">
                      <h3 class="item_title text-uppercase">
                        <a href="shop_details.html">{Products.title}</a>
                      </h3>
                      <div class="btns_group">
                        <span class="item_price bg_default_brown">
                          ₹{Products.mrp}
                        </span>
                        <a
                          class="btn btn_border border_black text-uppercase"
                          href="#!"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <br />
      <br />
      <h2 className="rain_pro">Other Essentials</h2>

      <div className="rain_jack"></div>
      <div className="img_ff">
        <section class="shop_section sec_ptb_120">
          <div class="containerr">
            {personalCare.map((pro) => (
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                    <div class="share_btns"></div>
                    <a class="item_imag" href="shop_details.html">
                      <img
                        src={pro.url}
                        alt="image_not_found"
                        width={150}
                        style={{ marginLeft: "50px" }}
                      />
                    </a>
                    <div class="item_content">
                      <h3 class="item_title text-uppercase">
                        <a href="shop_details.html">{pro.title}</a>
                      </h3>
                      <div class="btns_group">
                        <span class="item_price bg_default_brown">
                          ₹{pro.mrp}
                        </span>
                        <a
                          class="btn btn_border border_black text-uppercase"
                          href="#!"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <br />
      <br />
      <h2 className="rain_pro">Baby Care</h2>

      <div className="rain_jack"></div>
      <div className="img_ff">
        <section class="shop_section sec_ptb_120">
          <div class="containerr">
            {BabyCare.map((key) => (
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                    <div class="share_btns"></div>
                    <a class="item_imag" href="shop_details.html">
                      <img
                        src={key.url}
                        alt="image_not_found"
                        width={150}
                        style={{ marginLeft: "50px" }}
                      />
                    </a>
                    <div class="item_content">
                      <h3 class="item_title text-uppercase">
                        <a href="shop_details.html">{key.title}</a>
                      </h3>
                      <div class="btns_group">
                        <span class="item_price bg_default_brown">
                          ₹{key.mrp}
                        </span>
                        <a
                          class="btn btn_border border_black text-uppercase"
                          href="#!"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <br />
      <br />
      <h2 className="rain_pro">Wound Healing Essentials</h2>

      <div className="rain_jack"></div>
      <div className="img_ff">
        <section class="shop_section sec_ptb_120">
          <div class="containerr">
            {WoundCare.map((heal) => (
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                    <div class="share_btns"></div>
                    <a class="item_imag" href="shop_details.html">
                      <img
                        src={heal.url}
                        alt="image_not_found"
                        width={150}
                        style={{ marginLeft: "50px" }}
                      />
                    </a>
                    <div class="item_content">
                      <h3 class="item_title text-uppercase">
                        <a href="shop_details.html">{heal.title}</a>
                      </h3>
                      <div class="btns_group">
                        <span class="item_price bg_default_brown">
                          ₹{heal.mrp}
                        </span>
                        <a
                          class="btn btn_border border_black text-uppercase"
                          href="#!"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Pharmacy;
