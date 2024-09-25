import React from 'react';
import './styles.css';

function PricingTables() {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-table">
        <table>
          <thead>
            <tr>
              <th>Time Period (Hard Deadline)</th>
              <th>Editing Included</th>
              <th>Podcast Strategy + Research Included</th>
              <th>Equipments Included</th>
              <th>Number of Max. Recordings Allowed</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Podcast</td>
              <td>No</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>1</td>
              <td>1299 INR</td>
            </tr>
            <tr>
              <td>1 Podcast</td>
              <td>Yes</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>1</td>
              <td>2499 INR</td>
            </tr>
            <tr>
              <td>1 Podcast</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>1</td>
              <td>3499 INR</td>
            </tr>
            <tr>
              <td>1 Day</td>
              <td>No</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>5</td>
              <td>2999 INR</td>
            </tr>
            <tr>
              <td>1 Day</td>
              <td>Yes</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>5</td>
              <td>4999 INR</td>
            </tr>
            <tr>
              <td>1 Day</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>5</td>
              <td>5999 INR</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pricing-table">
        <table>
          <caption>Monthly Plans</caption>
          <thead>
            <tr>
              <th>Monthly Plan</th>
              <th>Editing Included</th>
              <th>Podcast Strategy + Research Included</th>
              <th>Creator Creators Agency Services Included</th>
              <th>Equipments Included</th>
              <th>Number of Max. Recordings Allowed</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Month</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>15</td>
              <td>18999 INR</td>
            </tr>
            <tr>
              <td>1 Month</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>15</td>
              <td>22999 INR</td>
            </tr>
            <tr>
              <td>1 Month</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>15</td>
              <td>24999 INR</td>
            </tr>
            <tr>
              <td>1 Month</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Lighting, Mic setup, Decor elements, Sound Proofing</td>
              <td>Any</td>
              <td>29999 INR (Discounted Price) - Actual Price (39999 INR)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PricingTables;
