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
        <img src='../../assets/AQI-chart.jpg'/>
      </p>
      <h1>What are Pollutants?</h1>
      <h2>Five Major Pollutants</h2>
      <p>
      EPA establishes an AQI for five major air pollutants regulated by the Clean Air Act. Each of these pollutants has a national air quality standard set by EPA to protect public health:
        <ul>
          ground-level ozone
          particle pollution (also known as particulate matter, including PM2.5 and PM10)
          carbon monoxide
          sulfur dioxide
          nitrogen dioxide
        </ul>
      </p>
      <p>
        Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled and cause serious health problems. Some particles less than 10 micrometers in diameter can get deep into your lungs and some may even get into your bloodstream. Of these, particles less than 2.5 micrometers in diameter, also known as fine particles or PM2.5, pose the greatest risk to health. Fine particles are also the main cause of reduced visibility (haze) in parts of the United States.
      </p>
      <h2>Difference in levels:</h2>
      <p>
        p1/PM10(particles with a diameter of 10 micrometres or less): these particles are small enough to pass through the throat and nose and enter the lungs. Once inhaled, these particles can affect the heart and lungs and cause serious health effects.
        p2/PM2.5PM2.5(particles with a diameter of 2.5 micrometres or less): these particles are so small they can get deep into the lungs and into the bloodstream. There is sufficient evidence that exposure to PM2.5 over long periods (years) can cause adverse health effects. Note that PM10 includes PM2.5.
      </p>
    </section>
  )
}

export default Faq;
