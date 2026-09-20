import './FirePipeline.css';

export default function FirePipeline() {
  return (
    <div className="fire-pipeline-page">
      <h1>Policy Extraction and Mapping for Wildfire Resilience</h1>

      <h2>Overview</h2>
      <p>
        This project develops a machine learning pipeline to help city planners
        identify fire-related policies in municipal planning documents for the
        PIRS scorecard, a wildfire-resilience assessment tool.
      </p>
      <p>
        The policy-extraction workflow combines large language model querying
        with rule-based methods to analyze both structured and unstructured
        documents. Policies are classified with Latent Dirichlet Allocation
        (LDA), enabling efficient evaluation across relevant policy categories.
      </p>
      <p>
        I contributed to spatially tagging extracted policies with named entity
        recognition (NER), helping make wildfire policy and risk easier to map
        and analyze geographically.
      </p>

      <h2>Poster</h2>
      <div className="fire-pipeline-content">
        <iframe
          src="/wildfire_poster.pdf"
          title="Wildfire Policy Extraction Poster"
        />
      </div>

      <p>
        <a href="/wildfire_poster.pdf" target="_blank" rel="noopener noreferrer">
          Download Poster (PDF)
        </a>
        {' · '}
        <a href="/data452_report.pdf" target="_blank" rel="noopener noreferrer">
          Download Full Report (PDF)
        </a>
      </p>
    </div>
  );
}
