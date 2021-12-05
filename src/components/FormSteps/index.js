import React from "react";
import styles from "./styles.module.less";
import FormHeader from "../FormHeader";
import FormBody from "../FormBody";

const FormSteps = ({ children }) => {
  const renderHeader = () => {
    <div className={styles.first__content__wrapper}>
      <p> Cadastre-se Gratuitamente</p>
      <div className={styles.first__content__wrapper}>
        <p className={styles.first__content__wrapper__title}>
          {" "}
          e tenha um plano vitalício com
        </p>
        <div className={styles.first__content__wrapper__content}>
          <div className={styles.first__content__wrapper__content__info}>
            <span>1000</span>
            <p>impressões</p>
          </div>
          <div className={styles.first__content__wrapper__content__info}>
            <span>1GB</span>
            <p>de espaço</p>
          </div>
          <div className={styles.first__content__wrapper__content__info}>
            <span>3</span>
            <p>usuários</p>
          </div>
        </div>
      </div>
    </div>;
  };
  return (
    <>
      <FormHeader>{renderHeader()}</FormHeader>
      <FormBody>
        <div class="container-fluid" id="grad1">
          <div class="row justify-content-center mt-0">
            <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
              <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2>
                  <strong>Sign Up Your User Account</strong>
                </h2>
                <p>Fill all form field to go to next step</p>
                <div class="row">
                  <div class="col-md-12 mx-0">
                    <form id="msform">
                      {/*   <!-- progressbar --> */}
                      <ul id="progressbar">
                        <li class="active" id="account">
                          <strong>Digite seus dados</strong>
                        </li>
                        <li id="personal">
                          <strong>Selecione suas necessidade</strong>
                        </li>
                        <li id="confirm">
                          <strong>Finalizar cadastro</strong>
                        </li>
                      </ul>
                      {/*  <!-- fieldsets --> */}
                      <fieldset>
                        <div class="form-card">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
                          />
                          <input
                            type="text"
                            name="uname"
                            placeholder="UserName"
                          />
                          <input
                            type="password"
                            name="pwd"
                            placeholder="Password"
                          />
                          <input
                            type="password"
                            name="cpwd"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <input
                          type="button"
                          name="next"
                          class="next action-button"
                          value="Next Step"
                        />
                      </fieldset>
                      <fieldset>
                        <div class="form-card">
                          <h2 class="fs-title text-center">Success !</h2> <br />
                          <br />
                          <div class="row justify-content-center">
                            <div class="col-3">
                              <img
                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                class="fit-image"
                                alt=""
                              />
                            </div>
                          </div>{" "}
                          <br />
                          <br />
                          <div class="row justify-content-center">
                            <div class="col-7 text-center">
                              <h5>You Have Successfully Signed Up</h5>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormBody>
    </>
  );
};
export default FormSteps;
