import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <section>
      <h1>FAQ</h1>
      <h2>What is AQI</h2>
      <p>
        Air Quality Index(AQI) is a tool for the United States Enviromental Protection Agency(EPA). AQI uses color-coded categories and provides statements for each category that tell you about air quality in your area, which groups of people may be affected, and steps you can take to reduce your exposure to air pollution and is a basis for reporting current air quality.
      </p>
      <h2>How does AQI work?</h2>
      <p>
        AQI goes from 0 to 500. The higher the AQI value, the greater level of air pollution and health concerns. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality.
      </p>
      <p>
        For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher.
      </p>
      <p>
        The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.
        <img src='' />
      </p>

    </section>
  )
}

export default Faq;
