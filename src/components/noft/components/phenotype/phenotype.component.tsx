import s from "./phenotype.module.scss";

import clsx from "clsx";
// import { Link } from "react-router-dom";

export function PhenotypeComponent() {
  const Phenotype = (
    <section className={s.phenotype}>
      <h2 className={s.sectionHeading}>phenotype</h2>
      <div className={s.phenotypeBlock}>
        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={s.phenotypePreviewContent}>
                <img src="/images/phenotype/bg.png" alt="#" />
              </div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>BGRND</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={clsx(s.phenotypePreviewContent, s.phenotypePreviewContentSize)}></div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>size</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={clsx(s.phenotypePreviewContent, s.phenotypePreviewContentBody)}></div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>body</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={s.phenotypePreviewContent}>
                <img src="/images/phenotype/pattern.svg" alt="#" />
              </div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>pattern</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={s.phenotypePreviewContent}>
                <img src="/images/phenotype/head.png" alt="#" />
              </div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>head</h3>
        </div>

        <div className={s.phenotypeItem}>
          <div className={clsx(s.phenotypePreview)}>
            <div className={s.phenotypePreviewInborder}>
              <div className={s.phenotypePreviewContent}>
                <img src="/images/phenotype/eyes.png" alt="#" />
              </div>
            </div>
          </div>
          <h3 className={s.phenotypeCaption}>eyes</h3>
        </div>
      </div>
    </section>
  );

  return Phenotype;
}
