import React from "react";
import styles from "./styles.module.less";
import FormHeader from "../FormHeader";
import FormBody from "../FormBody";

const FirstForm = ({ children }) => {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  const nextClick = () => {
    $(".next").click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 600,
        }
      );
    });
  };
  const previosClick = () => {
    $(".previous").click(function () {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            previous_fs.css({ opacity: opacity });
          },
          duration: 600,
        }
      );
    });
  };
  const radioClick = () => {
    $(".radio-group .radio").click(function () {
      $(this).parent().find(".radio").removeClass("selected");
      $(this).addClass("selected");
    });
  };
  const onSubmit = () => {
    $(".submit").click(function () {
      return false;
    });
  };

  return (
    <>
      <FormHeader>
        <span className={styles.first__header__title}>Nome do cadastrado</span>
        <p className={styles.first__header__subtitle}>
          Bem-vindo a revolução em gerenciamento de documentos e impressões em
          nuvem
        </p>
      </FormHeader>
      <FormBody>
        <div className={styles.first}>
          <div className={styles.first__img}>
            <img src={"../../images/first.svg"} alt="cadastre-se" />
          </div>
          <div className={styles.first__content}>
            <div className={styles.first__content__title}>
              <p> Adeus papel!</p>
              <p>Seu portal está pronto.</p>
            </div>

            <div className={styles.first__content__wrapper}>
              <p className={styles.first__content__wrapper__title}>
                {" "}
                Seu plano gratuíto garante acesso vitalício a
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
            <button className={styles.first__content__wrapper__content__button}>
              {" "}
              Ir para o meu portal
            </button>
          </div>
        </div>
      </FormBody>
    </>
  );
};
export default FirstForm;
