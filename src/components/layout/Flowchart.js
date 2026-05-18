import React, { useContext } from 'react';
import './Flowchart.css'; 
import { LanguageContext } from '../../context/LanguageContext';


const Flowchart = () => {
  const { data } = useContext(LanguageContext);

  return (
    <div className="page-transition">
      <section className="section flowchart-section">
        <div className="container">
          <p className="summary-text" style={{ textAlign: 'center', marginBottom: '30px' }}>
            {data.Flowchart.summary}
          </p>

          <div className="flowchart-container">
            {/* Linea di base (Desktop) */}
            <div className="flow-line"></div>

            <div className="flow-steps">
              
              {/* Fase 1 */}
              <div className="flow-node">
                <div className="node-content top">{data.Flowchart.step1}</div>
                <div className="node-dot"></div>
              </div>

              {/* Fase 2 */}
              <div className="flow-node">
                <div className="node-content top highlight-blue">{data.Flowchart.step2_1}</div>
                <div className="node-dot"></div>
                <div className="node-content bottom">{data.Flowchart.step2_2}</div>
              </div>

              {/* Fase 3: Milestone Trattamento */}
              <div className="flow-node milestone">
                <div className="node-content top font-bold">{data.Flowchart.step3}</div>
                <div className="node-dot main"></div>
              </div>

              {/* Monitoraggio PSA - Testo fluttuante */}
              <div className="flow-node PSA-repeat">
                <div className="node-dot small"></div>
                <div className="node-content bottom italic">{data.Flowchart.step4_1} <br/><span>{data.Flowchart.step4_2}</span></div>
              </div>

              {/* ALERT: Sospetta Progressione */}
              <div className="flow-node alert-node">
                <div className="node-content top ">
                  <i className="fa-solid fa-arrow-up"></i>
        {data.Flowchart.step5}                </div>
                <div className="node-dot warning"></div>
              </div>

              {/* Fase 4: 6 Mesi */}
              <div className="flow-node">
                <div className="node-content top highlight-blue">{data.Flowchart.step6_1}<br/><span>{data.Flowchart.step6_2}</span></div>
                <div className="node-dot"></div>
                <div className="node-content bottom">{data.Flowchart.step6_3}</div>
              </div>

              {/* Fase 5: Follow-up */}
              <div className="flow-node">
                <div className="node-content top">{data.Flowchart.step7}</div>
                <div className="node-dot"></div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flowchart;