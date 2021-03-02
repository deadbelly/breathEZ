import React from 'react';
import imgSrc from '../../assets/AQI-chart.jpg'
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <section className='faq-body'>
      <Collapsible trigger='What is AQI?' tabIndex={0}>
        <p>
          Air Quality Index(AQI) is a tool for the United States Enviromental Protection Agency(EPA). AQI uses color-coded categories and provides statements for each category that tell you about air quality in your area, which groups of people may be affected, and steps you can take to reduce your exposure to air pollution and is a basis for reporting current air quality.
        </p>
      </Collapsible>
      
      <Collapsible trigger='How does AQI work?' tabIndex={0}>
        <p className='paragraphs'>
          AQI goes from 0 to 500. The higher the AQI value, the greater level of air pollution and health concerns. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality.
        </p>
        <p className='paragraphs'>
            For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher.
        </p>
        <p className='paragraphs'>
          The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.
        </p>
        <img src={imgSrc} alt='Graph of air quality levels'/>
      </Collapsible>

      <Collapsible trigger='What are Pollutants?'>
        <div className='paragraphs'>
          <br></br>
            EPA establishes an AQI for five major air pollutants regulated by the Clean Air Act. Each of these pollutants has a national air quality standard set by EPA to protect public health:
            <ul>
              <li>ground-level ozone</li>
              <li>particle pollution (also known as particulate matter, including PM2.5 and PM10)</li>
              <li>carbon monoxide</li>
              <li>sulfur dioxide</li>
              <li>nitrogen dioxide</li>
            </ul>
        </div>
        <p className='paragraphs'> 
          Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled and cause serious health problems. Some particles less than 10 micrometers in diameter can get deep into your lungs and some may even get into your bloodstream. Of these, particles less than 2.5 micrometers in diameter, also known as fine particles or PM2.5, pose the greatest risk to health. Fine particles are also the main cause of reduced visibility (haze) in parts of the United States.
        </p>
        <p className='titles'>Difference in levels:</p>
        <div className='paragraphs'>
          <p>
            <b>p1/PM10</b>(particles with a diameter of 10 micrometres or less): these particles are small enough to pass through the throat and nose and enter the lungs. Once inhaled, these particles can affect the heart and lungs and cause serious health effects.
          </p>
          <p>
            <b>p2/PM2.5</b>(particles with a diameter of 2.5 micrometres or less): these particles are so small they can get deep into the lungs and into the bloodstream. There is sufficient evidence that exposure to PM2.5 over long periods (years) can cause adverse health effects. Note that PM10 includes PM2.5.
          </p>
        </div>
      </Collapsible>
      <Collapsible trigger='Mask Facts'>
        <p className='paragraphs'>
          <b>Cotton Handkerchief</b> – A handkerchief is a small, cotton piece of cloth usually used as a clothing accessory or to blow your nose. Some choose to wear it as a face mask. Research shows that it blocks 28% of 0.007 micron particles.
        </p>
        <p className='paragraphs'>
          <b>Homemade Mask</b> – A homemade mask is a mask that is sewn by an individual, usually comprised of cotton fabric. Research has shown that these types of masks filtered 69.4% of virus sized particles.
        </p>
        <p className='paragraphs'>
          <b>Dust Mask</b> –A dust mask is a mask that has not been tested to any government performance standards for filtration. They are designed to block larger particles while doing activities such as mowing grass, gardening, etc. to prevent irritation to the mouth, nose, and throat. Dusk masks are not respirators and cannot protect against extremely small particulate matter. There is usually no printing on the mask. 
        </p>
        <p className='paragraphs'>
          <b>Surgical Mask</b> – This type of mask is a face mask that is approved by the FDA for use as a surgical mask. They do not have printing on the mask. The mask is loose-fitting and is fluid-resistant to provide the wearer protection against large droplets, splashes, or sprays of bodily or other hazardous fluids. Surgical masks protect a patient from the wearer’s respiratory emissions. Research has shown that surgical masks filtered 80% of virus sized particles.
        </p>
        <p className='paragraphs'>
          <b>N95 Mask</b> – The N95 mask is a respirator mask that is tightfitting and filters at least 95% of of particles(PM) larger than 0.3 microns.
        </p>
      </Collapsible>
    </section>
  )
}

export default Faq;
