const { useEffect, useRef } = React;

function Dashboard() {

  const chartRef = useRef(null);

  const metrics = {
    dau: 12450,
    conversion: 3.2,
    retention: 42,
    churn: 5.6
  };

  useEffect(() => {

    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["DAU", "Conversion %", "Retention %", "Churn %"],
        datasets: [{
          label: "Product Metrics",
          data: [
            metrics.dau,
            metrics.conversion,
            metrics.retention,
            metrics.churn
          ]
        }]
      }
    });

  }, []);

  return (

    <div>

      <div className="metric-grid">

        <div className="metric-card">
          <h3>Daily Active Users</h3>
          <p>{metrics.dau}</p>
        </div>

        <div className="metric-card">
          <h3>Conversion Rate</h3>
          <p>{metrics.conversion}%</p>
        </div>

        <div className="metric-card">
          <h3>Retention</h3>
          <p>{metrics.retention}%</p>
        </div>

        <div className="metric-card">
          <h3>Churn</h3>
          <p>{metrics.churn}%</p>
        </div>

      </div>

      <canvas ref={chartRef}></canvas>

    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));
